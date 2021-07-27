<template>
  <div class="root">
    <h1>Elementary</h1>
    <TableBox :array1="arrayBox" />
  </div>
</template>
<script>
import TableBox from "../components/TableBox.vue";
export default {
  components: { TableBox },
  data() {
    return {
      arrayBox: [
        {
          id: "1",
          date: "01/03",
          title: "A New Class",
          pdf: "",
          sermon:
            "https://www.youtube.com/watch?v=SJ9yVOnOTT4&ab_channel=JBChurchSchool",
        },
        {
          id: "2",
          date: "01/10",
          title: "The Bible, God's Words",
          pdf: "",
          sermon:
            "https://www.youtube.com/watch?v=FhS5XSQ-4Bc&list=PLWj53mXE8Z2Riatb77Q-_Ly16l_tdpFal&index=2&ab_channel=JBChurchSchool",
        },
      ],
    };
  },
};
</script>

<style>
</style>