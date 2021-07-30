<template>
  <div class="lesson-table-padding">
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="background-color: #005595; border-color: #005595"
      >
        {{ this.showYear }}
      </button>
      <ul class="dropdown-menu" style="cursor: pointer">
        <li>
          <a class="dropdown-item" @click="changeCycle(this.displayYear - 1)">{{
            this.displayYear - 1
          }}</a>
        </li>
        <li>
          <a class="dropdown-item" @click="changeCycle(this.displayYear)">{{
            this.displayYear
          }}</a>
        </li>
      </ul>
    </div>
    <h1>Elementary Cornerstone</h1>
    <TableBox :path="path" :showYear="showYear" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue";

export default {
  components: { TableBox },
  data() {
    return {
      showYear: new Date().getFullYear() /*Current Year*/,
      displayYear: new Date().getFullYear(),
      path: "elem" /*This is the path of the json file that will be loaded in TableBox component*/,
    };
  },
  methods: {
    changeCycle(year) {
      this.showYear = year;
    },
  },
};
</script>

<style>
</style>