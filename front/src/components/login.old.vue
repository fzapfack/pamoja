<template>
  <section class="hero is-white is-fullheight login">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-8 is-offset-2">
          <div class="box">
          <h3 class="title has-text-grey">
            Login
          </h3>
          <p class="subtitle has-text-grey">
            Please login to proceed
          </p>
          <div class="columns">
            <div class="column">
              <a class="button button--social-login button--facebook" v-on:click="login_fb">
                <font-awesome-icon :icon="['fab', 'facebook']" class="icon"/>
                <span>Login With Facebook</span>
              </a>
            </div>
            <div class="column">
              <a class="button button--social-login button--linkedin" href="#">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/>
                <span>Login With Linkedin</span>
              </a>
            </div>
            <div class="column">
              <a class="button button--social-login button--googleplus" href="#">
                <font-awesome-icon :icon="['fab', 'google']" class="icon"/>
                <span>Login With Google</span>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    login_fb: function() {
      this.$router.replace('/faq')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:400,700);

$base-spacing-unit: 24px;
$half-spacing-unit: 12px;
$border-radius-global: 5px;
$button-width: auto;
$button-height: 50px;
$button-text-color: white;

$social-list: (
    facebook #4b70ab,
    linkedin #0087be,
    google #3F85F4,
    twitter #3B94D9,
    yahoo #500095,
    openid #F78C40,
    googleplus #DD4B39,
    dropbox #007DE1,
    github #333,
    bitbucket #205081,
    soundcloud #FF5500,
    spotify #2EBD59,
    microsoft #00A4EF,
    flickr #FF0084
);

body {
  text-align: center;
  padding: $base-spacing-unit $base-spacing-unit ($base-spacing-unit * 4);
  font-family: 'Roboto Slab', serif;
}

h1, h2 {
  margin-bottom: $base-spacing-unit * 2;
  font-weight: normal;
}

%button,
.button {
  width: $button-width;
  display: inline-block;
	padding: 0 ($base-spacing-unit - ($half-spacing-unit / 2)) 0 ($half-spacing-unit / 2);
	border: 0 none;
	border-radius: $border-radius-global;
  text-decoration: none;
	transition: all 250ms linear;

	&:hover {
		text-decoration: none;
	}

}

.button--social-login {
	margin-bottom: $half-spacing-unit;
	margin-right: $half-spacing-unit;
  color: $button-text-color;
	height: $button-height;
	line-height: $button-height - 4;
	position: relative;
  text-align: left;

	.icon {
		margin-right: $half-spacing-unit;
		font-size: $base-spacing-unit;
		line-height: $base-spacing-unit;
		width: ($base-spacing-unit * 2) - ($half-spacing-unit / 2);
		height: $base-spacing-unit;
		text-align: center;
		display: inline-block;
		position: relative;
		top: 4px;

		&:before {
			display: inline-block;
			width: ($base-spacing-unit * 2) - ($half-spacing-unit / 2) - 2;
		}

		&:after {
			content:"";
		}

	}

}

@each $name, $color in $social-list {

    .button--#{$name} {
		background-color: $color;
    border: 1px solid darken($color, 10%);
		
		.icon {
			border-right: 1px solid darken($color, 10%);

			&:after {
				border-right: 1px solid lighten($color, 10%);
			}
		}

		&:hover {
			background-color: darken($color, 5%);
		}

	}

}
</style>
