<template>
<body>
  <div class="main">
    <div class="form1">
      <div class="card1">
        <div class="card-body1">
          <form>
            <div>
              <h2 class="h3 mb-3 fw-normal text-center" style="color:blue;">C-R-M Login</h2>
            </div>
            <h5 align="center">
              <router-link class="btn btn-outline-primary" to="/supervisorLogin"
                >Supervisor</router-link
              ><br />
            </h5>
            <h4 align="center">Or</h4>
            <h5 align="center">
              <router-link
                class="btn btn-outline-primary"
                to="/supportEngineerLogin"
                >Support Engineer</router-link
              >
            </h5>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
</template>
<script>
export default {
  name: 'APP',
  components: {

  }
}
</script>

<style scoped>
.card1 {
  border-radius: 50%;
  box-shadow: 2px 2px 10px 7px;
}
.card-body1 {
  padding-top: 60px;
  padding-left: 10px;
  height: 300px;
  width: 300px;
}
.form1 {
  width: 50%;
  max-width: 300px;
  margin: auto;
}
h2 {
  padding-bottom: 15px;
}
.main {
  padding-top: 200px;
  padding-bottom: 321px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(50, 50, 230);
}
body {
  background-image:linear-gradient(rgb(240, 129, 26), rgb(253, 253, 244), rgb(15, 236, 15));
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
