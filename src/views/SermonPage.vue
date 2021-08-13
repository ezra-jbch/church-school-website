<template>
  <!--NOTE: For this to work properly, you need the "embed" url from youtube, not just any url-->
  <div>
    <iframe
      width="560"
      height="500"
      :src="changeUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["videoURL"],
  computed: {
    changeUrl() {
      return this.videoURL;
    },
  },
};
</script>

<style>
</style>