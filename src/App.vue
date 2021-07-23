<template>
  <Header @seeLogin="isVisible" />
  <div v-if="showLogin">
    <Login @notLogin="notVisible" />
  </div>
  <Dropdown :pages="pageArray" />
  <router-view v-slot="{ Component }">
    <!--This is how you do transitions between routes-->
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Dropdown from "./components/Dropdown.vue";
import Login from "./components/Login.vue";

export default {
  components: { Header, Footer, Dropdown, Login },
  data() {
    return {
      pageArray: [
        { page: "Kindergarten", route: "Kindergarten" },
        { page: "Elementary", route: "Elementary" },
        { page: "Youth Group", route: "Youth-Group" },
      ],
      showLogin: false,
    };
  },
  methods: {
    isVisible() {
      this.showLogin = true;
      console.log(this.showLogin);
    },
    notVisible() {
      this.showLogin = false;
      console.log(this.showLogin);
    },
  },
};
</script>
<style>
/*Logo hex values:

Dark blue: #005595
Lighter blue: #36b4e5
*/
html,
body {
  /*Fixed Margins of HTML Page*/
  margin: 0;
  padding: 0;
  overflow-x: clip; /*Need this to prevent overflow. Did not use 'overflow-x: hidden' because it breaks dropdown*/
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/*route transitions*/
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.2s ease-out;
}
</style>
