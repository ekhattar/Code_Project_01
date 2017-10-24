<template>
	<div>
		<h1>Welcome</h1>
		<router-link to="/quiz"> 
			 <uiButton main={true} title="Play"></uiButton>
		</router-link>
		<router-link to="/leaderboard"> 
			 <uiButton title="Leaderboard"></uiButton>
		</router-link>
	</div>
</template>

<script>
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";

export default {
  data() {
    return {
      name: "welcome"
    };
  },
  components: {
    uiButton
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
	a
		text-decoration: none 
</style>