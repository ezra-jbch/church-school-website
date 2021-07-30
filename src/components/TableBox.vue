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
        <tr v-for="page in this.arr[this.cycle]" :key="page">
          <td>{{ page.date }}</td>
          <td>{{ page.chapter }}</td>
          <td>{{ page.title}}</td>
          <td>
            <button class="btn btn-outline-primary" id="buttonStyle">
              Download
            </button>
          </td>
          <td>
            <button class="btn btn-outline-primary" id="buttonStyle">
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
  props: ["path"] /*path is the directly of json file*/,
  data() {
    return {
      currentYear: new Date().getFullYear(),
      arr: [] /*3D array of all the cycles*/,
      cycle: 0,
      display: [],
    };
  },
  mounted() {
    var json = require("../../data/" +
      this.path +
      ".json"); /*Dynamically getting json file*/
    this.arrayToString(
      json
    ); /*This method strips the json file into smaller arrays*/
  },
  methods: {
    arrayToString(json) {
      for (var cycle in json[this.path]) {
        var tempChapters = [];
        for (var chapter in json[this.path][cycle]) {
          tempChapters.push(json[this.path][cycle][chapter]);
        }
        this.arr.push(tempChapters);
      }
      this.calculateCycle(this.currentYear);
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
  },
};
</script>

<style>
</style>