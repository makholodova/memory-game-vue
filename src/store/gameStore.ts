import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {CardModel} from "@/models/CardModel";
//перепесать н адругой синтаксис
export const useGameStore = defineStore('game', () => {
	const firstCard = ref<CardModel | null>(null);
	const secondCard = ref<CardModel | null>(null);

	const isFlip = ref<boolean>(false);

	const lockBoard = ref<boolean>(false);
	const openPairsCount = ref(0);
	const pairsCount = ref<number>(2); /////


	const flipCard = (card: CardModel): void => {
		if (lockBoard.value) return;

		if (!firstCard.value) {
			firstCard.value = card;
		} else {
			secondCard.value = card;
		}
		if (firstCard.value && secondCard.value) {
			console.log(firstCard.value.dbId);
			console.log(secondCard.value.dbId);
			checkForMatch();
		}


		///score.increaseScore();
	}
	const checkForMatch = (): void => {
		if (!firstCard.value || !secondCard.value) return;
		lockBoard.value = true;

		const isMatch = firstCard.value.dbId === secondCard.value.dbId;
		setTimeout(() => {
			if (isMatch) {
				handleMatch();
				openPairsCount.value++;

				if (openPairsCount.value === pairsCount.value) {

					console.log(openPairsCount.value)
					console.log(pairsCount.value)
					/*onWinGame();*/
					console.log('WinGame')
				}
				resetBoard();
			} else {
				handleMismatch();
			}
		}, 500);
	}
	const handleMatch = (): void => {
		console.log("addMask(true)")
		/*firstCard!.addMask(true);
		secondCard!.addMask(true);*/
	}

	const handleMismatch = (): void => {
		console.log("addMask(false)")
		/*firstCard!.addMask(false);
		secondCard!.addMask(false);*/
		setTimeout(() => {
			console.log("unFlipCard()")
			if (!firstCard.value || !secondCard.value) return;
			firstCard!.value.isFlip=false;
			secondCard!.value.isFlip=false;
			/*firstCard!.unFlipCard();
			secondCard!.unFlipCard();*/
			resetBoard();
		}, 500);
	}

	const resetBoard = (): void => {
		firstCard.value = null;
		secondCard.value = null;
		lockBoard.value = false;
	}


	return {
		isFlip,
		flipCard,

	};
});