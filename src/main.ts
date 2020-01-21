import '@/plugins/css-has-pseudo';
import '@/plugins/element-ui';
import '@/plugins/bowser';
import '@/assets/styles/index.pcss';

import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
