<script lang="ts" setup>

import ContainerComponent from "@/components/ContainerComponent.vue";
import GameResults from "@/components/GameResults.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonStartGame from "@/components/ButtonStartGame.vue";
</script>

<template>
  <main>
    <HeaderComponent>
      <HeaderLogo/>
      <ButtonStartGame/>
    </HeaderComponent>
    <ContainerComponent>
      <GameResults/>
    </ContainerComponent>
  </main>
</template>

<style lang="scss" scoped>

</style>