import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Expense } from '../../model/expense/expense.model';
import { ExpenseProvider } from '../../providers/expense/expense';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  public expenses: Expense[];
  public monthlyExpenses: Expense[];
  public monthlyTotal: number = 0;

  constructor(public navCtrl: NavController, private expenseProvider: ExpenseProvider) {}

  ngOnInit() {
    this.expenses = this.expenseProvider.getExpenses();
    this.monthlyExpenses = this.expenseProvider.getMonthlyExpenses();
    this.calculateMonthlyTotal();
  }

  public goToDetailPage() {}

  public goToExpenseAddPage() {
    this.navCtrl.push('ExpenseAddPage');
  }

  private calculateMonthlyTotal() {
    if (this.monthlyExpenses && this.monthlyExpenses.length > 0) {
      this.monthlyTotal = 0;
      this.monthlyExpenses.forEach(expense => (this.monthlyTotal += expense.value));
    }
  }
}
