<template>
  <div id="table-container">
    <!-- code for search: https://mdbootstrap.com/docs/standard/forms/search/ -->

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Chapter</th>
          <th scope="col">Title</th>
          <th scope="col">PDF</th>
          <th scope="col">Sermon</th>
        </tr>
      </thead>
      <tbody style="text-align: center; vertical-align: middle">
        <tr v-for="page in array1" :key="page">
          <td>{{ page.date }}</td>
          <td>{{ page.id }}</td>
          <td>{{ page.title }}</td>
          <td>
            <button class="btn btn-outline-primary">
              <a
                :href="page.pdf"
                target="_blank"
                style="text-decoration: none; color: black"
                >Download</a
              >
            </button>
          </td>
          <td>
            <button class="btn btn-outline-primary">
              <a
                :href="page.sermon"
                target="_blank"
                style="text-decoration: none; color: black"
                >Watch</a
              >
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["array1"],
  data() {
    return {
      searchItem: "",
    };
  },
};
</script>

<style>
#table-container {
  background-color: white;
  margin-top: 2%;
  border: 1px solid black;
}
#searchBar {
  width: 20%;
  margin-top: 1%;
  float: right;
}
</style>