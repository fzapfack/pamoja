<template>
  <section class="hero is-white is-fullheight userProfile">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1>Welcome user</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'userProfile',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
