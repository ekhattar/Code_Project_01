<template>
	<div>
		<h1>Leaderboard</h1>		
		<ul>
			<p v-for="leader in leaders"><span>{{ leader.id }}#</span><span>{{ leader.name }}</span><span>{{ leader.points }}</span></p>
		</ul> 
    <router-link to="/welcome"> 
			 Back
		</router-link>		
	</div>
</template>

<script>
import Http from "../http-rest.js";
import { Event } from "../event.js";
export default {
    data() {
        return {
            name: "Leaderboard",
            leaders: ["Eins", "Zwei"]
        };
    },
    methods: {
        changeTemp(destTemp) {
            console.log("clicked");
            Event.$emit("change", destTemp);
            console.log(destTemp);
        }
    },
    created() {
        Http.get(`/leaderboard?name=TimonTest`)
            .then(data => {
            	//console.log('Data')
                //console.log(data.data);
                this.leaders = data.data.leaders;
                //console.log('Leaders')
                //console.log(this.leaders);
                for (var i = 0; i < 10; i++) {
                    this.leaders[i].id = i + 1;
                }
                //this.leaders = response.data.leaders;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};
</script>

<style>

</style>