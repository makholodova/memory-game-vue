<template>
  <div id="modalSheet" class="modal " role="dialog" tabindex="-1">
    <div class="modal__dialog" role="document">
      <div class="modal__content">
        <div class="modal__header">
          <h2 class="modal__title">Congratulations!</h2>
        </div>
        <div class="modal__body">
          <p>You successfully found all matches!<br> Your score: {{ player.score }}. <br>Time: {{ player.time }} minutes.</p>
        </div>
        <div class="modal__footer">
          <button id="btn-show-results" class="button modal__button" type="button" @click="showResults">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import type {IPlayer} from "@/models/IPlayer";
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const props = defineProps<{
  player: IPlayer;
}>();
const router = useRouter();

const showResults = () => {
  router.push({path: '/result'});
}

</script>

<style lang="scss" scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(64, 54, 54, 0.39);
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
}

.modal__dialog {
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 1.75rem);
}

.modal__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
}

.modal__header {
  padding: 1rem 1.5rem 0 1.5rem;
}

.modal__title {
  font-weight: 600;
  color: #ff4f8b; /* Ярко-розовый */
}

.modal__body {
  text-align: center;
  padding: 1rem 1.5rem;
}

.modal__footer {
  padding: 0 1.5rem 1rem 1.5rem;
}

</style>