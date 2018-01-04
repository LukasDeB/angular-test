import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingcartService {
  
  private cart = new Subject<Cart>();
  cart$ = this.cart.asObservable();

   constructor() {
   }

  setCart(){
  	let localCart = window.localStorage.getItem('SHOPPING-CART')
   	let cart = new Cart();
      if(localCart){
        cart = JSON.parse(localCart);
      }else{
        cart = new Cart();
        cart.cartItems = [];
        cart.total = 0;
        this.updateCart(cart);
      }

      return cart;
  }

  addItem(data){
  	let cart = this.setCart();
  	let itemFound = cart.cartItems.find(i => i.product.id === data.product.id);
        if(!itemFound){
          cart.cartItems.push(data);
          cart.total += data.product.price;
        }else{
          let itemIndex = cart.cartItems.findIndex(i => i.product.id === data.product.id);
          cart.cartItems[itemIndex].amount += data.amount;
          cart.total += data.product.price;
        } 
        this.updateCart(cart);
  }

  removeItem(item){
  	let cart = this.setCart();
  	let itemIndex = cart.cartItems.findIndex(i => i.product.id === item.product.id);

    if(cart.cartItems[itemIndex].amount > 1 ){
      cart.cartItems[itemIndex].amount -= 1;
      cart.total -= item.product.price;
    }else{
      cart.cartItems.splice(itemIndex, 1);
      cart.total -= item.product.price;
    }

    this.updateCart(cart);
  }

  updateCart(c){
  	window.localStorage.setItem('SHOPPING-CART', JSON.stringify(c));
  	this.cart.next(c);  
  }

 



}
