import { Component, Input } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent {
  @Input() item: Item = { title: 'default', description: 'default' };
}
