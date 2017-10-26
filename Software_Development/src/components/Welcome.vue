<template>
	<div>
		<h1>Welcome</h1>
		<router-link to="/quiz" class="buttonlink"> 
			<uiButton title="Play"></uiButton> 
		</router-link>
		<router-link to="/leaderboard" class="buttonlink">
            <uiButton title="Leaderboard"></uiButton> 
		</router-link>
	</div>
</template>

<style scoped lang="sass">

</style>

<script>
import Http from "../http-rest.js";
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";
export default {
    components: {
        uiButton
    },
    data() {
        return {
            name: "welcome"
        };
    },
    methods: {
        changeTemp(destTemp) {
            console.log("clicked");
            Event.$emit("change", destTemp);
            console.log(destTemp);
        }
    }
};
</script>
