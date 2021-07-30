<template>
  <div id="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <!--Columns for the table-->
          <th style="width: 5%" scope="col">Date</th>
          <th style="width: 5%" scope="col">Chapter</th>
          <th style="width: 20%" scope="col">Title</th>
          <th style="width: 5%" scope="col">PDF</th>
          <th style="width: 5%" scope="col">Sermon</th>
        </tr>
      </thead>
      <tbody style="text-align: center; vertical-align: middle">
        <!--Looping through db.json file to get individual column elements-->
        <tr
          v-for="page in this.arr[this.cycle]"
          :key="page"
          v-bind:style="{ 'background-color': changeColor(page.date) }"
        >
          <td>{{ page.date }}</td>
          <td>{{ page.chapter }}</td>
          <td>{{ page.title }}</td>
          <td>
            <button
              class="btn btn-outline-primary"
              id="buttonStyle"
              @click="openPDF(page.pdf)"
              :disabled="page.pdf == ''"
            >
              Download
            </button>
          </td>
          <td>
            <button
              class="btn btn-outline-primary"
              id="buttonStyle"
              @click="openSermon(page.sermon)"
              :disabled="page.sermon == ''"
            >
              Watch
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  /*path is the directly of json file*/
  props: ["path", "showYear"],
  data() {
    return {
      currentYear: this.showYear,
      arr: [] /*3D array of all the cycles*/,
      cycle: 0 /*Determine cycle1, cycle2, cycle3*/,
      currentMonth: 0,
      currentDay: 0,
      color: "",
    };
  },
  mounted() {
    /*Dynamically getting json file*/
    var json = require("../../data/" + this.path + ".json");
    /*This method strips the json file into smaller arrays*/
    this.arrayToString(json);
    this.formatDate();
  },
  methods: {
    openPDF(page) {
      window.open("./2021 True Light/" + page);
    },
    openSermon(vid) {
      window.open(vid);
    },
    formatDate() {
      let temp = new Date().toISOString().slice(0, 10);
      let temp2 = temp.toString().substring(5, temp.length);
      let temp3 = temp2.replace("-", "/");
      this.currentMonth = parseInt(temp3.substring(0, 2));
      this.currentDay = parseInt(temp3.substring(3, temp3.length));
    },
    arrayToString(json) {
      for (var cycle in json[this.path]) {
        var tempChapters = [];
        for (var chapter in json[this.path][cycle]) {
          tempChapters.push(json[this.path][cycle][chapter]);
        }
        this.arr.push(tempChapters);
      }
      this.calculateCycle(this.showYear);
    },
    calculateCycle(year) {
      /*This method determines for a given year which cycle it is in*/
      /*For example, 2020 is cycle1, 2021 is cycle2, 2022 is cycle3*/
      var num = parseInt(year);
      const BASELINE = 2020;
      this.cycle = (year - (BASELINE % this.arr.length)) % this.arr.length;
      this.addDates(year);
    },
    addDates(year) {
      /*For a given year, this method gets the current year, and adds the sundays for that year in an array*/
      var arrOfSundays = this.determineDate(year);
      for (var i = 0; i < arrOfSundays.length; i++) {
        this.arr[this.cycle][i].date = arrOfSundays[i];
      }
      if (arrOfSundays.length < 53) {
        this.arr[this.cycle].splice(52, 1);
      }
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
    changeColor(date) {
      this.calculateCycle(this.showYear);
      if (this.currentYear == this.showYear) {
        var dateMonth = parseInt(date.substring(0, 2));
        var dateDay = parseInt(date.substring(3, date.length));
        if (dateMonth < this.currentMonth) {
          return (this.color = "#e8f4f8");
        } else {
          if (dateMonth == this.currentMonth && dateDay < this.currentDay) {
            return (this.color = "#e8f4f8");
          }
        }
      }
    },
  },
};
</script>

<style>
#buttonStyle:disabled {
  border-color: grey;
  color: grey;
}
#table-container {
  background-color: white;
  margin-top: 2%;
  border: 1px solid black;
}
#buttonStyle {
  border-color: #005595;
  color: #005595;
}
#buttonStyle:hover {
  background-color: #005595;
  color: white;
}
</style>