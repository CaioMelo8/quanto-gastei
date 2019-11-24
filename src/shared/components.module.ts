import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QgNavbarComponent } from '../components/qg-navbar/qg-navbar';

@NgModule({
  declarations: [QgNavbarComponent],
  imports: [CommonModule, IonicPageModule],
  exports: [QgNavbarComponent],
})
export class ComponentsModule {}
