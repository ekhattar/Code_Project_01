<template>
	<div>
        <p style="text-align: center">Time ran out</p>
        <p style="text-align: center">You lost 1 Life</p>
        <uiButton v-bind:onClick="onNextQuestion" title="Next Question"></uiButton>  
    </div>
</template>

<style scoped lang="sass">

</style>

<script>
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";
export default {
    name: "timeover",
    components: { uiButton },
    data() {
        return {
            name: "timeover"
        };
    },
    props: ["onNextQuestion", "onEndGame"]
};
</script>

