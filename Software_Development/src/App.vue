<template>
  <div class="container-app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Event } from "./event.js";
export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            changeTemp: "",
            display: "Countdown"
        };
    }
};
</script>

<style scoped lang="sass">
    .container-app
        background: #323035
        width: 100vw
        height: 100vh

</style>
