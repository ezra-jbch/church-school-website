<template>
  <Header />
  <div class="d-flex justify-content-start">
    <div id="navBar">
      <Dropdown :pages="pageArray" @change="getRouteforTableBox" />
    </div>
  </div>
  <div class="container">
    <div class="row">
      <router-view v-slot="{ Component }">
        <!--This is how you do transitions between routes-->
        <!--Waring: If you want to use this, for any component you transition too, all child elements must be wrapped in one root element-->
        <!--https://www.youtube.com/watch?v=X4I6zUEM40A&ab_channel=TheNetNinja-->
        <transition name="route" mode="out-in">
          <component :is="Component" :showYear="showYear"/>
        </transition>
      </router-view>
    </div>
  </div>
  <br /><Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Dropdown from "./components/Dropdown.vue";
import { GROUP_TITLE_PER_ROUTE } from "./data/constants.js";

export default {
  components: { Header, Footer, Dropdown },
  data() {
    return {
      /*This array is used to transition between pages*/
      pageArray: [],
      pathToJson: null,
      showYear: new Date().getFullYear() /*Current Year*/,
      title: "",
    };
  },
  mounted() {
    this.setPageArray();
  },
  methods: {
    setPageArray() {
      for(const x in GROUP_TITLE_PER_ROUTE ){
        this.pageArray.push({page:GROUP_TITLE_PER_ROUTE[x], route:x });
      }
    },
    getRouteforTableBox(route) {
      this.pathToJson = route;
      const page = this.pageArray.find((page) => page.route === route);
    },
  },
};
</script>
<style>
/*Logo hex values: Dark blue: #005595, Lighter blue: #36b4e5*/

#navBar {
  /*Positions location of dropdown*/
  margin-left: 1%;
  margin-top: 1%;
}

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

/*route transitions = page transitions*/
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
