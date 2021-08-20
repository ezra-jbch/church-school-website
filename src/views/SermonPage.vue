<template>
  <iframe
    width="500"
    height="600"
    loading="lazy"
    :src="getVideoURLForLessons()"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
/* Youtube links must have the "embed" attribute in the url for it to work properly. You get this from the "share" button on youtube.*/
export default {
  props: ["group", "year", "title"],

  mounted() {
    this.getVideoURLForLessons();
  },

  computed: {
    cycles() {
      /*Get the json file*/
      return require("../data/" + this.group + ".json");
    },
  },

  methods: {
    getVideoURLForLessons() {
      /*Given the group and title of the lesson, go through the json file and find the url for the video*/
      for (let i = 0; i < this.cycles.length; i++) {
        for(let j = 0; j<this.cycles[i].length; j++){
          if(this.cycles[i][j].title == this.title){
            return this.cycles[i][j].sermon;
          }
        }
      }
    },
  },
};
</script>

<style>
</style>