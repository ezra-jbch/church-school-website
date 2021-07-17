<template>
  <Header />
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  -->
  <Dropdown/>
  <Footer />
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Dropdown from './components/Dropdown.vue'
export default{
  components: { Header, Footer, Dropdown}
}
</script>
<style>
html,body{
  /*Fixed Margins of HTML Page*/
  margin:0;
  padding:0;  
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
</style>
