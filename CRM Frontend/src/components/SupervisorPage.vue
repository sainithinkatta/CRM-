<template>
<div>
  <div class="flex">
    <button @click="buttonClicked()">
        Tickets
    </button>
  </div>
</div>
</template>
<script src="./js/supervisorpage.js"></script>
<style scoped>
button{
    font-size: 20px;
    border-radius: 10px;
    background-color: rgb(240, 243, 61);
    }
.flex {
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  margin-top: 3%;
}
</style>
