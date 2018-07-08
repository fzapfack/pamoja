<template>
  <section class="section is-primary is-bold is-hero home" id="hero">
    <div class="hero-body to-center">
      <div class="container has-text-centered" style="color:white">
        <img src="../assets/logo_vertical.png" alt="pamoja crowdinvesting platform">
        <h2 class="subtitle">
          Investing platform by Africans for Africans
        </h2>
        <br />
        <a class="button is-primary is-outlined is-large" href="/projects">
          Explore projects
        </a>
      </div>
    </div>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
    </vue-particles>
  </section>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
#hero
  background-color: #2c2e43

.to-center
  position: absolute
  top: 50%
  left: 50%
  margin: 0 auto
  transform: translate(-50%,-50%)
  .title
    color: white
    font-size: 3rem
  .subtitle
    color: white
    font-size: 2rem
</style>
