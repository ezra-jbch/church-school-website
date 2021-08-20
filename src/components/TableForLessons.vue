<template>
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
        <tr
          v-for="chapter in currentChaptersOfCycle"
          :key="chapter"
          :style="{ 'background-color': changeColor(chapter.date) }"
        >
          <td>{{ chapter.date }}</td>
          <td>{{ chapter.chapter }}</td>
          <td>{{ chapter.title }}</td>
          <td>
            <a
              :href="'../2021 True Light/' + chapter.pdf"
              target="_blank"
              :class="{ disabled: chapter.pdf == '' }"
            >
              <!--Even though the button was disabled, the a href was not, that is why I dynamically add the disabled class.-->
              <button
                class="btn btn-outline-primary"
                id="buttonStyle"
                :disabled="chapter.pdf == ''"
              >
                <!--If there is no no chapter PDF linked, disable the button-->
                <DownloadSVG />
              </button>
            </a>
          </td>
          <td>
            <router-link
              :to="{
                name: 'SermonPage',
                params: {
                  group: nameOfGroup,
                  year: selectedYear,
                  title: chapter.title,
                },
              }"
              target="_blank"
              :class="{ disabled: chapter.sermon == '' }"
            >
              <button
                class="btn btn-outline-primary"
                id="buttonStyle"
                :disabled="chapter.sermon == ''"
              >
                <!--If there is no no chapter sermon linked, disable the button-->
                <WatchSVG />
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

const BASELINE = 2020; /*For YG and ELEM, there are multiple cycles. So, 2020 is our baseline (cycle1).*/
import DownloadSVG from "../components/DownloadSVG.vue";
import WatchSVG from "../components/WatchSVG.vue";

export default {
  /*nameOfGroup is that nameOfGroup that determines which json file you are looking at (YG,ELEM,KIND)*/
  /*selectedYear is the year you want to view. Changes on dropdown click (Dropdown in YG and ELEM component)*/
  props: ["nameOfGroup", "selectedYear"],

  components: { DownloadSVG, WatchSVG },

  data() {
    return {
      dropDownYear: new Date().getFullYear(),
      changeYear: 0,
      currentMonth: 0,
      currentDay: 0,
    };
  },

  mounted() {
    this.setCurrentMonthAndDay();
  },

  computed: {

    currentCycle() {
      /*This method used 2020, the baseline, and calculates what cycle any other given year will fall into*/
      /*For example, 2020-cycle1, 2021-cycle2, 2022-cycle3*/
      /*NOTE: Though we are using cycle 1,2, and 3, the index is 0,1, and 2.*/
      return (
        (this.selectedYear - (BASELINE % this.cycles.length)) %
        this.cycles.length
      );
    },

    currentChaptersOfCycle() {
      /*Populate all the dates of the year (sundays) for that given cycle*/
      /*This bottom line is used to make sure it doesn't break if selectedYear is undefined*/
      if (!this.selectedYear) {
        return [];
      }
      return this.cyclesWithDates(this.selectedYear);
    },

    cycles() {
      /*Get the json file*/
      return require("../data/" + this.nameOfGroup + ".json");
    },
  },

  methods: {
    changeColor(date) {
      /*This method highlights the next closest sunday in the table*/
      if (
        this.nextClosestSunday(
          "" + this.dropDownYear + this.currentMonth + this.currentDay
        ).replace("-", "/") == date
      ) {
        return "#afdefe";
      }
    },

    nextClosestSunday(s) {
      let d = new Date(
        s.substring(0, 4),
        s.substring(4, 6) - 1,
        s.substring(6)
      );
      d.setDate(d.getDate() - d.getDay() + 7);
      return d.toISOString().slice(5, 10);
    },

    setCurrentMonthAndDay() {
      /*Used to calculate the current month and day for this year*/
      /*This data is later used to determine all the chapters that have passed (been used) for the present year*/
      const temp = new Date()
        .toISOString()
        .slice(0, 10); /*Returns date in 2021-08-10 format*/
      let monthAndDaytemp = temp
        .toString()
        .substring(5, temp.length); /*substring to get month and day only*/
      this.currentMonth = monthAndDaytemp.substring(0, 2);
      this.currentDay = monthAndDaytemp.substring(3, monthAndDaytemp.length);
    },

    cyclesWithDates(year) {
      /*This method, for a given year, will create a temp array that stores all the sundays for that given year.*/
      /*Once that temp array is populated, it is used to fill our json data with the correct dates*/
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
      const days = [];
      while (date.getFullYear() == year) {
        let m = date.getMonth() + 1;
        let d = date.getDate();
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

a.disabled {
  pointer-events: none;
  cursor: default;
}

#table-container {
  background-color: white;
  margin-top: 2%;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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