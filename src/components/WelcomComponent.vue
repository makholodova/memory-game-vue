<template>
  <div class="start-game">
    <div class="start-game__title">Memory Game</div>
    <div class="start-game__controls">
      <button @click="openModal" id="btn-open-modal" class=" button start-game__button" type="button">Play &#9658;</button>
    </div>
  </div>
  <NewPlayerModal v-if="isModalVisible" @close="isModalVisible=false"/>
</template>
<script lang="ts" setup>
import NewPlayerModal from "@/components/NewPlayerModal.vue";
import {ref} from "vue";

const isModalVisible = ref(false);

const openModal=()=>{
  isModalVisible.value = true;
}
</script>

<style scoped lang="scss">

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
.button {
  display: inline-block;
  background-color: #ff79b0;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3ms;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e6679a;
  }
}
.start-game__button {
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 45px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
}

</style>