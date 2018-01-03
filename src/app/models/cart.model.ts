import { Item } from './item.model';
import { CartItem } from './cartItem.model';

export class Cart {
	public cartItems: CartItem[];
	public total: number;
}
