import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Item, products} from '../items';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ProductListComponent>) {}

  searchText = '';
  products: Array<Item> = products;

  ngOnInit() {
  }

  selectItem(item: Item) {
    console.log(`The selected item is: ${item.title}`);
  }
}
