import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemShoppingList } from '../app.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnChanges {
  @Input() cartItems: ItemShoppingList[] = [];
  @Output() emitterShoppingCart: EventEmitter <any> = new EventEmitter();
  @Output() emitterRemoveItem: EventEmitter <any> = new EventEmitter();
  @Output() emitterClearCart: EventEmitter <any> = new EventEmitter();
  total: number = 0;
  
  constructor(public dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.total = changes['cartItems'].currentValue.reduce((acc: any, curr: any) => {
      return acc + (curr.price * curr.quantity);
    }, 0);
  }

  subtrackQuantity(item: ItemShoppingList) {
    if (item.quantity - 1 === 0) {
      this.emitterRemoveItem.emit(item);
    } else {
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      this.emitterShoppingCart.emit(item);
    }
  }

  addQuantity(item: ItemShoppingList) {
    item.quantity++;
    item.totalPrice = item.unitPrice * item.quantity;
    this.emitterShoppingCart.emit(item);
  }

  clearCart() {
    this.emitterClearCart.emit();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProductListComponent, {
      width: '60%',
      height: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openPaymentModal(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PaymentComponent, {
      width: '400px',
      height: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.total
    });
  }
}
