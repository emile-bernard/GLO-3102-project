// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Gravatar from 'vue-gravatar';
import App from './App';
import router from './router';

Vue.component('v-gravatar', Gravatar);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app');

