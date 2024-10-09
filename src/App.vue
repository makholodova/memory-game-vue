<script lang="ts" setup>
import {RouterView} from 'vue-router'
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import ButtonStartGame from "@/components/ButtonStartGame.vue";
</script>

<template>
  <HeaderComponent>
    <HeaderLogo/>
    <ButtonStartGame/>
  </HeaderComponent>
  <RouterView/>
  <FooterComponent/>
</template>

<style lang="scss" >
/*header {
  line-height: 1.5;
  max-height: 100vh;
}


}*/
</style>
