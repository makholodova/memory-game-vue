<template>
  <header class="header">
    <div id="header__content" class="header__container container">
      <slot></slot>
    </div>
  </header>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
</style>