import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showModal: false
    }
  },
  created () {
    this.$store.dispatch('getTickets')
  },
  computed: {
    // tickets () {
    //   return this.$store.getters.tickets
    // } or
    ...mapGetters(['tickets'])
  }
}
