<template>
<body>
  <div>
    <div class="parent">
      <main class="form-signup">
        <div class="card2">
          <div class="card-body2">
            <form>
              <h2 class="h3 mb-3 fw-normal text-center">Please Sign Up</h2>

              <div class="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Full name"
                />
              </div>

              <div class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  placeholder="Email address"
                  required
                  v-model="email"
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  required
                  v-model="password"
                />
              </div>
              <button class="w-30 btn btn-lg btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</body>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {

  }
}
</script>

<style scoped>
.form-signup {
  width: 100%;
  max-width: 450px;
  margin: auto;
}
label {
  font-size: 20px;
}
.btn {
  margin-top: 20px;
}
button {
  margin-left: 35%;
}
.parent {
  padding-top: 200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(50, 50, 230);
  padding-bottom: 221px;
}
.card2 {
  border-radius: 50%;
  box-shadow: 2px 2px 10px 7px;
}
.card-body2 {
  padding-top: 35px;
  padding-left: 45px;
  height: 400px;
  width: 400px;
}
body {
  background-image:linear-gradient(rgb(240, 129, 26), rgb(253, 253, 244), rgb(15, 236, 15));
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
