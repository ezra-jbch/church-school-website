<template>
  <div class="lesson-table-padding">
    <!--See global css in assets folder-->
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
        </ul>
      </div>
    </div>
    <div style="padding: 0px 100px 0px 0px">
      <h1>Elementary Cornerstone</h1>
    </div>
    <TableBox :array1="dataJson" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue"; /*This component is the table of chapters that you see. It is reused in YG, ELEM, and KIND pages.*/
import elemJSON from "../../data/elem.json";

export default {
  components: { TableBox },

  data() {
    return {
      currentYear: new Date().getFullYear(),
      elemDatabase: elemJSON,
      showYear: 0,
      dataJson: [],
      c1_ELEM: [],
      c2_ELEM: [],
    };
  },
  mounted() {
    this.arrayToString();
  },

  methods: {
    arrayToString() {
      for (var i in this.elemDatabase.elem) {
        if (i == "cycle1") {
          for (var j in this.elemDatabase.elem[i]) {
            this.c1_ELEM.push(this.elemDatabase.elem[i][j]);
          }
        }
        if (i == "cycle2") {
          for (var j in this.elemDatabase.elem[i]) {
            this.c2_ELEM.push(this.elemDatabase.elem[i][j]);
          }
        }
      }
      this.determineCurrentCycle(this.currentYear);
    },
    determineCurrentCycle(year) {
      var num = parseInt(year);
      if (num % 2 == 0) {
        this.dataJson = this.c1_ELEM;
      }
      if (num % 2 == 1) {
        this.dataJson = this.c2_ELEM;
      }
      this.addDates(year);
    },
    addDates(year) {
      /*For a given year, this method gets the current year, and adds the sundays for that year in an array*/
      var arrDate = this.determineDate(year);
      for (var i = 0; i < arrDate.length; i++) {
        this.dataJson[i].date = arrDate[i];
      }
      if(arrDate.length < 53){
        this.dataJson.splice(52, 1);
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
</style>