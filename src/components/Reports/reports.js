export default {
  name: 'Reports',
  data () {
    return {
      isShow: true,
      title: ''
    }
  },
  updated () {
    if(this.$route.name === 'Reports') {
      this.isShow = true
    }
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    },
    goBack () {
      this.toggleShow()
    },
    changeRoute (routeName, title) {
      this.$router.push({name: routeName, params:{'title': title}})
      this.title = routeName
      this.toggleShow()
    }
  }
}
