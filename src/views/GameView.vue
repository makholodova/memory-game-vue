<template>
  <HeaderComponent>
    <HeaderLogo/>
    <ButtonStopGame/>
  </HeaderComponent>
  <ContainerComponent>
    <GameInfo/>
    <BoardComponent/>
  </ContainerComponent>
</template>

<script lang="ts" setup>
import ContainerComponent from "@/components/ContainerComponent.vue";
import GameInfo from "@/components/GameInfo.vue";
import BoardComponent from "@/components/BoardComponent.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonStopGame from "@/components/ButtonStopGame.vue";
</script>
