<script lang="ts" setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <a class="footer__link" href='https://github.com/makholodova' target="_blank"> <!--/*link*/-->
        <img alt="github" class="footer__icon" src="../assets/svg/simple-icons--github--footer.svg">
        Visit my GitHub
      </a>
      <p class="footer__text">&copy; Marina Kholodova 2024 </p>
      <a class="footer__link" href='https://rs.school/' target="_blank">
        <img alt="logo_RS_School" class="footer__school-logo" src="../assets/svg/logo_rs_school.svg">
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 20px;
  padding: 15px;
  font-size: 16px;
  color: $primary;
}

.footer__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include phones {
    flex-direction: column;
    row-gap: 15px;
  }
}

.footer__link {
  color: $primary;
  display: flex;
  align-items: center;
}

.footer__icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.footer__school-logo {
  width: 86px;
  height: 32px;
}

.footer p {
  margin: 0;
}


</style>