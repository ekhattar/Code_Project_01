<template>
	<div>
		<h1>Welcome</h1>
		<a href="/quiz" class="buttonlink"> 
			 Play
		</a>
		<a href="/leaderboard" class="buttonlink"> 
			 Leaderboard
		</a>
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

</style>