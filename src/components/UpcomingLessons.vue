<template>
  <div class="upcoming-lessons-container">
    <div class="title-banner sans-font row p-3 mt-4 mx-0 g-2">
      <div class="col-12 col-sm mt-0" style="font-size:25px">
        Next Lesson
      </div>
      <div class="bold-box col-5 py-1 mx-auto col-sm-auto mt-sm-0 order-sm-first">
        Ch. {{ nextChapter }}
      </div>
      <div class="bold-box col-5 py-1 mx-auto col-sm-auto mt-sm-0">
        {{ nextSunday.getMonth() + 1 }}/{{ nextSunday.getDate() }}/{{ nextSunday.getFullYear() }}
      </div>
    </div>
    <div class="row mt-0 g-3">
      <div class="col-lg-4">
        <LessonCard groupRoute="kindergarten" :isDateMode="true" />
      </div>
      <div class="col-lg-4">
        <LessonCard groupRoute="elementary" :isDateMode="true" />
      </div>
      <div class="col-lg-4">
        <LessonCard groupRoute="youth-group" :isDateMode="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { getNextSunday, getChapterNum } from '../lib/chronometry.js'
import LessonCard from './LessonCard.vue'

export default {
  components: { LessonCard },

  data() {
    return {
      nextSunday: getNextSunday(new Date())
    }
  },

  computed: {
    nextChapter() {
      return getChapterNum(new Date())
    }
  }
}
</script>

<style>
.sans-font {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: #707070;
}

.bold-box {
  min-width: 120px;
  background: lightgray;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
}

.title-banner {
  background: white;
  border-radius: 25px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
</style>