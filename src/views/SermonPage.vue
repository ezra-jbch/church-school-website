<template>
  <div>
    <!--Comments outside of this div breaks the component-->
    <!--Youtube links must have the "embed" attribute in the url for it to work properly. You get this from the "share" button on youtube.-->
    <iframe
      id="iframeCSS"
      loading="lazy"
      :src="lessonURL"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
const BASE_YEAR = 2020;

export default {
  props: ["group", "year", "chapter"],

  computed: {
    cycles() {
      return require("../data/" + this.group + ".json");
    },

    currentCycle() {
      /*This method used 2020, the BASE_YEAR, and calculates what cycle any other given year will fall into*/
      /*For example, 2020-cycle1, 2021-cycle2, 2022-cycle3*/
      /*NOTE: Though we are using cycle 1,2, and 3, the index is 0,1, and 2.*/
      return ((this.year - (BASE_YEAR % this.cycles.length)) % this.cycles.length);
    },
    
    lessonURL() {
      /*Given the group and title of the lesson, go through the json file and find the url for the video*/
      return this.cycles[this.currentCycle][this.chapter-1].sermon;
    },
  },
};
</script>

<style>
#iframeCSS {
  margin-top: 3%;
}
</style>