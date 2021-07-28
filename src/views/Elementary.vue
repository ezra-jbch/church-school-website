<template>
  <div class="lesson-table-padding">
    <!--See global css in assets folder-->
    <h1>Elementary</h1>
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
      dataJson: [],
      c1_ELEM: [],
      c2_ELEM: [],
      dataJson: [],
    };
  },
  mounted() {
    this.arrayToString();
  },

  methods: {
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
      for (var i in this.elemDatabase.elem) {
        for (var j in this.elemDatabase.elem[i]) {
          if (i == "cycle1") {
            this.c1_ELEM.push(this.elemDatabase.elem[i][j]);
          }
          if (i == "cycle2") {
            this.c2_ELEM.push(this.elemDatabase.elem[i][j]);
          }
        }
      }
      this.determineCurrentCycle();
    },

    determineCurrentCycle() {
      var num = parseInt(this.currentYear);
      if ((num % 2) == 0) {
        this.dataJson = this.c1_ELEM;
      }
      if ((num % 2) == 1) {
        this.dataJson = this.c2_ELEM;
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