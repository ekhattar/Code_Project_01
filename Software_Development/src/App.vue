<template>
  <div>
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

<style>

</style>
