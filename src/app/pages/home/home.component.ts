import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any[];
  balance: Number = 0;
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
    this.list = [];
  }

  sumBudgetItems() {
    this.balance = this.budgetItems.reduce((acc, cur) => (acc + cur.amount), 0);
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.sumBudgetItems();
  }

  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.sumBudgetItems();
  }

  editListitem(item: BudgetItem, newItem: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1, newItem);
  }
}
