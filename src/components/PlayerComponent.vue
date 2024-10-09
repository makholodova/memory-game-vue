<template>
  <div class="players__item">
    <h4 class="players__name">{{ player.name }}</h4>
    <div class="players__results">
      <p class="players__score"> Score: <span>{{ player.score }}</span></p>
      <p class="players__time"> Time: <span>{{ player.time }}</span></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {IPlayer} from "@/models/IPlayer";

defineProps<{
  player: IPlayer
}>()

</script>
<style lang="scss" scoped>

.players__item {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid rgba(19, 85, 28, 0.2);
  padding-bottom: 5px;
  margin-bottom: 20px;
  color: rgba(92, 65, 73, 0.6);
}

.players__name {
  color: #454343;
}

.players__results {
  display: flex;

  gap: 20px;

}
</style>