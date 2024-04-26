import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsItem } from 'src/app/models/products-list-response.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() public selectedProduct = new ProductsItem();
  @Output() public returnToProductsEmit = new EventEmitter<any>(); 

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
  }

  public addToBasket() {
    console.log('ADD ITEM CLICKED');
    this.productsService.addShoppingCartItemInvoker.next(this.selectedProduct);
  }

  public returnToProducts() {
    this.returnToProductsEmit.emit();
  }

}
