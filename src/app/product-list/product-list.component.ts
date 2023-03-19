import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  constructor(public dialogRef: MatDialogRef<ProductListComponent>) {}

  products = [
    { "name": 'vel1', "description": 'descripción 1' }, 
    { "name": 'vel2', "description": 'descripción 2' }, 
    { "name": 'vel3', "description": 'descripción 3' }, 
    { "name": 'vel4', "description": 'descripción 4' }, 
    { "name": 'vel5', "description": 'descripción 5' }
  ];
}
