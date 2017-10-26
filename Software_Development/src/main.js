import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import Login from "./Login.vue";
import Quiz from "./Quiz.vue";
import Welcome from "./components/Welcome.vue";
import Leaderboard from "./components/Leaderboard.vue";

Window.Event = new Vue();
Vue.use(Router);

// changed root to welcome too, no login for now
const routes = [
    { path: "/quiz", component: Quiz },
    { path: "/welcome", component: Welcome },
    { path: "/leaderboard", component: Leaderboard },
    { path: "/", component: Welcome }
];

const router = new Router({
    routes,
    mode: "history"
});

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
