<template>
	<div class="container-timer">
        <span class="timer">{{counter}}</span>
    </div>
</template>

<style scoped lang="sass">
    .container-timer
        border-radius: 50px
        background: #323035
        width: 96px
        height: 96px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        display: flex
        justify-content: center
        align-items: center
    .timer
        font:
            size: 42px
            family: "Roboto Slab"
        background: -webkit-linear-gradient(#FDD07C, #DE9B32)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
</style>

<script>
import { Event } from "../event.js";
export default {
    data() {
        return {
            name: "countdown",
            counter: 3
        };
    },
    methods: {
        changeTemp(destTemp) {
            Event.$emit("change", destTemp);
        }
    },
    created() {
        setInterval(() => {
            // console.log(this.counter);
            // console.log('seconds');
            this.counter -= 1;
            //console.log(this.counter);
            if (this.counter <= 0) {
                console.log("HAPPY NEW YEAR!!");
                this.changeTemp("Ingame");
            }
        }, 1000);
    }
};
</script>

