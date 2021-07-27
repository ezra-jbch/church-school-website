<template>
  <div class="root">
    <h1>Youth Group</h1>
    <div class="container" id="modalBox">
      <!-- code for search: https://mdbootstrap.com/docs/standard/forms/search/ -->
      <div class="input-group rounded" id="searchBar">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </span>
      </div>
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
        <tbody>
          <tr>
            <th scope="row">01/03</th>
            <td>1</td>
            <td>Daily Bible Study</td>
            <td><button>Download</button></td>
            <td><button>Watch</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
#modalBox {
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