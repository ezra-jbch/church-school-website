<template>
  <div id="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <!--Columns for the table-->
          <th style="width: 5%" scope="col">Date</th>
          <th style="width: 5%" scope="col">Chapter</th>
          <th style="width: 20%" scope="col">Title</th>
          <th style="width: 5%" scope="col">PDF</th>
          <th style="width: 5%" scope="col">Sermon</th>
        </tr>
      </thead>
      <tbody style="text-align: center; vertical-align: middle">
        <transition-group name="list" mode="out-in">
          <!--Looping through db.json file to get individual column elements-->
          <tr
            v-for="page in array1"
            :key="page"
            v-bind:style="{ 'background-color': changeColor(page.date) }"
          >
            <td>{{ page.date }}</td>
            <td>{{ page.chapter }}</td>
            <td>{{ page.title }}</td>
            <td>
              <button
                class="btn btn-outline-primary"
                id="buttonStyle"
                @click="openPDF(page.pdf)"
                :disabled="page.pdf == ''"
              >
                Download
              </button>
            </td>
            <td>
              <button
                class="btn btn-outline-primary"
                id="buttonStyle"
                @click="openSermon(page.sermon)"
                :disabled="page.sermon == ''"
              >
                Watch
              </button>
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
    "yearCheck",
  ] /*array1 is the array from the db.json that contains church school material*/,

  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().toISOString().slice(0, 10),
      formattedDate: "",
      color: "black",
    };
  },
  mounted() {
    this.formatDate();
  },
  methods: {
    formatDate() {
      let temp = this.month.toString().substring(5, this.month.length);
      this.formattedDate = temp;
      this.formattedDate = this.formattedDate.replace("-", "/");
    },
    openPDF(page) {
      window.open("./2021 True Light/" + page);
    },
    openSermon(vid) {
      window.open(vid);
    },
    changeColor(date) {
      if (this.yearCheck == this.year) {
        var dateMonth = parseInt(date.substring(0, 2));
        var dateDay = parseInt(date.substring(3, date.length));
        var currentMonth = parseInt(this.formattedDate.substring(0, 2));
        var currentDay = parseInt(
          this.formattedDate.substring(3, this.formattedDate.length)
        );
        if (dateMonth < currentMonth) {
          return (this.color = "#e8f4f8");
        } else {
          if (dateMonth == currentMonth && dateDay < currentDay) {
            return (this.color = "#e8f4f8");
          }
        }
      }
    },
  },
};
</script>

<style>
#buttonStyle:disabled {
  border-color: grey;
  color: grey;
}
#buttonStyle {
  border-color: #005595;
  color: #005595;
}
#buttonStyle:hover {
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
