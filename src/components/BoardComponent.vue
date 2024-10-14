<template>
  <div class="card-container">
    <CardComponent
        v-for="card in cardArray "
        :key="card.id"
        :card="card"
        @flip="onFlipCard"
    />
  </div>
  <!--  <button id="btn-open-modal" class=" button start-game__button" type="button" @click="openModal">Play &#9658;</button>-->
  <SuccessModal v-if="isModalVisible" :player="player" @close="isModalVisible=false"/>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import CardComponent from "@/components/CardComponent.vue";
import {CardsApiClient} from "@/api/CardsApiClient";
import {CardsGenerator} from "@/services/CardsGenerator";
import type {CardDb} from "@/models/CardDb";
import {CardModel} from "@/models/CardModel";
import {useTimerStore} from "@/store/timerStore";
import SuccessModal from "@/components/SuccessModal.vue";
import {usePlayerStore} from "@/store/playersStore";
import type {IPlayer} from "@/models/IPlayer";
import {useScoreStore} from "@/store/scoreStore";

const cardsApiClient = new CardsApiClient();
const cardsGenerator = new CardsGenerator();
const count = 2;    ////
const errorMessage = ref<string | null>(null);
const uniqueCards = ref<CardDb[]>([]);

const cardArray = reactive<CardModel[]>([]);
const firstCard = ref<CardModel | null>(null);
const secondCard = ref<CardModel | null>(null);

/*const lockBoard = ref<boolean>(false)*/

let openPairsCount: number = 0;
const pairsCount: number = 2;


const onFlipCard = (cardId: string, card: CardModel) => {
  flipCard(card);
}

const timerStore = useTimerStore();
const playerStore = usePlayerStore();
const scoreStore = useScoreStore();

const currentPlayer = playerStore.getLastPlayer();
const isModalVisible = ref(false);

const player = reactive<IPlayer>({
  id: '',
  name: '',
  score: 0,
  time: ''
});

const onWinGame = () => {

  player.id = currentPlayer.id;
  player.name = currentPlayer.name;
  player.score = scoreStore.score;
  player.time = timerStore.formatTime();


  playerStore.addPlayer(player);
  openModal();

}


const openModal = () => {
  timerStore.pauseTimer();
  isModalVisible.value = true;
}


const flipCard = (card22: CardModel): void => {
  /*if (lockBoard.value) return;*/
  if (scoreStore.board) return;

  const card = card22;

  if (!firstCard.value) {
    firstCard.value = card;
  } else {
    secondCard.value = card;
    /*lockBoard.value = true;*/
    scoreStore.board = true;
    checkForMatch();
  }
  scoreStore.increase();
}

const checkForMatch = (): void => {
  if (!firstCard.value || !secondCard.value) return;
  //lockBoard.value = true;
  if (firstCard.value && secondCard.value) {
    const isMatch = firstCard.value.dbId === secondCard.value.dbId;
    setTimeout(() => {
      if (isMatch) {
        handleMatch();
        openPairsCount++;
        if (openPairsCount === pairsCount) {
          //console.log("WIN")
          onWinGame();
        }
        resetBoard();
      } else {
        handleMismatch();
      }
    }, 500);
  }

}

const handleMatch = (): void => {
  if (firstCard.value && secondCard.value) {
    firstCard.value.isMaskVisible = true;
    secondCard.value.isMaskVisible = true;
    firstCard.value.isCorrect = true;
    secondCard.value.isCorrect = true;

  }
}

const handleMismatch = (): void => {
  if (firstCard.value && secondCard.value) {
    firstCard.value.isMaskVisible = true;
    secondCard.value.isMaskVisible = true;
    firstCard.value.isCorrect = false;
    secondCard.value.isCorrect = false;

    setTimeout(() => {
      if (firstCard.value && secondCard.value) {
        firstCard.value.isMaskVisible = false;
        secondCard.value.isMaskVisible = false;
        firstCard.value.isFlip = false;
        secondCard.value.isFlip = false;
        resetBoard();
      }
    }, 500);
  }
}

const resetBoard = (): void => {
  firstCard.value = null;
  secondCard.value = null;
  scoreStore.board = false;
  /*lockBoard.value = false;*/
}


/*const getCard = (id: string): CardModel => {
  const c = cardArray.find(x => x.id === id);
  if (c) {
    return c
  }

  throw "Карточка не найдена";
}*/

onMounted(() => {
  loadCards();
});

const loadCards = async () => {
  try {
    uniqueCards.value = await cardsApiClient.getCards();
    if (uniqueCards.value.length > 0) {
      const cards = cardsGenerator.generateCardsArray(uniqueCards.value, count * 2);
      cardArray.push(...cards);
      console.log("cardArray:", cardArray);
    }
  } catch (error) {
    errorMessage.value = 'Ошибка при загрузке карт.';
  }
};

</script>
<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 750px;

  @include phones {
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
  }
}
</style>