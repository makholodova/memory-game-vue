export class CardModel {
	id: string;
	dbId: string;
	name: string;
	img: string;
	img_back: string;

	constructor(id: string, dbId: string, name: string, img: string, img_back: string) {
		this.id = id;
		this.dbId = dbId;
		this.name = name;
		this.img = img;
		this.img_back = img_back;
	}
}