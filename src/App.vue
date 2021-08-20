<template>
  <div class="background-img">
    <Header />
    <div class="d-flex justify-content-start">
      <div id="navBar">
        <Dropdown :itemsInDropdown="routesForLessonPages" :dropDownTitle="lessonTitleForDropdown"/>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <router-view v-slot="{ Component, route }">
          <!--This is how you do transitions between routes in Vue 3-->
          <!--Waring: If you want to use this, for any component you transition too, all child elements must be wrapped in one root element-->
          <!--Documentation: https://next.router.vuejs.org/guide/advanced/transitions.html-->
          <transition name="route" mode="out-in">
            <component :is="Component" :key="route.path"/>
          </transition>
        </router-view>
      </div>
    </div>
    <br /><Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Dropdown from "./components/Dropdown.vue";
import { GROUP_TITLE_PER_ROUTE } from "./data/constants.js"; /*Constant file with names and paths for dropdown*/

export default {
  components: { Header, Footer, Dropdown },

  data() {
    return {
      /*routesForLessonPages is used to transition between pages*/
      routesForLessonPages: [],
      lessonTitleForDropdown: "Lessons", /*To make dropdown more reusable, pass in title as prop that will allow for different titles.*/
    };
  },

  mounted() {
    this.setroutesForLessonPages();
  },

  methods: {
    setroutesForLessonPages() {
      /*Populating routesForLessonPages with page titles and routes. routesForLessonPages is sent as a prop to Dropdown component*/
      /*This behavior of ordering for the array isn't guaranteed*/
      for (const x in GROUP_TITLE_PER_ROUTE) {
        this.routesForLessonPages.push({
          page: GROUP_TITLE_PER_ROUTE[x],
          route: "/lessons/" + x + "?year=" + new Date().getFullYear(),
        });
      }
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

.background-img {
  background-image: url("./assets/youth-group.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
