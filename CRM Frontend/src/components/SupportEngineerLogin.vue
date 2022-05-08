<template>
<body>
  <div>
    <div class="parent">
      <div class="form-signin">
        <div class="child1">
          <div class="child2">
            <div>
              <form>
                <h2 class="h3 mb-3 fw-normal text-center">
                  Support Engineer Sign In
                </h2>
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
                <button
                  class="w-30 btn btn-lg btn-primary"
                  @click="SupportEngineerDetails"
                >
                  Sign In</button
                ><br />
                <div align="center" style="margin-top: 10px">
                  <p>
                    Don't have an account?
                    <router-link to="/signup">Sign Up Here </router-link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data () {
    return {}
  },
  components: {},
  methods: {
    async SupervisorDetails () {
      console.log(this.email, this.password)
      const body = {
        email: this.email,
        password: this.password
      }
      await axios
        .post('http://localhost:1009/supportEnginner/signin ', body)
        .then((res) => {
          console.log('yes i got u')
          console.log(res.data)
          localStorage.setItem('email', this.email)
          swal({
            text: 'Login successful',
            icon: 'success'
          })
          this.$emit('fetchData')
          this.$router.push({ name: '/' })
        })
    }
  }
}
</script>
<style scoped>
.parent {
  padding-top: 200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(50, 50, 230);
  padding-bottom: 191px;
}
.form-signin {
  width: 100%;
  max-width: 450px;
  margin: auto;
}
.child1 {
  border-radius: 50%;
  box-shadow: 2px 2px 10px 7px;
}
label {
  font-weight: 600;
  font-size: 20px;
}
.btn {
  margin-top: 20px;
}
button {
  margin-left: 35%;
}
.child2 {
  padding-top: 65px;
  padding-left: 35px;
  height: 430px;
  width: 430px;
}
body {
  background-image:linear-gradient(rgb(240, 129, 26), rgb(253, 253, 244), rgb(15, 236, 15));
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
