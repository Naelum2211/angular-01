import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

   share(prodName: string) {
    window.alert('The product' + prodName + 'has been shared!');
  }
  
  onNotify(priceProd: number){
    /* const priceDisplay = priceProd | currency; */
    window.alert('The product price is $' + priceProd)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/