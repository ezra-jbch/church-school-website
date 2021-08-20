<template>
  <div class="lesson-table-padding"> <!--Check global css file in assets folder for lesson-table-padding-->
    <div class="alignButtonAndTitle"><!--Used to align button and title-->
      <h1>{{ titlesForGroup[nameOfGroup] }}</h1>
      <div class="btn-group" v-if="cycles.length > 1" style="margin-left: 30px"> <!--v-if is used to disable dropdown for KIND because they only have 1 cycle-->
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style="background-color: #005595; border-color: #005595"
        >
          {{ selectedYear }} <!--Selected year is year in query. Show that on dropdown title-->
        </button>
        <ul class="dropdown-menu" style="cursor: pointer">
          <li v-for="(item, index) in cycles" :key="index">
            <a class="dropdown-item" @click="changeSelectedYear(index)">{{
              yearsShownOnDropdown(index)
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <transition name="mode-fade" mode="out-in">
      <TableForLessons
        :key="key"
        :nameOfGroup="nameOfGroup"
        :selectedYear="selectedYear"
      />
    </transition>
  </div>
</template>

<script>
import TableForLessons from "../components/TableForLessons.vue"; /*Table on lessons page that will show the lesson content (pdf, sermon, title, date, etc)*/

export default {
  components: { TableForLessons },

  props: ["nameOfGroup", "titlesForGroup", "selectedYear"], 
  /*nameOfGroup: youth-group, elementary,kindergarten. Same name as JSON files*/
  /*titlesForGroup: Comes from the constant.js file in data folder. Has the titles for each group (youth-group = Youth Group)*/
  /*selectedYear is the year that the user puts into the query in URL*/
  
  data() {
    return {
      key:0, /*This key is used simply as a way to transition between tables. Value of key is changed when the user presses the dropdown.*/
      currentYear: new Date().getFullYear(), /*get the current year in real life*/
    };
  },

  created() {
    if (!this.selectedYear) { /*If the user does not include a year in the url, default to current year*/
      /*Example: if user puts in /lessons/youth-group, default to /lessons/youth-group?year={{currentYear}}*/
      this.$router.push({
        path: `/lessons/${this.nameOfGroup}`,
        query: { year: this.currentYear },
      });
    }
  },

  computed: {
    cycles() {
      /*Get the json file depending on which group you are dealing with*/
      /*This is to decide how many cycles should be displayed in the dropdown (ex: yg has three cycles in json file, so three options in dropdown)*/
      return require("../data/" + this.nameOfGroup + ".json");
    },
  },

  methods: {
    yearsShownOnDropdown(index) {
      /*Method returns the years that should be in dropdown (ex: if current year is 2021 in YG, then 2020,2021, and 2022 should be displayed)*/
      return index + parseInt(this.currentYear) - 1;
    },

    changeSelectedYear(index) {
      /*This method is used to actually change the data in the dropdown to display the correct year of information*/
      this.key++;
      this.$router.push({
        name: "LessonsPage",
        query: { year: index + parseInt(this.currentYear) - 1 },
      });
    },
  },
};
</script>

<style>
/*mode-fade is used to transition the table*/
.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.4s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}

.alignButtonAndTitle {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>