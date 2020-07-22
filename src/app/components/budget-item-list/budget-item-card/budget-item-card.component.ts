import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() isIncome: Boolean;
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() updateItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  newEdit: BudgetItem;
  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick(): void {
    this.xButtonClick.emit();
  }

  handleInput(event, name): void {
    const text = event.target.textContent;
    this.newEdit = { ...this.item, [name]: text };
  }

  updateAmount(event): void {
    if (event['code'] === 'Enter' && event['key'] === 'Enter') {
      event.preventDefault();
      this.updateItem.emit(this.newEdit);
      event.srcElement.blur();
    }
  }
}
