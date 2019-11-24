import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpenseValuePipe } from '../pipes/expense-value/expense-value';

@NgModule({
  declarations: [ExpenseValuePipe],
  exports: [ExpenseValuePipe],
  providers: [CurrencyPipe],
})
export class PipesModule {}
