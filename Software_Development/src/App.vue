<template>
    <div class="container-content">
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
    .container-content
        background: #323035
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0
</style>
