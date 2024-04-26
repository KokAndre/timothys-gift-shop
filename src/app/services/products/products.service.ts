import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsItem } from 'src/app/models/products-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public addShoppingCartItemInvoker = new Subject<ProductsItem>();

  constructor() { }
}
