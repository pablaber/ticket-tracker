<template>
    <div id="graph">
    </div>
</template>

<script>
import gb from '../modules/graphBuilder.js';
import config from '../config.js';
var sizeObj = {
  	width: 600,
  	height: 150,
  	radius: 5,
	lineWidth: 3,
  	margins: {
    	left: 30,
    	right: 30,
    	top: 50,
    	bottom: 20
  	}
};

export default {
    name: 'Graph',
    mounted: function() {
        gb.initGraph("#graph", sizeObj);
        this.$http.get('http://localhost:8080/api/current_prices_for_team?team=NYR').then(response => {

            // get body data
            console.log(response.body);

        });
    },
    data: function() {
        return {};
    }
}
</script>

<style>
svg {
    border: 1px solid black;
}
</style>