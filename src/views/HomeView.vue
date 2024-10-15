<template>
  <HeaderComponent>
  </HeaderComponent>
  <main>
    <ContainerComponent>
      <WelcomComponent/>
    </ContainerComponent>
  </main>
</template>

<script lang="ts" setup>
import WelcomComponent from "@/components/WelcomComponent.vue";
import ContainerComponent from "@/components/ContainerComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>