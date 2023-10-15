import Vue from 'vue';
import App from './App.vue';
import router from './router';

import TesteComponent from './components/TesteComponent.vue';

Vue.component('TesteComponent', TesteComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
