<template>
  <h2 class="players__title">Best players </h2>
  <div class="players__list">
    <PlayerComponent
        v-for="player in players"
        :key="player.id"
        :player="player"
    />
  </div>
</template>

<script lang="ts" setup>
import PlayerComponent from "@/components/PlayerComponent.vue";
import {usePlayerStore} from "@/store/playersStore";
import {onMounted, ref} from "vue";
import type {IPlayer} from "@/models/IPlayer";

const playerStore = usePlayerStore();

const players = ref<IPlayer[]>([])

onMounted(() => {
  playerStore.initPlayers();  
  players.value = playerStore.getLastPlayers(); 
});


</script>

<style lang="scss" scoped>
.players__title {
  margin-bottom: 30px;
  color: #ff4f8b;
}

.players__list {
  max-width: 750px;
  width: 100%;
}
</style>