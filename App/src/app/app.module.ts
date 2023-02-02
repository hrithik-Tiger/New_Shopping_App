import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import {AngularFireModule } from '@angular/fire/compat'
import { enviroment } from 'src/enviroments/enviroments';
import { LoginComponent } from './LoginComponent/login/login.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartComponent } from './Dashboard/cart/cart.component';
import { CartItemComponent } from './Dashboard/cart/cart-item/cart-item.component';
import { FilterComponent } from './Dashboard/filter/filter.component';
import { ProductListComponent } from './Dashboard/product-list/product-list.component';
import { LoadingspinnerComponent } from './Shared/loadingspinner/loadingspinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ProductItemComponent } from './Dashboard/product-list/product-item/product-item.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CartpageComponent,
    CartComponent,
    FilterComponent,
    ProductListComponent,
    LoadingspinnerComponent,
    ProductItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    FormsModule  ,
    ReactiveFormsModule,
    HttpClientModule ,    
   NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
