import { Injectable } from '@angular/core';
import { Alert, AlertController, AlertOptions } from 'ionic-angular';

interface ActiveAlert {
  alert: Alert;
  allowOverlay: boolean;
}

export interface AlertConfiguration {
  options: AlertOptions;
  onWillDismiss?: (data: any, role: string) => void;
  onDidDismiss?: (data: any, role: string) => void;
  allowOverlay?: boolean;
}

@Injectable()
export class AlertProvider {
  private activeAlert: ActiveAlert;

  constructor(private alertCtrl: AlertController) {}

  public showInfoAlert(configuration: AlertConfiguration) {
    if (!configuration) return;

    if (this.activeAlert.allowOverlay || !this.activeAlert) {
      this.activeAlert = {
        alert: this.alertCtrl.create(configuration.options),
        allowOverlay: configuration.allowOverlay,
      };

      this.activeAlert.alert.onWillDismiss(configuration.onWillDismiss);
      this.activeAlert.alert.onDidDismiss((data: any, role: string) => {
        if (configuration.onDidDismiss) {
          configuration.onDidDismiss(data, role);
        }

        this.activeAlert = null;
      });

      this.activeAlert.alert.present();
    }
  }
}
