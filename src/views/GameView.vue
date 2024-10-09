<template>
  <ContainerComponent>
    <GameInfo/>
    <BoardComponent/>
  </ContainerComponent>
  <button id="btn-open-modal" class=" button start-game__button" type="button" @click="openModal">Play &#9658;</button>
  <SuccessModal v-if="isModalVisible" :player="player" @close="isModalVisible=false"/>

</template>

<script lang="ts" setup>
import ContainerComponent from "@/components/ContainerComponent.vue";
import GameInfo from "@/components/GameInfo.vue";
import BoardComponent from "@/components/BoardComponent.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import {ref} from "vue";
import type {IPlayer} from "@/models/IPlayer";
import {usePlayerStore} from "@/store/playersStore";
import {useTimerStore} from "@/store/timerStore";

const playerStore = usePlayerStore();
const timerStore = useTimerStore();

const isModalVisible = ref(false);

const openModal = () => {
  timerStore.stopTimer();   //временно
  isModalVisible.value = true;
}

const currentPlayer = playerStore.getLastPlayer();


const player: IPlayer = {
  id: currentPlayer.id,
  name: currentPlayer.name,
  score: 12,
  time: '15:30'
}

playerStore.addPlayer(player);


</script>

<style lang="scss">

</style>