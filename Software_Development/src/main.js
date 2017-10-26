import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Login from './Login.vue';
import Quiz from './Quiz.vue';
import Welcome from './components/Welcome.vue';
import Leaderboard from './components/Leaderboard.vue';
import Http from './http-rest.js';

Window.Event = new Vue();
Vue.use(Router);

const routes = [
	{ path: '/quiz', component: Quiz},
	{ path: '/welcome', component: Welcome},
	{ path: '/leaderboard', component: Leaderboard},
	{ path: '/', component: Login},
];

const router = new Router({
	routes,
	mode: 'history'
});

new Vue({
  	el: '#app',
  	router,
  	render: h => h(App)
})
