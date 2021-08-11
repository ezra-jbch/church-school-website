<template>
  <div class="dropdown">
    <button class="dropbtn">
      Lessons
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
    <div class="dropdown-content" style="left: 0">
      <!--Using props to pass in array fro App.vue, so Dropdown is more reusable-->
      <div v-for="page in pages" :key="page" class="link-block">
        <!--Dropdown determines which route you go to-->
        <!--Dynamically changing route between KIND, ELEM, and YG-->
        <router-link :to="page.route">{{ page.page }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pages"], /*Pages is an array of pages that the routes can transition to*/

  data(){
    return{
    }
  },
};
</script>

<style>
/*Moves the dropdown to the left of the screen, under the logo*/
/*Button*/
.dropbtn {
  background-color: white;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease-out;
}

/*Dropdown*/
.dropdown {
  border-bottom: 15px solid transparent; /*Added invisible border around this div so that you can add margins to button and dropdown without hovering issues*/
  position: relative;
  display: inline-block;
}

/*Content that is dropping down*/
.dropdown-content {
  margin-left: 5%;
  background-color: #f9f9f9;
  position: absolute;
  right: 0;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 15px; /*Adds space between the button and what is dropping down*/
  height: 0px;
  transition: height 0.2s;
}

/*Dropdown on hover*/
.dropdown:hover .dropdown-content {
  height: 144px;
}

/*Content inside of dropdown*/
.link-block {
  display: none;
}

.dropdown:hover .link-block {
  display: block;
  animation: fadeIn 0.5s ease-in-out;
}
/*animation for content of dropdown.*/
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/*This is the text that you see in the dropdown*/
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  padding-left: 10%;
  display: block;
  transition: padding 0.5s;
  text-align: left;
}
/*Change styles on dropdown when you hover over it*/
.dropdown-content a:hover {
  background-color: #005595;
  color: white;
  padding-left: 15%;
  transition: padding 0.5s;
}

/*Button style during hover*/
.dropdown:hover .dropbtn {
  background-color: #005595;
  color: white;
  /*Rounded edges*/
  border-radius: 50px;
  transition: background-color 0.5s ease-out;
}
</style>