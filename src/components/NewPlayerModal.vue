<template>
  <div id="modalNewPlayer" class="modal" role="dialog" tabindex="-1">
    <div class="modal__dialog" role="document">
      <div class="modal__content ">
        <div class="modal__header">
          <h2 class="modal__title">New Player</h2>
        </div>
        <div class="modal__body">
          <form id="playerForm" class="form" @submit.prevent="handleSubmit">
            <div class="form__group">
              <input
                  id="floatingFirstName"
                  v-model="playerName"
                  autocomplete="off"
                  class="form__input"
                  placeholder="Name"
                  required
                  type="text">
              <label for="floatingFirstName"></label>
            </div>
            <button class="button modal__button" type="submit">Start game</button>
          </form>
        </div>
      </div>
      <button id="btn-close-modal" class="modal__close-btn" type="button">&times;</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {PlayerModel} from "@/models/PlayerModel";
import {useRouter} from "vue-router";
import {useTimerStore} from "@/store/timerStore";
import {useGameStore} from "@/store/gameStore";

const emit = defineEmits(['close']);
const playerName = ref('');
const router = useRouter();

const gameStore = useGameStore();
const timerStore = useTimerStore();

const closeModal = () => {
  emit('close');
};

const handleSubmit = (): void => {
  const playerId = Date.now().toString();
  const newPlayer = new PlayerModel(playerId, playerName.value);

  gameStore.addPlayer(newPlayer)

  closeModal();

  router.push({path: '/game'});
  timerStore.startTimer();
};
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

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__group {
  margin-bottom: 1.5rem;
}

.form__input {
  /* // width: 100%;*/
  padding: 0.5rem;
  border: 1px solid #ced4da;
  font-size: 1rem;
  line-height: 1.5;

  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.75rem;

  &:hover {
    border: 1px solid rgb(178, 178, 179);
    box-shadow: 0px 0px 7px 0.5px rgba(179, 163, 179, 0.8);
  }

  &:focus {
    border: 1px solid rgb(178, 178, 179);
    box-shadow: 0px 0px 7px 0.5px rgba(179, 163, 179, 0.8);
  }

  &:active {
    border: 1px solid rgb(140, 140, 140);
    box-shadow: 0px 0px 7px 0.5px rgba(120, 120, 120, 0.8);
  }
}


</style>