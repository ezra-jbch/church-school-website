<template>
  <div class="lesson-card sans-font">

    <!-- Card Background Image -->
    <img class="lesson-card-img" :src="require('../assets/' + groupRoute + '.png')" :alt="groupRoute" />

    <!-- Chapter Name -->
    <div class="card-title">
      {{ chapterInfo.title === "" ? '- Unavailable -' : chapterInfo.title }}
    </div>

    <!-- Container for Placing Buttons  -->
    <div class="button-strip row m-0 justify-content-evenly">

      <!-- PDF Button -->
      <div class="fill-button col-auto p-0">
        <!-- TODO: Make sure to change ' True Light/' once the folder name changes so that it works across all groups -->
        <a
          :href="'../' + groupRoute + '/cycles/cycle-' + displayCycle + '/' + chapterInfo.pdf"
          target="_blank"
          :class="{ disabled: chapterInfo.pdf === '' }"
        >
          <!--Even though the button was disabled, the a href was not, that is why I dynamically add the disabled class.-->
          <button
            class="btn btn-outline-primary"
            id="activeButtonStyle"
            :disabled="chapterInfo.pdf === ''"
          >
            <!--If there is no chapter PDF linked, disable the button-->
            <DownloadSVG />
          </button>
        </a>
      </div>

      <!-- YouTube Button -->
      <div class="fill-button col-auto p-0">
        <router-link
          :to="
            '/sermon/?group=' +
            groupRoute +
            '&chapter=' +
            displayChapter +
            '&year=' +
            yearNextSunday
          "
          target="_blank"
          :class="{ disabled: chapterInfo.sermon === '' }"
        >
          <button
            class="btn btn-outline-primary"
            id="activeButtonStyle"
            :disabled="chapterInfo.sermon === ''"
          >
            <!--If there is no chapter sermon linked, disable the button-->
            <WatchSVG />
          </button>
        </router-link>
      </div>

    </div>

    <!-- Group Name -->
    <div class="card-label">
      {{ groupTitle }}
    </div>

  </div>
</template>

<script>
  import { getNextSunday, getChapterNum } from '../lib/chronometry.js';
  import { BASE_YEAR, GROUP_TITLE_PER_ROUTE } from '../data/constants.js';
  import DownloadSVG from './DownloadSVG.vue';
  import WatchSVG from "./WatchSVG.vue";

  export default {
    components: { DownloadSVG, WatchSVG },

    props: {
      // groupRoute determines which json file you are looking at ("kindergarten", "elementary", "youth-group")
      groupRoute: {
        type: String,
        required: true,
        validator(value) {
          // checks to see if the prop matches "kindergarten", "elementary", or "youth-group"
          return Object.keys(GROUP_TITLE_PER_ROUTE).includes(value);
        },
      },

      // isDateMode specifies which mode (props) you want to use to choose the chapters you want to display in the card
      // true: date formatted; false: cycle & chapter formatted
      isDateMode: {
        type: Boolean,
        default: false,
      },

      // used only when isDateMode === false; specifies which cycle to use when displaying a chapter of lesson (ONE-indexed)
      cycle: {
        type: Number,
        default: 0,
      },

      // used only when isDateMode === false; specifies which chapter to display within the given cycle (ONE-indexed)
      chapter: {
        type: Number,
        default: 1,
        validator(value) {
          // check to see if the chapter number makes sense (between 1 and 53 inclusive)
          return 0 < value && value < 54;
        },
      },

      // used only when isDateMode === true; given the date (default current Date), it automatically finds the upcoming cycle & chapter to use when displaying a lesson
      date: {
        type: Date,
        default: new Date(),
      },
    },

    computed: {
      groupTitle() {
        return GROUP_TITLE_PER_ROUTE[this.groupRoute];
      },

      // calculate the cycle based on given date if isDateMode is true, otherwise use provided cycle
      displayCycle() {
        if (this.isDateMode) {
          // This method used 2020, the BASE_YEAR, and calculates what cycle any other given year will fall into
          // For example, 2020: cycle === 1; 2021: cycle === 2; 2022: cycle === 3
          return (this.yearNextSunday - (BASE_YEAR % this.cycles.length)) % this.cycles.length + 1;
        }
        return this.cycle;
      },

      // calculate the chapter based on given date if isDateMode is true, otherwise use provided chapter
      displayChapter() {
        if (this.isDateMode) {
          return getChapterNum(this.date);
        }
        return this.chapter;
      },

      // get the json file
      cycles() {
        return require('../data/' + this.groupRoute + '.json');
      },

      // return object corresponding to the chapter of interest within json
      chapterInfo() {
        return this.cycles[this.displayCycle - 1][this.displayChapter - 1];
      },

      // get the year of next Sunday
      yearNextSunday() {
        // in case the given date is toward the end of the year, the following Sunday may be in the year after the given date
        const upcomingSunday = getNextSunday(this.date);
        return upcomingSunday.getFullYear();
      },
    },
  };
</script>

<style>
  .lesson-card {
    background: white;
    border-radius: 25px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

    /* for cropping image */
    position: relative;
    overflow: hidden;
  }

  .lesson-card-img {
    /* for cropping image */
    width: 800px;
    margin-top: -120px;
  }

  .card-title {
    position: absolute;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
  }

  .button-strip {
    position: absolute;
    top: 65%;
    width: 100%;
    padding: 0;
  }

  .card-label {
    padding: 20px;
  }

  .fill-button {
    display: inline-block;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
  }

  a.disabled {
    pointer-events: none;
    cursor: default;
  }

  #activeButtonStyle {
    border-color: #c6c8ca;
    color: #005595;
  }

  #activeButtonStyle:disabled {
    border-color: gray;
    color: gray;
  }

  #activeButtonStyle:hover {
    background-color: #005595;
    color: white;
  }
</style>