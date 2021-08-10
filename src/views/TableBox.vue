<template>
  <div class="lesson-table-padding">
    <h1>{{this.mapOfJson[this.pathToJson]}}</h1>
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
          <!--Looping through each chapter in a specific cycle (cycle1, cycle2, etc) and displaying it on table-->
          <tr v-for="chapter in this.currentChaptersOfCycle" :key="chapter">
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
                  <!--If there is no no chapter PDF linked, disable the button-->
                  Download
                </button>
              </a>
            </td>
            <td>
              <a :href="'' + chapter.sermon" target="_blank">
                <button
                  class="btn btn-outline-primary"
                  id="buttonStyle"
                  :disabled="chapter.sermon == ''"
                >
                  <!--If there is no no chapter sermon linked, disable the button-->
                  Watch
                </button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

const BASELINE = 2020; /*For YG and ELEM, there are multiple cycles. So, 2020 is our baseline (cycle1).*/

export default {
  /*pathToJson is that pathToJson that determines which json file you are looking at (YG,ELEM,KIND)*/
  /*showYear is the year you want to view. Changes on dropdown click (Dropdown in YG and ELEM component)*/
  /*Title changes the header on top of the page to indicate correct class (YG,ELEM, KIND)*/
  props: ["pathToJson", "showYear", "mapOfJson"],

  data() {
    return {
      currentMonth: 0,
      currentDay: 0,
      color: "",
    };
  },
  mounted() {
    /*This if statement is used to load the data when the user does not load from the HOME page*/
    /*App.vue is what sets the path to the JSON file after you press the dropdown. But that would be null if they laod straight into a class (YG,ELEM, KIND)*/
    /*Dynamically getting json file data*/
    /*this.cycles = this.setCycles;*/
    this.currentChaptersOfCycle;/*Returns an array with the json data organized with correct dates (sundays for year are calculated and stored into array)*/
    this.formatDate();
  },
  computed: {
    currentCycle() {
      /*This method used 2020, the baseline, and calculates what cycle any other given year will fall into*/
      /*For example, 2020-cycle1, 2021-cycle2, 2022-cycle3*/
      /*NOTE: Though we are using cycle 1,2, and 3, the index is 0,1, and 2.*/
      return (
        (this.showYear - (BASELINE % this.cycles.length)) % this.cycles.length
      );
    },
    currentChaptersOfCycle(){
      return this.addDates(this.showYear);
    },
    cycles(){
      return require("../data/" + this.pathToJson + ".json");
    },
  },

  methods: {

    formatDate() {
      /*Used to calculate the current month and day for this year*/
      /*This data is later used to determine all the chapters that have passed for the present year*/
      let temp = new Date().toISOString().slice(0, 10);
      let temp2 = temp.toString().substring(5, temp.length);
      let temp3 = temp2.replace("-", "/");
      this.currentMonth = parseInt(temp3.substring(0, 2));
      this.currentDay = parseInt(temp3.substring(3, temp3.length));
    },

    addDates(year) {
      /*This method, for a given year, will create a temp array that stores all the sundays for that given year.*/
      /*Once that temp array is populated, it is used to fill our json data with the correct dates*/

      /*QUESTION: Should this method go into computed?*/
      /*TO-DO: Figure out what to do for years with 53 chapters.*/
      const sundaysOfYear = this.getSundaysByYear(year);
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