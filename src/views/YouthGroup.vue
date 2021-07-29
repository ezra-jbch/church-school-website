<template>
  <div class="lesson-table-padding">
    <!--See global css in assets folder-->
    <h1>Youth Group True Light</h1>
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Year
      </button>
      <ul class="dropdown-menu">
        <li>
          <a
            class="dropdown-item"
            @click="changeCurrentYear(this.currentYear - 1)"
            >{{ this.currentYear - 1 }}</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            @click="changeCurrentYear(this.currentYear)"
            >{{ this.currentYear }}</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            @click="changeCurrentYear(this.currentYear + 1)"
            >{{ this.currentYear + 1 }}</a
          >
        </li>
      </ul>
    </div>
      <TableBox :array1="dataJson" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue"; /*This component is the table of chapters that you see. It is reused in YG, ELEM, and KIND pages.*/
import ygJSON from "../../data/yg.json";

export default {
  components: { TableBox },

  data() {
    return {
      currentYear: new Date().getFullYear(),
      ygDatabase: ygJSON,
      c1_YG: [],
      c2_YG: [],
      c3_YG: [],
      dataJson: [],
    };
  },

  mounted() {
    this.arrayToString();
  },

  methods: {
    changeCurrentYear(year) {
      this.determineCurrentCycle(year);
    },
    determineDate(year) {
      var date = new Date(year, 0, 1);
      while (date.getDay() != 0) {
        date.setDate(date.getDate() + 1);
      }
      var days = [];
      while (date.getFullYear() == year) {
        var m = date.getMonth() + 1;
        var d = date.getDate();
        days.push((m < 10 ? "0" + m : m) + "/" + (d < 10 ? "0" + d : d));
        date.setDate(date.getDate() + 7);
      }
      return days;
    },

    arrayToString() {
      for (var i in this.ygDatabase.youth_group) {
        for (var j in this.ygDatabase.youth_group[i]) {
          if (i == "cycle1") {
            this.c1_YG.push(this.ygDatabase.youth_group[i][j]);
          }
          if (i == "cycle2") {
            this.c2_YG.push(this.ygDatabase.youth_group[i][j]);
          }
          if (i == "cycle3") {
            this.c3_YG.push(this.ygDatabase.youth_group[i][j]);
          }
        }
      }
      this.determineCurrentCycle(this.currentYear);
    },

    determineCurrentCycle(year) {
      var num = parseInt(year);
      if ((num - 1) % 3 == 0) {
        this.dataJson = this.c1_YG;
      }
      if ((num - 1) % 3 == 1) {
        this.dataJson = this.c2_YG;
      }
      if ((num - 1) % 3 == 2) {
        this.dataJson = this.c3_YG;
      }
      this.addDates();
    },

    addDates() {
      var arrDate = this.determineDate(this.currentYear);
      for (var i in this.dataJson) {
        this.dataJson[i].date = arrDate[i];
      }
    },
  },
};
</script>

<style>

</style>