import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../shared/components.module';
import { ExpenseAddPage } from './expense-add';

@NgModule({
  declarations: [ExpenseAddPage],
  imports: [ComponentsModule, IonicPageModule.forChild(ExpenseAddPage), ReactiveFormsModule],
})
export class ExpenseAddPageModule {}
