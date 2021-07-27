<template>
  <div class="root">
    <h1>Youth Group</h1>
    <TableBox :array1="arrayBox" />
  </div>
</template>

<script>
import TableBox from "../components/TableBox.vue"
export default {
  components:{TableBox},
  data() {
    return {
      arrayBox: [
        {
          id: "1",
          date: "01/03",
          title: "Daily Bible Study",
          pdf: "",
          sermon:
            "https://www.youtube.com/watch?v=3fyTOiK29nM&list=PLWj53mXE8Z2SGZVwNEZLbWkllo1KrC4lv&index=1&ab_channel=JBChurchSchool",
        },
        {
          id: "2",
          date: "01/10",
          title: "In This Manner Pray",
          pdf: "",
          sermon:
            "https://www.youtube.com/watch?v=swizswbN8zw&list=PLWj53mXE8Z2SGZVwNEZLbWkllo1KrC4lv&index=3&ab_channel=JBChurchSchool",
        },
      ],
    };
  },
};
</script>

<style>
</style>