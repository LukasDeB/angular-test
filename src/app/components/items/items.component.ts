import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { CartItem } from '../../models/cartItem.model';
import { ItemCartDataService } from '../../services/item-cart-data.service';
import { ProductsService } from '../../services/products.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  selectedProduct: Item;
  products: any;

  constructor(
      private _itemCartService: ItemCartDataService,
      private _productsService: ProductsService,
      public _snackBar: MatSnackBar
    ){ 
      _productsService.getProducts().subscribe((p) => {
        this.products = p;
      }); 
    }

  ngOnInit() {
  }

  addItemToCart(selectedProduct: Item){
    let cartItem = new CartItem(selectedProduct, 1);
  	this._itemCartService.addItemToCart(cartItem);
	let message = cartItem.product.name + ' Agregado al carro!';
	this._snackBar.open(message, 'Ok', {
		duration: 2000,
	});      
}
}
