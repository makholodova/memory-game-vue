<template>
  <button
      id="stop-game__button"
      class="button modal__button"
      type="button"
      @click="stopGame"
  >Stop Game
  </button>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
import {useTimerStore} from "@/store/timerStore";
import {useScoreStore} from "@/store/scoreStore";

const timerStore = useTimerStore();
const scoreStore = useScoreStore();

const router = useRouter();
const stopGame = () => {
  scoreStore.score = 0;
  timerStore.stopTimer();
  router.push({path: '/'});
}
</script>

<style lang="scss" scoped>
</style>