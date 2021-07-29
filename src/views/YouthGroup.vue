<template>
  <div class="lesson-table-padding"> <!--See global css in assets folder-->
    <div class="align-stuff">
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
            <a
              class="dropdown-item"
              @click="determineCurrentCycle(this.currentYear - 1)"
              >{{ this.currentYear - 1 }}</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              @click="determineCurrentCycle(this.currentYear)"
              >{{ this.currentYear }}</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              @click="determineCurrentCycle(this.currentYear + 1)"
              >{{ this.currentYear + 1 }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div style="padding: 0px 100px 0px 0px">
        <h1>Youth Group True Light</h1>
    </div>
    <TableBox :array1="dataJson" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue"; /*This component is the table of chapters that you see. It is reused in YG, ELEM, and KIND pages.*/
import ygJSON from "../../data/yg.json"; /*Json file for the Youth Group materials*/

export default {
  components: { TableBox },

  data() {
    return {
      currentYear:
        new Date().getFullYear() /*This is how you get the current year*/,
      showYear: 0,
      ygDatabase: ygJSON /*Save json data into array*/,
      c1_YG: [] /*Cycle1 True Light materials*/,
      c2_YG: [] /*Cycle2 True Light materials*/,
      c3_YG: [] /*Cycle3 True Light materials*/,
      dataJson:
        [] /*Temp Array that determines what will be displayed on the screen*/,
    };
  },

  mounted() {
    /*When this page is mounted, call arrayToString.*/
    this.arrayToString(); /*arrayToString gets the json data and splits it into the cycle arrays (Cycle1, cycle2, cycle3)*/
  },

  methods: {
    arrayToString() {
      /*This method gets the json data and sorts it into the necessary cycles (cycle1, cycle2, cycle3)*/
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
      this.determineCurrentCycle(
        this.currentYear
      ); /*This method determines for a given year which cycle it is in*/
    },
    determineCurrentCycle(year) {
      /*This method determines for a given year which cycle it is in*/
      /*For example, 2020 is cycle1, 2021 is cycle2, 2022 is cycle3*/
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
      this.addDates(year);
    },
    addDates(year) {
      /*For a given year, this method gets the current year, and adds the sundays for that year in an array*/
      var arrDate = this.determineDate(year);
      for (var i in this.dataJson) {
        this.dataJson[i].date = arrDate[i];
      }
      this.changeCurrentYear(year);
    },
    determineDate(year) {
      /*Method used to create an array that returns every sunday in year for a given year*/
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
      return days; /*Array of sundays for the year*/
    },
    changeCurrentYear(year) {
      this.showYear = year;
    },
  },
};
</script>

<style>

.align-stuff {
  float: left;
}
</style>