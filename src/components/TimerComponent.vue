<template>
  <div class="timer-display">Time: {{ timerStore.formatTime() }}</div>
</template>

<script lang="ts" setup>
import {useTimerStore} from "@/store/timerStore";

const timerStore = useTimerStore();

</script>
<style lang="scss" scoped>
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