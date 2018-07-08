<template>
  <section class="section login">
    <div class="container has-text-centered">
      <div class="column is-8 is-offset-2">

        <div class="section-header">
          <h1 class="title is-1 is-spaced">Please login to proceed</h1>
          <h3 class="subtitle is-5">You can select your prefered login option</h3>
        </div>
        <div  id="firebaseui-auth-container">

        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import auth from '../auth'

  export default {
    name: 'login',
    mounted() {
      auth.authForm('#firebaseui-auth-container')
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";

</style>
