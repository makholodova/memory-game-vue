<template>
  <div class="card-container">
    <CardComponent
        v-for="card in cardArray "
        :key="card.id"
        :card="card"/>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import CardComponent from "@/components/CardComponent.vue";
import {CardsApiClient} from "@/api/CardsApiClient";
import {CardsGenerator} from "@/services/CardsGenerator";
import type {CardDb} from "@/models/CardDb";
import {CardModel} from "@/models/CardModel";


const uniqueCards = ref<CardDb[]>([]);
const cardArray = ref<CardModel[]>([]);
const errorMessage = ref<string | null>(null);
const count = 6;

const cardsApiClient = new CardsApiClient();
const cardsGenerator = new CardsGenerator();


const loadCards = async () => {
  try {
    uniqueCards.value = await cardsApiClient.getCards();
    if (uniqueCards.value.length > 0) {
      cardArray.value = cardsGenerator.generateCardsArray(uniqueCards.value, count * 2);
      console.log(cardArray.value);
    }
  } catch (error) {
    errorMessage.value = 'Ошибка при загрузке карт.';
  }
};
onMounted(() => {
  loadCards();
});

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