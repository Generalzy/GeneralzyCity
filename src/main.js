/* jshint esversion: 6 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
//导入axios
import axios from 'axios';
//将axios放入到了vue对象中
Vue.prototype.$axios = axios;

// 配置全局样式
// @ 代指src
import '@/assets/css/global.css';

// 配置全局自定义设置
import settings from '@/assets/js/settings';
Vue.prototype.$settings = settings;
// 在所有需要与后台交互的组件中：this.$settings.base_url + '再拼接具体后台路由'

import cookies from 'vue-cookies';
Vue.prototype.$cookies = cookies;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// vue-video播放器
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
