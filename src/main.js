import Vue from 'vue';
import vuetify from '@/vuetify';

import router from '@/router';
import App from '@/App.vue';

import '@babel/polyfill';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
