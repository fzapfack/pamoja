/**********************
 * Firebase auth init
 ***********************/

import firebase from 'firebase'
import firebaseui from 'firebaseui'
import conf from '../secrets.json'

// Load conf
// let fs = require("fs")
// let conf_content = fs.readFileSync("/secrets.json")
// let conf = JSON.parse(conf_content)

const auth = {
  context: null,
  uiConfig: null,
  ui: null,
  
  // Init Firebase and firebaseui
  init(context) {
    this.context = context;

    firebase.initializeApp(conf['firebase'])
    this.uiConfig = {
      signInSuccessUrl: 'user',
      signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            scopes: [
              'https://www.googleapis.com/auth/plus.login'
            ],
            customParameters: {
              // Forces account selection even when one account
              // is available.
              prompt: 'select_account'
            }
          },
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
              'public_profile',
              'email',
              'user_likes',
              'user_friends'
            ],
            customParameters: {
              // Forces password re-entry.
              auth_type: 'reauthenticate'
            }
          },
          firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
          // firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    firebase.auth().onAuthStateChanged((user) => {
      this.context.$store.dispatch('user/setCurrentUser')

      let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
      let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)

      if(requireAuth && !user) this.context.$router.push('login')
      else if (guestOnly && user) this.context.$router.push('user')
    });
  },

  authForm(container) {
    this.ui.start(container, this.uiConfig);
  },
  user() {
    return this.context ? firebase.auth().currentUser : null;
  },
  logout() {
    firebase.auth().signOut();
  }
}

export default auth;