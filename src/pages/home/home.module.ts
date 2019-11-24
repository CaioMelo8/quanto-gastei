import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QgLoadingCircleModule } from '../../components/qg-loading-circle/qg-loading-circle.module';
import { ComponentsModule } from '../../shared/components.module';
import { HomePage } from './home';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, ComponentsModule, IonicPageModule.forChild(HomePage), QgLoadingCircleModule],
})
export class HomePageModule {}
