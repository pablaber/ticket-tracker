<template>
    <div id="graph">
    </div>
</template>

<script>
import gb from '../modules/graphBuilder.js';
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