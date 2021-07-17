<template>
    <div class="pos">
        <div class="dropdown">
        <button class="dropbtn">Lessons <i class="arrow down"></i></button>
            <div class="dropdown-content" style="left:0;">
                <router-link :to="{ name: 'Kindergarten' }">Kindergarten</router-link> 
                <router-link :to="{ name: 'Elementary' }">Elementary</router-link> 
                <router-link :to="{ name: 'YouthGroup' }">Youth Group</router-link> 
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>
/*Moves the dropdown to the left of the screen, under the logo*/
.pos{
    text-align: left;
    margin-left: 2%;
    margin-top: 2%;
}
/*Design for the arrow by the dropdown*/
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
/*Put the arrow downwards*/
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

/*Button*/
.dropbtn {
  background-color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
/*Dropdown*/
.dropdown {
  position: relative;
  display: inline-block;
}
/*Content that is dropping down*/
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
/*Change styles on dropdown when you hover over it*/
.dropdown-content a:hover {
  background-color: #A7C7E7;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: #A7C7E7;
  color: white;
}
/*Make arrow white when you hover over it*/
.dropdown:hover .arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
</style>