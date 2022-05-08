<template>
  <div align="center">
    <div v-for="item in tickets" :key="item.id">
      <div class="flex">
        <span>Title: {{ item.title }}</span> &nbsp; &nbsp;
        <span
          ><button class="button" @click="showModal = true">
            Available SE {{item.id}}
          </button></span
        >
      </div>
      <!-- <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal"></div>
      </transition> -->
      <transition name="slide" appear>
        <div class="mod" v-if="showModal">
          <div v-for="item in tickets" :key="item.id">Available SE {{item.id}}</div>
          <button class="buttonpop" @click="showModal = false">Close</button>
        </div> </transition
      ><br />
    </div>
  </div>
</template>
<script src="./js/tickets.js"></script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
}
.popup {
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  margin-top: 3%;
  /* overflow-y: hidden; */
}
button {
  font-size: 20px;
  border-radius: 10px;
  background-color: rgb(113, 243, 61);
}
/* .modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: whitesmoke
} */
.mod {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 75%;
  height: 50%;
  background-color: rgb(230, 39, 204);
  border-radius: 20px;
  /* padding: 10px; */
  overflow-y: scroll;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
.buttonpop {
  margin-left: 93%;
}
input {
  width: 80%;
}
</style>
