import { Injectable } from '@angular/core';
import { Toast, ToastController, ToastOptions } from 'ionic-angular';

export interface ToastConfiguration {
  options: ToastOptions;
  onWillDismiss?: (data: any, role: string) => void;
  onDidDismiss?: (data: any, role: string) => void;
  allowOverlay?: boolean;
}

@Injectable()
export class ToastProvider {
  private activeToast: Toast;

  constructor(private toastCtrl: ToastController) {}

  public showToast(configuration: ToastConfiguration) {
    if (!configuration) return;

    if (configuration.allowOverlay || !this.activeToast) {
      this.activeToast = this.toastCtrl.create(configuration.options);

      this.activeToast.onWillDismiss(configuration.onWillDismiss);
      this.activeToast.onDidDismiss((data: any, role: string) => {
        if (configuration.onDidDismiss) {
          configuration.onDidDismiss(data, role);
        }

        this.activeToast = null;
      });

      this.activeToast.present();
    }
  }
}
