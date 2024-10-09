<template>
  <div :id="card.id" :class="{ flipped: isFlipped }" class="card" @click="flipCard">
    <div class="card__inner">
      <div class="card__front">
        <img :src="card.img_back" alt="img_back" class="card__img ">
      </div>
      <div class="card__back">
        <img :alt="card.name.toLowerCase()" :src="card.img" class="card__img">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {CardModel} from "@/models/CardModel";
import {ref} from "vue";

const props = defineProps<{
  card: CardModel;
}>();

let isFlipped = ref<boolean>(false);

const flipCard = (): void => {
  isFlipped.value = true;
}
/*
addMask(isCorrect: boolean): void {
  const maskElement = document.getElementById(this.cardModel.id) as HTMLElement;
  const mask = document.createElement('div');
  mask.className = isCorrect ? 'card__mask--correct' : 'card__mask--incorrect';
  maskElement.appendChild(mask);
}*/


const unFlipCard = (): void => {
  isFlipped.value = false;

  /* const incorrectMask = document.querySelector(`#${this.cardModel.id} .card__mask--incorrect`);
   if (incorrectMask) incorrectMask.remove();*/
}
</script>

<style lang="scss" scoped>
.card {
  width: 120px;
  height: 120px;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: inherit;

  transform: scale(1);
  @include phones {
    width: 100px;
    height: 100px;
  }
}

.card__img {
  object-fit: cover;
  width: 100%;
  height: 120px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  background-color: rgba(28, 116, 48, 0.74);
  @include phones {
    width: 100%;
    height: 100px;
  }
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.card__front, .card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card__front {
  transform: rotateY(0deg);
}

.card__back {
  transform: rotateY(180deg);
}

.card.flipped .card__inner {
  transform: rotateY(180deg);
}

.card__mask--correct, .card__mask--incorrect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 5px;
}

.card__mask--correct {
  background-color: rgba(10, 207, 131, 0.5);
}

.card__mask--incorrect {
  background-color: rgba(242, 78, 30, 0.5);
}
</style>