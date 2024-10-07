<template>
  <div class="game-info">
    <ScoreComponent/>
    <TimerComponent/>
  </div>
</template>
<script lang="ts" setup>

import ScoreComponent from "@/components/ScoreComponent.vue";
import TimerComponent from "@/components/TimerComponent.vue";
</script>

<style scoped>
.game-info {
  display: flex;
  justify-content: space-between;
  max-width: 750px;
  width: 100%;
  margin-bottom: 20px;
}
</style>