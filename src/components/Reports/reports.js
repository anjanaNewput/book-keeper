export default {
  name: 'Reports',
  data () {
    return {
      isShow: true,
      title: ''
    }
  },
  mounted () {
    console.log(this.$router);
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    },
    changeRoute (routeName) {
      this.$router.push({name: routeName})
      this.title = routeName
      this.toggleShow()
    }
  }
}
