<template>
  <div class="root">
    <h1>Youth Group</h1>
    <div class="container" id="modalBox">
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
          <tr>
            <th scope="row">01/10</th>
            <td>2</td>
            <td>In This Manner Pray</td>
            <td><button>Download</button></td>
            <td><button>Watch</button></td>
          </tr>
          <tr>
            <th scope="row">01/17</th>
            <td>3</td>
            <td>The Fellowship of Christians</td>
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
}
</style>