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
        <transition-group name="mode-fade" mode="out-in">
          <tr
            v-for="chapter in this.currentChaptersOfCycle"
            :key="chapter"
          >
            <td>{{ chapter.date }}</td>
            <td>{{ chapter.chapter }}</td>
            <td>{{ chapter.title }}</td>
            <td>
              <a :href="'./2021 True Light/' + chapter.pdf" target="_blank">
                <button
                  class="btn btn-outline-primary"
                  id="buttonStyle"
                  :disabled="chapter.pdf == ''"
                >
                  Download
                </button>
              </a>
            </td>
            <td>
              <button
                class="btn btn-outline-primary"
                id="buttonStyle"
                @click="openSermon(chapter.sermon)"
                :disabled="chapter.sermon == ''"
              >
                Watch
              </button>
            </td>
          </tr>
        </transition-group>
      </tbody>
    </table>
  </div>
</template>

<script>
const BASELINE = 2020;
export default {
  /*path is the directly of json file*/
  props: ["path", "showYear"],
  data() {
    return {
      baseYear: this.showYear,
      currentChaptersOfCycle: [],
      currentMonth: 0,
      currentDay: 0,
      color: "",
      cycles: [],
    };
  },
  mounted() {
    /*Dynamically getting json file*/
    this.cycles = require("../../data/" + this.path + ".json");
    this.currentChaptersOfCycle = this.addDates(this.baseYear);
    this.addDates(this.baseYear);
    this.formatDate();
  },
  computed: {
    currentCycle() {
      // const BASELINE = 2020;
      return (
        (this.showYear - (BASELINE % this.cycles.length)) % this.cycles.length
      );
    },
  },
  methods: {
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
    addDates(year) {
      const sundaysOfYear = this.getSundaysByYear(year);
      // for (let i = 0; i < sundaysOfYear.length; i++) {
      //   this.cycles[this.currentCycle][i].date = sundaysOfYear[i];
      // }
      // if (sundaysOfYear.length < 53) {
      //   this.cycles[this.currentCycle].splice(52, 1);
      // }
      return this.cycles[this.currentCycle].map((chapter, index) => {
        chapter.date = sundaysOfYear[index];
        return chapter;
      });
    },
    getSundaysByYear(year) {
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
  watch: {
    showYear(val) {
      this.currentChaptersOfCycle = this.addDates(val);
    },
  },
};
</script>

<style>
.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.5s ease;
}
.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
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