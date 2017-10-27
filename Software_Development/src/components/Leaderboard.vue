<template>
	<div class="container-leaderboard">
		<ul>
			<li class="leaderboard-item" v-for="(leader, index) in leaders">
                <span class="position">{{ index + 1 }}</span> 
                <span class="name">{{ leader.name }}</span>
                <span class="score">{{ leader.points }}</span>
            </li>
		</ul>
        <router-link to="/welcome">
            <uiButton class="btn-back" v-bind:onClick="onNextQuestion" title="Main Menu"></uiButton>  
        </router-link>
	</div>
</template>

<style lang="sass">

    .position
        height: 40px
        width: 40px
        display: inline-block
        border-radius: 50%
        border: 2px solid #EDEDEE
        position: absolute
        left: 12px
        top: 12px
        display: flex
        justify-content: center
        align-items: center
        font: 
            family: "Roboto Slab"
            size: 18px
            weight: bold
    
    .name
        position: absolute
        left: 64px
        top: 22px
        font: 
            family: "Source Sans Pro"
            size: 20px
            weight: 600
        max-width: 196px
        overflow: hidden
        
    .score
        position: absolute
        right: 12px
        top: 12px
        height: 40px
        //padding-left: 24px
        //padding-right: 24px
        background: linear-gradient(#E5AA47, #D4962E)
        border-radius: 6px
        display: flex
        align-items: center
        justify-content: center
        width: 90px
        font: 
            family: "Roboto Slab"
            size: 18px
            weight: bold
        letter-spacing: 1px
        box-shadow: 0 0 6px rgba(black, 0.3)

    .leaderboard-item
        position: relative
        background: #212023
        height: 64px
        border-bottom: 2px solid #323035
        color: #EDEDEE

    .container-leaderboard
        height: calc(100vh - 58px - 24px - 24px)
        //background: pink
        overflow: hidden
        overflow-y: scroll

    .btn-back
        position: absolute
        bottom: 24px
        left: 50%
        transform: translateX(-50%)

</style>

<script>
import Http from "../http-rest.js";
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";

export default {
    data() {
        return {
            name: "Leaderboard",
            leaders: []
        };
    },
    components: { uiButton },
    methods: {
        changeTemp(destTemp) {
            console.log("clicked");
            Event.$emit("change", destTemp);
            console.log(destTemp);
        }
    },
    created() {
        Http.get(`/leaderboard`)
            .then(data => {
                this.leaders = data.data.leaders;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};
</script>