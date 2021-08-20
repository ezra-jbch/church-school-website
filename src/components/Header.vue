<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }" id="router-link">
      <!-- Routes the page back to the Home page when you press on the Logo -->
      <img src="../assets/logo.svg" alt="JBCH Church School" />
    </router-link>
  </header>
</template>

<script>
export default {
};
</script>

<style>

#router-link {
  display: inline-block;
  width: 30%;
  margin-left: 1%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px;
}

@media only screen and (max-width: 580px) {
  /* For mobile phones: */
  #router-link {
    width: 70%;
  }
  #login {
    font-size: 0;
  }
}
</style>