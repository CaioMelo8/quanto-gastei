import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFittextModule } from 'angular-fittext';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../shared/pipes.module';
import { QgLoadingCircleComponent } from './qg-loading-circle';

@NgModule({
  declarations: [QgLoadingCircleComponent],
  imports: [AngularFittextModule, CommonModule, IonicPageModule, PipesModule],
  exports: [QgLoadingCircleComponent],
})
export class QgLoadingCircleModule {}
