import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent, children: [
      {
        path: '', redirectTo: 'products', pathMatch: 'full',
      },
      // {
      //   path: 'home', component: HomePageComponent
      // },
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'contact-us', component: ContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
