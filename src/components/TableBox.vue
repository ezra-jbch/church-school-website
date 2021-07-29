<template>
  <div id="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <!--Columns for the table-->
          <th scope="col">Date</th>
          <th scope="col">Chapter</th>
          <th scope="col">Title</th>
          <th scope="col">PDF</th>
          <th scope="col">Sermon</th>
        </tr>
      </thead>
      <tbody style="text-align: center; vertical-align: middle">
        <transition-group name="list">
          <!--Looping through db.json file to get individual column elements-->
          <tr v-for="page in array1" :key="page">
            <td>{{ page.date }}</td>
            <td>{{ page.chapter }}</td>
            <td>{{ page.title }}</td>
            <td>
              <button
                class="btn btn-outline-primary"
                id="testa"
                @click="openPDF(page.pdf)"
                :disabled="page.pdf == ''"
              >
                Download
              </button>
            </td>
            <td>
              <button class="btn btn-outline-primary" id="testa" @click="openSermon(page.sermon)" :disabled="page.sermon == ''">Watch</button>
            </td>
          </tr>
        </transition-group>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: [
    "array1",
  ] /*array1 is the array from the db.json that contains church school material*/,

  data() {
    return {};
  },
  methods: {
    openPDF(page) {
      window.open("./2021 True Light/" + page);
    },
    openSermon(vid){
      window.open(vid);
    }
  },
};
</script>

<style>
#testa:disabled{
  border-color: grey;
  color:grey;
}
#testa {
  border-color: #005595;
  color: #005595;
}
#testa:hover {
  background-color: #005595;
  color: white;
}
/*https://vuejs.org/v2/guide/transitions.html*/
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
#table-container {
  background-color: white;
  margin-top: 2%;
  border: 1px solid black;
}
</style>
