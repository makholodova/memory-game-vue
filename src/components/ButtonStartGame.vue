<template>
  <button id="start-game__button" class="button modal__button" type="button" @click="startGame">Start Game</button>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
import {useTimerStore} from "@/store/timerStore";
import {useGameStore} from "@/store/gameStore";

const timerStore = useTimerStore();
const scoreStore = useGameStore();

const router = useRouter();
const startGame = () => {
  timerStore.stopTimer();
  scoreStore.score = 0;
  router.push({path: '/'});
}


</script>

<style lang="scss" scoped>

</style>