<template>
  <div class="lesson-table-padding">
    <h1>Youth Group True Light</h1>
    <TableBox :path="path"  />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue";

export default {
  components: { TableBox },
  data() {
    return {
      path: "yg", /*This is the path of the json file that will be loaded in TableBox component*/
    };
  },
};
</script>

<style>
</style>