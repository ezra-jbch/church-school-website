<template>
  <div class="home">
    <h1>Church School Website</h1>
    <UpcomingLessons />
  </div>
</template>

<script>
import UpcomingLessons from '../components/UpcomingLessons.vue'

export default {
  name: 'Home',
  
  components: { UpcomingLessons }
}

</script>
