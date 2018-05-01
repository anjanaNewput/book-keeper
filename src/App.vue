<template>
<div id="app">
  <nav class="navbar navbar-default" id="header" role="navigation">
    <div class="container header-cont">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/"><img class="logo" src="./assets/img/logo.png"></router-link>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <router-link to="/" class="hidden-xs" tag="li">
            <a> Home </a>
          </router-link>
          <router-link to="/" class="visible-xs" tag="li" data-toggle="collapse" data-target=".navbar-collapse">
            <a> Home</a>
          </router-link>
          <li class="dropdown" v-if="userEmail">
            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{userEmail}}<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <router-link to="/setup-company" tag="li" class="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                <a>Setup Company</a>
              </router-link>
              <router-link to="/setup-company" tag="li" class="hidden-xs">
                <a>Setup Company</a>
              </router-link>
              <router-link to="/my-creditors" tag="li" class="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                <a>My Creditors</a>
              </router-link>
              <router-link to="/my-creditors" tag="li" class="hidden-xs">
                <a>My Creditors</a>
              </router-link>
              <router-link to="/my-debitors" tag="li" class="visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                <a>My Debitors</a>
              </router-link>
              <router-link to="/my-debitors" tag="li" class="hidden-xs">
                <a>My Debitors</a>
              </router-link>
              <li v-if="userEmail" class="user-profile">
                <a @click="logout" class="hidden-xs">Logout
                  <span class="glyphicon glyphicon-off"></span>
                </a>
                <a @click="logout" data-toggle="collapse" data-target=".navbar-collapse" class="visible-xs">Logout
                  <span class="glyphicon glyphicon-off"></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view class="page"/>
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
