<template>
  <div class="lesson-table-padding">
    <h1>Kindergarten Cornerstone</h1>
    <TableBox :path="path" :showYear="showYear" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue";

export default {
  components: { TableBox },
  data() {
    return {
      showYear: new Date().getFullYear() /*Current Year*/,
      path: "kind" /*This is the path of the json file that will be loaded in TableBox component*/,
    };
  },
  methods: {
  },
};
</script>

<style>
</style>