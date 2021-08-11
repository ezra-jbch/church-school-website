<template>
  <div class="lesson-table-padding">
    <div class="alignButtonAndTitle">
      <!--Used to align button and title-->
      <h1>{{ this.mapOfJson[this.pathToJson] }}</h1>
      <div class="btn-group" v-if="this.cycles.length > 1">
        <!--Disables dropdown for KIND because they only have 1 cycle-->
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
          <li v-for="(item, index) in this.cycles" :key="index">
            <a class="dropdown-item">{{changeDatesOnDropdown(index)}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="table-container">
      <table class="table table-hover">
        <thead>
          <tr>
            <!--Columns for the table-->
            <th style="width: 10%" scope="col">Date</th>
            <th style="width: 10%" scope="col">Chapter</th>
            <th style="width: 60%" scope="col">Title</th>
            <th style="width: 10%" scope="col">PDF</th>
            <th style="width: 10%" scope="col">Sermon</th>
          </tr>
        </thead>
        <tbody style="text-align: center; vertical-align: middle">
          <!--Looping through each chapter in a specific cycle (cycle1, cycle2, etc) and displaying it on table-->
          <tr v-for="chapter in this.currentChaptersOfCycle" :key="chapter" :style="{ 'background-color': changeColor(chapter.date) }">
            <td>{{ chapter.date }}</td>
            <td>{{ chapter.chapter }}</td>
            <td>{{ chapter.title }}</td>
            <td>
              <a :href="'../2021 True Light/' + chapter.pdf" target="_blank">
                <button
                  class="btn btn-outline-primary"
                  id="buttonStyle"
                  :disabled="chapter.pdf == ''"
                >
                  <!--If there is no no chapter PDF linked, disable the button-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-play-btn"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                    />
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                    />
                  </svg>
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
  props: ["pathToJson", "mapOfJson","showYear"],

  data() {
    return {
      dropDownYear: new Date().getFullYear(),
      currentMonth: 0,
      currentDay: 0,
    };
  },
  mounted() {
    /*This if statement is used to load the data when the user does not load from the HOME page*/
    /*App.vue is what sets the path to the JSON file after you press the dropdown. But that would be null if they laod straight into a class (YG,ELEM, KIND)*/
    /*Dynamically getting json file data*/
    /*this.cycles = this.setCycles;*/
    this
      .currentChaptersOfCycle; /*Returns an array with the json data organized with correct dates (sundays for year are calculated and stored into array)*/
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
    currentChaptersOfCycle() {
      /*Populate all the dates of the year (sundays) for that given cycle*/
      return this.addDates(this.showYear);
    },
    cycles() {
      /*Get the json file*/
      return require("../data/" + this.pathToJson + ".json");
    },
  },

  methods: {
    changeColor(date) {
      /*This method is used as a way to change the color of the row of the TableBox if the date has passed*/
      /*ISSUE: Not sure why, but when this is first called, it runs twice...*/
      if (this.dropDownYear == this.showYear) {
        const dateMonth = parseInt(date.substring(0, 2));
        const dateDay = parseInt(date.substring(3, date.length));
        if (dateMonth < this.currentMonth) {
          return "#afdefe";
        } else if (dateMonth == this.currentMonth && dateDay < this.currentDay) {
          return "#afdefe";
        }
      }
    },
    changeDatesOnDropdown(index) {
      if (index == 0) {
        return this.dropDownYear - 1;
      }
      if (index == 1) {
        return this.dropDownYear;
      }
      if (index == 2) {
        return this.dropDownYear + 1;
      }
    },
    formatDate() {
      /*Used to calculate the current month and day for this year*/
      /*This data is later used to determine all the chapters that have passed (been used) for the present year*/
      const temp = new Date()
        .toISOString()
        .slice(0, 10); /*Returns date in 2021-08-10 format*/
      let monthAndDaytemp = temp
        .toString()
        .substring(5, temp.length); /*substring to get month and day only*/
      let monthAndDayfinal = monthAndDaytemp.replace("-", "/");
      this.currentMonth = parseInt(monthAndDayfinal.substring(0, 2));
      this.currentDay = parseInt(
        monthAndDayfinal.substring(3, monthAndDayfinal.length)
      );
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
      const date = new Date(year, 0, 1);
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
.alignButtonAndTitle {
  display: flex;
  align-items: center;
  justify-content: center;
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