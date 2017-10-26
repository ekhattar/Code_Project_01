<template>
	<div>
		<h1>Welcome</h1>
		<router-link to="/quiz" class="buttonlink"> 
			 Play
		</router-link>
		<router-link to="/leaderboard" class="buttonlink"> 
			 Leaderboard
		</router-link>
	</div>
</template>

<script>
import { Event } from "../event.js";
export default {
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

<style scoped lang="sass">
    .buttonlink
        font-size: 40px

</style>