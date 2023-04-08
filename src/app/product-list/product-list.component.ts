import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Item, products} from '../items';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  searchText = '';
  products: Array<Item> = products;
  @Output() emitter: EventEmitter <any> = new EventEmitter();

  ngOnInit() {
  }

  selectItem(item: Item) {
    this.emitter.emit(item.title);
    console.log(`The selected item is: ${item.title}`);
  }
}
