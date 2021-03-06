import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
if(isNaN(productIdFromRoute)){
  console.log('productId FromRoute IS NOT a number');
}else {
  console.log('productId FromRoute: ' + productIdFromRoute);
}

    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
