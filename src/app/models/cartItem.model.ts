import { Item } from './item.model';

export class CartItem  {
	
	public product: Item;
	public amount: number;

	constructor(product, amount) {
		this.product = product;
		this.amount = amount;		
	}
}