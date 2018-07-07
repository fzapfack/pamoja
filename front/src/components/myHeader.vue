<template>
  <header class="myHeader">
    <nav class="navbar is-light is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="../assets/logo_horizontal.png" alt="Name of the project">
          </a>
          <div class="navbar-burger burger" data-target="menu" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="menu" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
          <div class="navbar-start">
          </div>
          <div class="navbar-end">
            <router-link class="navbar-item r-item" to="/">Home</router-link>
            <router-link class="navbar-item r-item" to="/">Our Projects</router-link>
            <router-link class="navbar-item r-item" to="/">Our Team</router-link>
            <router-link class="navbar-item r-item"  to="/faq">Faq</router-link>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <router-link class="navbar-item r-item button is-primary is-outlined"  to="/login">
                    <span class="icon">
                      <font-awesome-icon icon="user" />
                    </span>
                    <span>Login</span>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'myHeader',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass" scoped>
.myHeader
  background-color: red
</style>
