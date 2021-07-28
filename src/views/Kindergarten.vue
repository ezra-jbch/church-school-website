<template>
  <div class="root">
    <h1>Kindergarten</h1>
    <TableBox :array1="dataJson" />
  </div>
</template>
<script>
import TableBox from "../components/TableBox.vue";
import dataBase from "../../data/db.json";
export default {
  components: { TableBox },
  data() {
    return {
      dataJson: dataBase.lessons.year_2021.kindergarten
    };
  },
};
</script>

<style>
</style>