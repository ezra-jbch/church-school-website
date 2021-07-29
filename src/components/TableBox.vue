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
              <a :href="'./2021 True Light/' + page.pdf" target="_blank"> <!--page.pdf only contains name of file, not the path-->
                <button class="btn btn-outline-primary">Download</button>
              </a>
            </td>
            <td>
              <a :href="page.sermon" target="_blank"> <!--Youtube link-->
                <button class="btn btn-outline-primary">Watch</button>
              </a>
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
  methods: {},
};
</script>

<style>
/*https://vuejs.org/v2/guide/transitions.html*/
.list-enter-active, .list-leave-active {
  transition: opacity .5s ease;
}

.list-enter-from, .list-leave-to {
  opacity: 0;
}
#table-container {
  background-color: white;
  margin-top: 2%;
  border: 1px solid black;
}
</style>
