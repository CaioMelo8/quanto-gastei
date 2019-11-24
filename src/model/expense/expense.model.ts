export interface IExpense {
  title?: string;
  description?: string;
  value?: number;
  date?: string | Date;
}

export class Expense {
  public title: string;
  public description: string;
  public value: number;
  public date: Date;

  constructor(expense: IExpense) {
    if (!expense) return new Expense({});

    this.title = expense.title;
    this.description = expense.description;
    this.value = expense.value;
    this.date = expense.date instanceof Date ? expense.date : new Date(expense.date);
  }
}
