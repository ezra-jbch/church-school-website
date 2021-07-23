<template>
  <div class="backdrop">
    <div class="modalBox">
      <div class="item-center">Login</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
        id="item-right"
        @click = "notVisible"
      >
        <path
          d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        notVisible(){
            this.$emit("notLogin");
        }
    }
};
</script>

<style scoped>
#item-right {
  flex: 0 1 auto;
  margin-top: 3%;
  margin-right: 3%;
  margin-left: auto;
}
#item-right:hover{
    cursor: pointer;
}
.item-center {
  flex: 0 1 auto;
  font-size: 200%;
  position: absolute; /* new */
  left: 50%;
  transform: translateX(-50%);
}
.modalBox {
  width: 400px;
  height: 400px;
  margin: 300px auto;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start; /* adjustment */
  position: relative;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>