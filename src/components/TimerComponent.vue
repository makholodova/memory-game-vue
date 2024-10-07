<template>
  <div class="timer-display">Time: {{ formatTime(timeInSeconds) }}</div>
  <!--  <button @click="startTimer">Start</button>
    <button @click="stopTimer">Stop</button>-->
</template>

<script lang="ts" setup>
import {ref} from "vue";

let timeInSeconds = ref<number>(0);
let isRunning = ref<boolean>(false);
let myInterval: number | undefined;

const startTimer = () => {
  if (isRunning.value) {
    console.warn('Таймер уже запущен.');
    return;
  }
  isRunning.value = true;
  myInterval = window.setInterval(() => {
    timeInSeconds.value++;
  }, 1000);
}

const stopTimer = (): void => {
  if (!isRunning.value) {
    console.warn('Таймер уже остановлен.');
    return;
  }

  clearInterval(myInterval);
  myInterval = undefined;
  isRunning.value = false;
  timeInSeconds.value = 0;
}

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${formattedMinutes}:${formattedSeconds}`;
}

</script>
<style scoped lang="scss">
.timer-display {
  line-height: 1rem;
  background-color: rgba(255, 121, 176, 0.3);
  padding: 10px;
  border: 2px solid #ff79b0;
  border-radius: 10px;
  
  @include phones {
    font-size: 10px;
    line-height: 1;
    padding: 5px;
  }
}
</style>