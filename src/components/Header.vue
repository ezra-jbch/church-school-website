<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }" id="router-link">
      <!-- Routes the page back to the Home page when you press on the Logo -->
      <img alt="church school logo" src="../assets/logo.png" class="img" />
    </router-link>
    <div class="button-pos">
      <button class="btn btn-outline-secondary" id="login">
        <router-link :to="{ name: 'Home' }" tag="button" id="underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          &nbsp; Login
        </router-link>
      </button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
#underline {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
}
.button-pos {
  margin-right: 2%;
}
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
.img {
  width: 100%;
  /*Re-renders image so that it is easier to code*/
  -ms-transform: translateZ(0); /* IE 9 */
  -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
  transform: translateZ(0);
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