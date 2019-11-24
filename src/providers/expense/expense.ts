import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Expense } from '../../model/expense/expense.model';

@Injectable()
export class ExpenseProvider {
  private url: string;

  constructor() {
    this.url = `${environment.host}/expense`;
  }

  public getExpenses() {
    return [...this.expenses];
  }

  public getMonthlyExpenses() {
    const currentDate = new Date();
    return this.expenses.filter(expense => {
      console.log(expense.title);
      console.log(expense.date);
      return expense.date.getMonth() === currentDate.getMonth();
    });
  }

  public addExpense(expense: Expense) {
    if (expense) {
      this.expenses.push(expense);
    }
  }

  private expenses: Expense[] = [
    new Expense({
      title: 'Chuteira',
      value: 161,
      date: '2019/08/09',
    }),
    new Expense({
      title: 'Aluguel (Nayara)',
      value: 200,
      description: 'Antes da mudança',
      date: '2019/08/14',
    }),
    new Expense({
      title: 'Leite Integral (x2)',
      value: 6.5,
      date: '2019/11/01',
    }),
  ];
}
