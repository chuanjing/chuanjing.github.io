export default {
  '/': {
    name: 'main',
    component: require('views/nifty/main.vue'),
    auth: true
  },
  '/main': {
    name: 'main',
    component: require('views/nifty/main.vue'),
    auth: true
  },
  '/qqjtest': {
    name: 'qqjtest',
    //component: require('components/main-test/main.vue'),
    auth: true
  },
  '/login': {
    name: 'login',
    component: require('views/nifty/nifty-login.vue'),
    auth: false
  },
  '/forget-password': {
    name: 'forget-password',
    component: require('views/nifty/nifty-password-reminder.vue'),
    auth: false
  }
}
