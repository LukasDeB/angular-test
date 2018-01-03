import { Component, OnInit } from '@angular/core';
import { ItemCartDataService } from '../../services/item-cart-data.service';
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
  
  constructor(private _itemCartService: ItemCartDataService) {
      let localCart = window.localStorage.getItem('SHOPPING-CART')
      if(localCart){
        this.cart = JSON.parse(localCart);
      }else{
        this.cart = new Cart();
        this.cart.cartItems = [];
        this.cart.total = 0;
        window.localStorage.setItem('SHOPPING-CART', JSON.stringify(this.cart));
      }
      
      _itemCartService.item$.subscribe((data) => {
        let itemFound = this.cart.cartItems.find(i => i.product.id === data.product.id);
        if(!itemFound){
          this.cart.cartItems.push(data);
          this.cart.total += data.product.price;
        }else{
          let itemIndex = this.cart.cartItems.findIndex(i => i.product.id === data.product.id);
          this.cart.cartItems[itemIndex].amount += data.amount;
          this.cart.total += data.product.price;
        } 
        window.localStorage.setItem('SHOPPING-CART', JSON.stringify(this.cart));  
      });    
  }

  ngOnInit() {
  }
  removeFromCart(item: CartItem){
    let itemIndex = this.cart.cartItems.findIndex(i => i.product.id === item.product.id);
    if(this.cart.cartItems[itemIndex].amount > 1 ){
      this.cart.cartItems[itemIndex].amount -= 1;
      this.cart.total -= item.product.price;
    }else{
      this.cart.cartItems.splice(itemIndex, 1);
      this.cart.total -= item.product.price;
    }
    window.localStorage.setItem('SHOPPING-CART', JSON.stringify(this.cart));
  }
}
