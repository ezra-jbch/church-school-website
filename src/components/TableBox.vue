<template>
  <div id="table-container">
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
          <!--Looping through db.json file-->
          <td>{{ page.date }}</td>
          <td>{{ page.chapter }}</td>
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

  props: [
    "array1",
  ] /*array1 is the array from the db.json that contains church school material*/,

  data() {
    return {
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
</style>
