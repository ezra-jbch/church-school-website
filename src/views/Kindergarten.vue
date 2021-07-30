<template>
  <div class="lesson-table-padding">
    <!--See global css in assets folder-->
    <h1>Kindergarten Cornerstone</h1>
    <TableBox :array1="dataJson" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue"; /*This component is the table of chapters that you see. It is reused in YG, ELEM, and KIND pages.*/
import kindJSON from "../../data/kind.json";

export default {
  components: { TableBox },

  data() {
    return {
      currentYear: new Date().getFullYear(),
      kindDatabase: kindJSON,
      dataJson: [],
    };
  },

  mounted() {
    this.arrayToString();
  },
  methods: {
    arrayToString() {
      for (var i in this.kindDatabase.kind) {
        for (var j in this.kindDatabase.kind[i]) {
          this.dataJson.push(this.kindDatabase.kind[i][j]);
        }
      }
      this.addDates();
    },
    addDates() {
      var arrDate = this.determineDate(this.currentYear);
      for (var i = 0; i < arrDate.length; i++) {
        this.dataJson[i].date = arrDate[i];
      }
      if(this.dataJson[52].date == ""){
        this.dataJson.splice(52, 1);
      }
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
  },
};
</script>

<style>
</style>