<template>
  <div id="app">
    <myHeader/>
    <router-view/>
    <myFooter/>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'

export default {
  name: 'app',
  components: {
    myHeader,
    myFooter
  },
  data: function() {
    return {
      auth: {
        user: null,
        hasErrors: false,
        message: '',
        userName: '',
      },
      isActive: false
    }
  },
  computed: {

    /**
     * Determines if the user is authenticated
     *
     * @return boolean
     */
    // isAuthenticated: function () {
    //   // This function changes the auth.user state when 
    //   // the auth status of user changes.
    //   firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //       this.auth.user = user;
    //     } else {
    //       this.auth.user = null;
    //     }
    //   }.bind(this));

    //   return (this.auth.user !== null);
    // }

  },
  methods: {
    
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

myHeader
  background-color: red

.nav
  background-color: red

</style>
