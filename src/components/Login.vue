<template>
  <div class="backdrop">
      <div class ="modalBox">
          <h1>Modal</h1>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.modalBox{
    width: 400px;
    padding: 100px;
    margin: 300px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
</style>