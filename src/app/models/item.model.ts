export class Item {
	
	public id: number;
	public name: string;
	public description: string;
	public price: number;
	public image: string;

	constructor(id, name, description, price, image){
		this.name = name;
		this.description = description;
		this.id = id;
		this.price = price;
		this.image = image;
		
	}
}