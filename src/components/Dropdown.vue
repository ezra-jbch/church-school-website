<template>
    <div class="pos">
        <div class="dropdown">
        <button class="dropbtn">Lessons<i class="arrow down"></i></button>
            <div class="dropdown-content" style="left:0;">
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
  props:['pages'],
  /*
  data(){
    return{

    }
  },
  methods:{
    handleHover(){

    }
  }
  */
}
</script>

<style>
/*Moves the dropdown to the left of the screen, under the logo*/
.pos{
    text-align: left; 
    margin-left: 1%; 
}
/*Design for the arrow by the dropdown*/
.arrow {
  border: solid black;
  border-width: 0 1.5px 1.5px 0;
  display: inline-block;
  padding: 3px;
  margin-left:10px;
  margin-bottom:2.5px;
}
/*Put the arrow downwards*/
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

/*Button*/
.dropbtn {
  background-color: white;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
}
/*Dropdown*/
.dropdown {
  border: 15px solid transparent; /*Added invisible border around this div so that you can add margins to button and dropdown without hovering issues*/
  position: relative;
  display: inline-block;
}
/*Content that is dropping down*/
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 15px; /*Adds space between the button and what is dropping down*/
  animation: fade 0.5s; /*Look at keyframes fade animation*/
}
/*Animation for .dropdown-content. Makes dropdown seem more seemless when it drops down*/
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-5%);
  }
  to { 
    opacity: 1;
    transform: translateY(0%);
  }
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
  background-color: #A7C7E7;
  color: white;
  padding-left: 15%;
  transition: padding 0.5s;
}

/*white box that dropdowns*/
.dropdown:hover .dropdown-content {
  display: block;
  transform: translateY(0%);
}

/*Button style during hover*/
.dropdown:hover .dropbtn {
  background-color: #A7C7E7;
  color: white;
  /*Rounded edges*/
  border-radius: 50px;
  transition: background-color 0.5s ease-out;
}
/*Make arrow white when you hover over it*/
.dropdown:hover .arrow {
  border: solid white;
  border-width: 0 1.5px 1.5px 0;
  display: inline-block;
  padding: 3px;
}
</style>