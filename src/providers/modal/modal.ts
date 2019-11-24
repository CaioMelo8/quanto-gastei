import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from 'ionic-angular';

@Injectable()
export class ModalProvider {
  constructor(private modalCtrl: ModalController) {}

  public showModal(component: any, data: any, options: ModalOptions) {
    const newOptions: ModalOptions = { ...options };
    this.modalCtrl.create(component, data, newOptions);
  }
}
