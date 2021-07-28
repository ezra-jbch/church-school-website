<template>
  <div class="root">
    <h1>Elementary</h1>
    <TableBox :array1="dataJson"/>
  </div>
</template>
<script>
import TableBox from "../components/TableBox.vue";
import dataBase from "../../data/db.json";
export default {
  components: { TableBox },
  data() {
    return {
      dataJson: dataBase.lessons.year_2021.elementary
    };
  },
};
</script>

<style>
</style>