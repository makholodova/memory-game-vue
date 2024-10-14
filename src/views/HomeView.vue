<script lang="ts" setup>
import WelcomComponent from "@/components/WelcomComponent.vue";
import ContainerComponent from "@/components/ContainerComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import ButtonStartGame from "@/components/ButtonStartGame.vue";
</script>

<template>
  <HeaderComponent>
    </HeaderComponent>
  <main>
    <ContainerComponent>
      <WelcomComponent/>
    </ContainerComponent>
  </main>
</template>
