import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ItemCartDataService } from './services/item-cart-data.service';
import { ProductsService } from './services/products.service';
import { ShoppingcartService } from './services/shoppingcart.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ShoppingcartComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule
  ],
  providers: [
  ItemCartDataService,
  ProductsService,
  ShoppingcartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
