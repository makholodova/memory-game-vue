<template>
  <HeaderComponent>
  </HeaderComponent>
  <main>
    <ContainerComponent>
      <WelcomeComponent/>
    </ContainerComponent>
  </main>
</template>

<script lang="ts" setup>
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import ContainerComponent from "@/components/ContainerComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>