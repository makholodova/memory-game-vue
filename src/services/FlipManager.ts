import type {CardModel} from "@/models/CardModel";
import {ref} from "vue";


export class CardFlipManager {

	firstCard = ref<CardModel | null>(null);
	secondCard = ref<CardModel | null>(null);
	lockBoard: boolean = false;


	openPairsCount: number = 0;
	pairsCount: number;

	score: number = 0;

	constructor(pairsCount: number/*, onWinGame: () => void*/) {

		this.pairsCount = pairsCount;

		//this.onWinGame = onWinGame;

		//this.score = score;
	}

	flipCard(card: CardModel): void {
		if (this.lockBoard) return;

		if (!this.firstCard.value) {
			this.firstCard.value = card;
		} else {
			this.secondCard.value = card;
		}
		if (this.firstCard && this.secondCard) {
			this.checkForMatch();
		}
		/*console.log(this.firstCard.value);
		console.log(this.secondCard.value);*/
		this.score++;
	}

	private checkForMatch(): void {
		if (!this.firstCard.value || !this.secondCard.value) return;
		this.lockBoard = true;
		const isMatch = this.firstCard.value.dbId === this.secondCard.value.dbId;
		setTimeout(() => {
			if (isMatch) {
				this.handleMatch();
				this.openPairsCount++;
				if (this.openPairsCount === this.pairsCount) {
					/*this.onWinGame();*/
					console.log('win')
				}
				this.resetBoard();
			} else {
				this.handleMismatch();
			}
		}, 500);
	}

	private handleMatch(): void {
		/*this.firstCard!.addMask(true);
		this.secondCard!.addMask(true);*/
	}

	private handleMismatch(): void {
		/*this.firstCard!.addMask(false);
		this.secondCard!.addMask(false);
*/
		setTimeout(() => {
			/*this.firstCard.value?.unFlipCard?.();
			this.secondCard.value?.unFlipCard?.();*/
			this.resetBoard();
		}, 500);
	}

	private resetBoard(): void {
		this.firstCard.value = null;
		this.secondCard.value = null;
		this.lockBoard = false;
	}
}
