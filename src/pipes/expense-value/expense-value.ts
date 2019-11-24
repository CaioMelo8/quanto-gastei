import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expenseValue',
})
export class ExpenseValuePipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: number, currencyCode?: string) {
    let realValue = value;
    let suffix = '';

    if (value >= 1000000000) {
      realValue = value / 1000000000;
      suffix = 'bilhões';
    } else if (value >= 1000000) {
      realValue = value / 1000000;
      suffix = 'milhões';
    } else if (value >= 1000) {
      realValue = value / 1000;
      suffix = 'mil';
    }

    return `${this.currencyPipe.transform(realValue, currencyCode, 'symbol', '1.0-2')} ${suffix}`;
  }
}
