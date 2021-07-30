<template>
  <div class="lesson-table-padding">
    <div style="text-align: center">
      <h1>Contact Us</h1>
    </div>
    <form>
      <label>Name:</label>
      <input type="name" required v-model="name"/>
      
      <label>Email:</label>
      <input type="email" required v-model="email"/>

      <label>Message:</label>
      <input type="message" required/>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      email: '',
    }
  }
};
</script>

<style>
form {
  width: 50%;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: black;
}
</style>
