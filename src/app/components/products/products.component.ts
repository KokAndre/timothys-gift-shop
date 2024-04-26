import { Component, OnInit } from '@angular/core';
import { ProductsItem } from 'src/app/models/products-list-response.model';

const simulatedProductsDataFromDatabaseCall = [
  {
    "name": "Bos Bevok Ice bucket",
    "imageName": "bos-bevok-bucket.jpg",
    "productId": 1,
    "productDescription": "This is the Bos Bevok ice bucket. -- (This is placeholder description text)",
    "productPrice": "R 250.00",
    "productRating": 4.7
  },
  {
    "name": "Klipdrift Ice Bucket",
    "imageName": "klipdrift-bucket.jpg",
    "productId": 2,
    "productDescription": "This is the Klipdrift ice bucket. -- (This is placeholder description text)",
    "productPrice": "R 250.00",
    "productRating": 5.0
  },
  {
    "name": "Windoek Ice Bucket",
    "imageName": "windiek-bucket.jpeg",
    "productId": 3,
    "productDescription": "This is the Windoek ice bucket. -- (This is placeholder description text)",
    "productPrice": "R 250.00",
    "productRating": 3.2
  },
  {
    "name": "VW Amarok Cupholder",
    "imageName": "vw-amarok-cupholder.png",
    "productId": 4,
    "productDescription": "This is a high quality 3D printed cupholder for VW Amarok. -- (This is placeholder description text)",
    "productPrice": "R 150.00",
    "productRating": 4.9
  }
]

enum screenStatesEnum {
  ProductsLandingPage = 'productsLandingPage',
  ProductDetailPage = 'productDetailPage'
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public productsDataFromResponse = new Array<ProductsItem>;
  public selectedProductForProductDetails = new ProductsItem;
  public screenStates = screenStatesEnum;
  public activeScreen: screenStatesEnum = screenStatesEnum.ProductsLandingPage;

  constructor() { }

  ngOnInit() {
    this.productsDataFromResponse = simulatedProductsDataFromDatabaseCall;
  }

  public showProductDetails(selectedProduct: ProductsItem) {
    this.selectedProductForProductDetails = selectedProduct;
    this.activeScreen = screenStatesEnum.ProductDetailPage
  }

  public returnToProducts() {
    this.selectedProductForProductDetails = new ProductsItem();
    this.activeScreen = screenStatesEnum.ProductsLandingPage
  }

}
