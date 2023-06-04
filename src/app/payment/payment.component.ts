import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  total: string
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent {

  amountTendered: number = 0;
  changeDue: number = 0;

  constructor(public dialogRef: MatDialogRef<PaymentComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  pay(data: any) {
    this.changeDue = this.amountTendered - Number(data);
  }
}
