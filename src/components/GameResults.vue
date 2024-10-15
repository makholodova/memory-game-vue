<template>
  <h2 class="players__title">Best players </h2>
  <div class="players__list">
    <ResultComponent
        v-for="result in results"
        :key="result.id"
        :result="result"
    />
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import type {IResult} from "@/models/IResult";
import {useResultsStore} from "@/store/resultsStore";
import ResultComponent from "@/components/ResultComponent.vue";

const resultsStore = useResultsStore();

const results = ref<IResult[]>([])

onMounted(() => {
  resultsStore.initResults()
  results.value = resultsStore.getLastTenResults()
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