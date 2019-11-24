import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Expense } from '../../model/expense/expense.model';
import { ExpenseProvider } from '../../providers/expense/expense';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-expense-add',
  templateUrl: 'expense-add.html',
})
export class ExpenseAddPage {
  public form: FormGroup;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private expenseProvider: ExpenseProvider,
    private toastProvider: ToastProvider
  ) {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      value: new FormControl('', [Validators.required, Validators.min(0.01)]),
      date: new FormControl(new Date()),
    });
  }

  public onSubmitExpense() {
    if (this.form.invalid) {
      this.showInvalidFormToast();
    } else {
      const data = this.form.getRawValue();

      this.expenseProvider.addExpense(
        new Expense({
          title: data.title,
          value: +data.value,
          date: data.date,
        })
      );
      this.navCtrl.push('HomePage', {}, { direction: 'back' });
    }
  }

  private showInvalidFormToast() {
    const toastConfiguration = {
      options: {
        position: 'bottom',
        message: 'Por favor, preencha todos os campos obrigatórios.',
        duration: 2000,
        dismissOnPageChange: true,
        showCloseButton: true,
        closeButtonText: 'Fechar',
      },
    };
    this.toastProvider.showToast(toastConfiguration);
  }
}
