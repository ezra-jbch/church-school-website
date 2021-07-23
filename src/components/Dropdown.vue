<template>
  <div class="pos">
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
        <div v-for="page in pages" :key="page">
          <router-link :to="page.route">{{ page.page }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pages"],
};
</script>

<style>

/*Moves the dropdown to the left of the screen, under the logo*/
.pos {
  text-align: left;
  margin-left: 1%;
  margin-top: 1%;
}
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
  display: block;
  background-color: #f9f9f9;
  position: absolute;
  right: 0;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 15px; /*Adds space between the button and what is dropping down*/
  opacity: 0;
  transform: translateY(-5%);
  transition: opacity 0.5s, transform 0.5s;
}
/*white box that dropdowns*/
.dropdown:hover .dropdown-content {
  opacity: 1;
  transform: translateY(0%);
}
/*This is the text that you see in the dropdown*/
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  padding-left: 10%;
  transition: padding 0.5s;
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