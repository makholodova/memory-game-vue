<template>
  <div id="inner__container" class="container content">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>

.content {
  /*padding-top: 20px;
  padding-bottom: 30px;*/
  /*padding: 20px 40px 30px 40px;*/
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 920px;

  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

  border-radius: 20px;
  @include phones {
    padding-top: 10px;
    padding-bottom: 20px;
  }
}
</style>