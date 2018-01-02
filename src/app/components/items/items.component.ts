import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { CartItem } from '../../models/cartItem.model';

import { ItemCartDataService } from '../../services/item-cart-data.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  selectedProducto: Item;
  products: any;

  constructor(
      private _itemCartService: ItemCartDataService,
      private _productsService: ProductsService
    ){ 

      _productsService.getProducts().subscribe((p) => {
        this.products = p;
      }); 
    }

  ngOnInit() {
  	
  }


  addItemToCart(selectedProducto: Item){
    let cartItem = new CartItem(selectedProducto, 1);
  	this._itemCartService.addItemToCart(cartItem);
  }
}