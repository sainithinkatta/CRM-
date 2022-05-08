import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import SupervisorLogin from '@/components/SupervisorLogin'
import SupportEngineerLogin from '@/components/SupportEngineerLogin'
import SupervisorPage from '@/components/SupervisorPage'
import Tickets from '@/components/Tickets'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/supervisorLogin',
      name: 'SupervisorLogin',
      component: SupervisorLogin
    },
    {
      path: '/supportEngineerLogin',
      name: 'SupportEngineerLogin',
      component: SupportEngineerLogin
    },
    {
      path: '/supervisorPage',
      name: 'SupervisorPage',
      component: SupervisorPage
    },
    {
      path: '/tickets',
      name: 'Tickets',
      component: Tickets
    }
  ]
})
