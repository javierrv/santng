import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cartItems: string[] = [];
  title = 'point_of_sale';

  addToCart(item: string) {
    this.cartItems.push(item);
  }
}
