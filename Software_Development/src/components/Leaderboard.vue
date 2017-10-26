<template>
	<div>
		<h1>Leaderboard</h1>
		<router-link to="/welcome"> 
			 Back
		</router-link>		
	</div>
</template>

<script>
import { Event } from "../event.js";
export default {
    data() {
        return {
            name: "Leaderboard"
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

<style>

</style>