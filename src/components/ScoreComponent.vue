<template>
  <div id="score" class="score-display">Score: {{ scoreStore.score }}
  </div>
</template>[
<script lang="ts" setup>
import {ref} from "vue";
import {useScoreStore} from "@/store/scoreStore";

const scoreStore= useScoreStore();
</script>

<style scoped lang="scss">
.score-display {
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