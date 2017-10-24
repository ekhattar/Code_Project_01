<template>
	<div>	
		<p style="text-align: center;">Wie ist die Hauptstadt?</p>
	    <br>
	    <br>
	    <ul>
	        <li class="ab"><button class="btn" @click="onClick('A')">A</button></li>
	        <li class="ab"><button class="btn" @click="onClick('B')">B</button></li>
	        <li class="ab"><button class="btn" @click="onClick('C')">C</button></li>
	        <li class="ab"><button class="btn" @click="onClick('D')">D</button></li>
	    </ul>
	</div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	name: 'question',
	 	data() {
	 		return {
	 			name: 'question',
	 		}
	 	},
		props: ['onClick']
	}	
</script>

<style>
	.normal {
        width: 300px;
        height: 20px;
    }
</style>