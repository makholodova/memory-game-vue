<template>
  <div class="results__item">
    <h4 class="results__name">{{ result.name }}</h4>
    <div class="results">
      <p class="results__score"> Score: <span>{{ result.score }}</span></p>
      <p class="results__time"> Time: <span>{{ result.time }}</span></p>
    </div>
  </div>
</template>

<script lang="ts" setup>

import type {IResult} from "@/models/IResult";

defineProps<{
  result: IResult;
}>()

</script>
<style lang="scss" scoped>

.results__item {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid rgba(19, 85, 28, 0.2);
  padding-bottom: 5px;
  margin-bottom: 20px;
  color: rgba(92, 65, 73, 0.6);
}

.results__name {
  color: #454343;
}

.results {
  display: flex;

  gap: 20px;

}
</style>