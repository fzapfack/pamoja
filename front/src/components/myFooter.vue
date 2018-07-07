<template>
  <footer class="footer footer-dark">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="footer-logo">
            <img src="assets/images/logos/fresh-white-alt.svg">
          </div>
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header">
              <h3>Product</h3>
            </div>
            <ul class="link-list">
              <li><a href="#">Discover features</a></li>
              <li><a href="#">Why choose our Product ?</a></li>
              <li><a href="#">Compare features</a></li>
              <li><a href="#">Our Roadmap</a></li>
              <li><a href="#">Request features</a></li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header">
              <h3>Docs</h3>
            </div>
            <ul class="link-list">
              <li><a href="#">Get Started</a></li>
              <li><a href="#">User guides</a></li>
              <li><a href="#">Admin guide</a></li>
              <li><a href="#">Developers</a></li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header">
              <h3>Blogroll</h3>
            </div>
            <ul class="link-list">
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Tech articles</a></li>
              <li><a href="#">Video Blog</a></li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header">
              <h3>Follow Us</h3>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon"><i class="fa fa-github"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon"><i class="fa fa-dribbble"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon"><i class="fa fa-facebook"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon"><i class="fa fa-twitter"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon"><i class="fa fa-bitbucket"></i></span>
                  </a>
                </div>
              </nav>
              <a href="https://bulma.io" target="_blank">
                <img src="assets/images/logos/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'myFooter',
}
</script>

<style lang="sass" scoped>
@import '../mq'

footer.footer-dark
  background: $blue-grey
  color: $white
  .columns
    margin-top: 35px

  .footer-logo
    img
      height: 40px

  .footer-column
    .footer-header h3
      font-weight: 500
      font-size: 1.2rem
      text-transform: uppercase
      letter-spacing: 1px
      margin-bottom: 20px

    ul.link-list
      line-height: 40px
      font-size: 1.1rem
      a
        color: $light-blue-grey
        font-weight: 400
        transition: all 0.5s
        &:hover 
          color: $smoke-white
        
    .level-item .icon 
      color: $secondary
      transition: all 0.5s
      &:hover 
        color: $smoke-white

</style>
