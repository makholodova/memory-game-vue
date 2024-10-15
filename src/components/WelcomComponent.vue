<template>
  <div class="start-game">
    <div class="start-game__title">Memory Game</div>
    <div class="start-game__controls">
      <button id="btn-open-modal" class=" button start-game__button" type="button" @click="openModal">Play &#9658;</button>
    </div>
  </div>
  <NewPlayerModal v-if="isModalVisible" @close="isModalVisible=false"/>
</template>
<script lang="ts" setup>
import NewPlayerModal from "@/components/NewPlayerModal.vue";
import {ref} from "vue";

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
}
</script>

<style lang="scss" scoped>
.start-game {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  gap: 30%;
  @include phones {
    padding-top: 20px;
    gap: 20%;
  }
}

.start-game__title {
  font-family: 'Poppins', sans-serif;
  font-size: 64px;
  font-weight: bold;
  color: #ff4f8b;
  text-shadow: 0 0 10px rgba(182, 117, 141, 0.8);
}
</style>