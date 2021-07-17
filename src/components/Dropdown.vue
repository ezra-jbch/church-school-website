<template>
    <div class="pos">
        <div class="dropdown">
            <span>Lessons</span>
            <div class="dropdown-content">
                <p>Kindergarten</p>
            </div>
        </div>
    </div> 
</template>

<script>
export default {

}
</script>

<style>
.pos{
    text-align: left;
    margin-top: 2%;
    margin-left: 2%;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}
/* Change color of dropdown links on hover */
.dropdown-content:hover {
    background-color: #DCDCDC;
}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>