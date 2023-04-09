import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent {
  @Input() item: Item = { title: 'default', description: 'default', price: 0 };
  @Output() itemCardEmitter: EventEmitter <Item> = new EventEmitter();

  addItemToCart(item: Item) {
    this.itemCardEmitter.emit(item);
  }
}
