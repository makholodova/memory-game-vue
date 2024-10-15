import type {CardDb} from "@/models/CardDb";
import {CardModel} from "@/models/CardModel";

export class CardsGenerator {
	generateCardsArray(uniqueCards: CardDb[], length: number = 12): CardModel[] {
		const cartsArray = this.createCardsArray(uniqueCards, length);
		return this.shuffleArray(cartsArray);
	}

	private createCardsArray(uniqueCards: CardDb[], length: number): CardModel[] {
		const cardsArray: CardModel[] = [];
		for (let i = 0; i < length / 2; i++) {
			const dbCard = uniqueCards[i];
			const newCard1 = new CardModel(`card_${i}str`, dbCard.id, dbCard.name, dbCard.img, dbCard.img_back);
			const newCard2 = new CardModel(`card_${i + uniqueCards.length}str`, dbCard.id, dbCard.name, dbCard.img, dbCard.img_back);
			cardsArray.push(newCard1, newCard2);
		}
		return cardsArray;
	}

	private shuffleArray(array: CardModel[]): CardModel[] {
		const shuffled = [...array];
		for (let j = shuffled.length - 1; j > 0; j--) {
			const k = Math.floor(Math.random() * (j + 1));
			[shuffled[j], shuffled[k]] = [shuffled[k], shuffled[j]];
		}
		return shuffled;
	}
}


