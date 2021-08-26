<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="border: 1px solid grey"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lessons
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              id="lessonDropdownOptions"
            >
              <li v-for="item in items" :key="item">
                <router-link class="dropdown-item" :to="item.route" id="dropdownActive">{{
                  item.page
                }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: [
    "items",
    "title",
  ] /*items is an array of items that the routes can transition to*/,
};
</script>

<style>
#dropdownActive:active {
  background-color: #005595;
}
#navbarNavDropdown {
  margin-left: 1%;
}
#lessonDropdownOptions {
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