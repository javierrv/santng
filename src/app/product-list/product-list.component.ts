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
  @Output() emitterProductList: EventEmitter <Item> = new EventEmitter();

  ngOnInit() {}

  selectItem(item: Item) {
    this.emitterProductList.emit(item);
  }
}
