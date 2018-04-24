<template>
  <div id="app">
    <nav class="navbar navbar-default" id="header">
      <div class="container-fluid header-cont">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/"><img class="logo" src="./assets/img/logo.png"></router-link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><router-link to="/" data-toggle="collapse" data-target=".navbar-collapse">Home</router-link></li>
            <li v-if="userEmail" class="user-profile">
              <a @click="logout" data-toggle="collapse" data-target=".navbar-collapse">{{userEmail}}
                <span class="glyphicon glyphicon-off"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <div class="footer">Copyright &copy; 2018 by Newput Inc. All rights reserved. BookKeeper and BookKeeper logo are trademarks of Newput Inc. Patent pending
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    userEmail: function () {
      return this.$store.state.email
    },
    userLoggedIn: function () {
      return this.$store.state.isUserLogged
    }
  },
  mounted: function () {
    this.$store.commit('checkUser', this.$localStorage.get('userLoggedIn') != null ? this.$localStorage.get('userLoggedIn') : false)
    this.$store.commit('setEmail', this.$localStorage.get('email') != null ? this.$localStorage.get('email') : '')
  },
  methods: {
    logout: function () {
      this.$localStorage.remove('userLoggedIn')
      this.$localStorage.remove('email')
      this.$store.commit('setEmail', '')
      this.$store.commit('checkUser', false)
      this.$router.push('/')
    }
  }
}
</script>
<style lang='scss'>
@import './assets/scss/app.scss'
</style>
