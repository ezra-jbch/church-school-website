<template>
  <div class="lesson-table-padding">
    <h1>Youth Group</h1>
    <TableBox :array1="dataJson" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue"
import dataBase from "../../data/db.json";
export default {
  components:{TableBox},
  data() {
    return {
      dataJson: dataBase.lessons.year_2021.youth_group
    };
  }
};
</script>

<style>
</style>