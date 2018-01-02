import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Item } from '../models/item.model';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cartItem.model';

@Injectable()
export class ItemCartDataService {

  
  private item = new Subject<CartItem>();

  item$ = this.item.asObservable();

  constructor() {
  	
  }

  addItemToCart(data){
  	this.item.next(data);
  }

}
