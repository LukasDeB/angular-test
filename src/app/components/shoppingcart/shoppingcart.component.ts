import { Component, OnInit } from '@angular/core';

import { ItemCartDataService } from '../../services/item-cart-data.service';
import { ShoppingcartService } from '../../services/shoppingcart.service';
import { Cart } from '../../models/cart.model';
import { Item } from '../../models/item.model';
import { CartItem } from '../../models/cartItem.model';



@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cart: Cart;
  showCart = false;
  
  constructor(private _itemCartService: ItemCartDataService,
              private _shoppingcartService: ShoppingcartService) {
      this.cart = _shoppingcartService.setCart();
      _shoppingcartService.cart$.subscribe((cart) => {
        this.cart = cart;
      });
      _itemCartService.item$.subscribe((data) => {
        _shoppingcartService.addItem(data);
      });    
  }

  ngOnInit() {
  }

  removeFromCart(item: CartItem){
    this._shoppingcartService.removeItem(item);
  }
}
