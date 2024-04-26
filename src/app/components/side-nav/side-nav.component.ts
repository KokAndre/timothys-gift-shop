import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { ProductsItem } from 'src/app/models/products-list-response.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public shoppingCartList = new Array<ProductsItem>();

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(public router: Router, public productsService: ProductsService) { }

  ngOnInit() {
    this.subscribeToAddItemToCart();
  }

  public subscribeToAddItemToCart () {
    this.productsService.addShoppingCartItemInvoker.subscribe(itemAddedToCart => {
      console.log('ITEM ADDED TO CART: ', itemAddedToCart);
      this.shoppingCartList.push(itemAddedToCart);
    });
  }

  public navigateToHomePage() {
    this.router.navigateByUrl('/home');
  }

  public deleteItemFromBasket(productId: number) {
    this.shoppingCartList = this.shoppingCartList.filter(x => x.productId !== productId);

    if (!this.shoppingCartList?.length) {
      this.trigger.closeMenu();
    }
  }

}
