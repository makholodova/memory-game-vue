<template>
  <HeaderComponent>
    <HeaderLogo/>
    <ButtonStartGame/>
  </HeaderComponent>
  <main>
    <ContainerComponent>
      <GameResults/>
    </ContainerComponent>
  </main>
</template>
<script lang="ts" setup>
import ContainerComponent from "@/components/ContainerComponent.vue";
import GameResults from "@/components/GameResults.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonStartGame from "@/components/ButtonStartGame.vue";
</script>
