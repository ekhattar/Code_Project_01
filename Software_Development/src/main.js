import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Login from './login.vue';
import Quiz from './quiz.vue';
import Welcome from './components/welcome.vue';	
import Leaderboard from './components/leaderboard.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/quiz', component: Quiz},
	{ path: '/welcome', component: Welcome},
	{ path: '/leaderboard', component: Leaderboard},
	{ path: '/', component: Login},
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  	el: '#app',
  	router,
  	render: h => h(App)
})
