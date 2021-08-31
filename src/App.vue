<template>
  <div v-if="loggedIn" class="background-img"> <!--If password is not entered, hide content-->
    <Header />
    <Navbar :items="routesForLessonPages" />
    <div class="container">
      <div class="row">
        <router-view v-slot="{ Component, route }">
          <!--This is how you do transitions between routes in Vue 3-->
          <!--Waring: If you want to use this, for any component you transition too, all child elements must be wrapped in one root element-->
          <!--Documentation: https://next.router.vuejs.org/guide/advanced/transitions.html-->
          <transition name="route" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>
    </div>
    <br /><Footer />
  </div>
  <div class="passwordForm" v-else> <!--If password is not entered, enter password first-->
    <form @submit.prevent="handleSubmit">
      <label>Enter Password:</label>
      <input type="password" required v-model="password" />
      <p style="color: red">{{ wrongPassword }}</p> <!--Show warning if wrong password is entered-->
    </form>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import { GROUP_TITLE_PER_ROUTE } from "./data/constants.js"; /*Constant file with names and paths for dropdown*/

export default {
  components: { Header, Footer, Navbar },

  data() {
    return {
      wrongPassword: "", /*This is later filled to say "Incorrect password, please try again" when user enters wrong password*/
      password: "", /*Password entered by the user*/
      correctPassword: "jbch0691", /*Hardcoded password*/
      loggedIn: false, /*Check if user loggedIn or not*/
      routesForLessonPages: [], /*routesForLessonPages is used to transition between pages*/
    };
  },

  mounted() {
    this.routesForLessonPages = this.getRoutesForLessonPages(GROUP_TITLE_PER_ROUTE);

    /*https://vuejs.org/v2/cookbook/client-side-storage.html*/
    /*Client side local storage. Save cookies so user only has to log in once*/
    if(localStorage.loggedIn){
      this.loggedIn = localStorage.loggedIn;
    }
  },
  methods: {
    handleSubmit() {
      if (this.password === this.correctPassword) {
        localStorage.loggedIn = true; /*If they put in the right password, save it in local storage*/
        this.loggedIn = localStorage.loggedIn;        
      } else {
        this.wrongPassword = "Incorrect password, please try again";
      }
    },

    getRoutesForLessonPages(titlesForGroups) {
      /*Populating routesForLessonPages with page titles and routes. routesForLessonPages is sent as a prop to Dropdown component*/
      /*This behavior of ordering for the array isn't guaranteed*/
      const temp = [];
      for (const x in titlesForGroups) {
        temp.push({page: titlesForGroups[x], route: "/lessons/" + x + "?year=" + new Date().getFullYear()});
      }
      return temp;
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

.passwordForm {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

form {
  width: 50%;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
