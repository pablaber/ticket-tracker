<template>
    <div id="app">
        <h1>Ticket Tracker</h1>
        <options v-on:tchange="teamChange"></options>
        <graph :team="selectedTeam"></graph>
    </div>
</template>

<script>
import Graph from './components/Graph.vue'
import Options from './components/Options.vue'

export default {
    name: 'app',
    components: {
        Graph,
        Options
    },
    methods: {
        teamChange: function(args){
            this.selectedTeam = args;
        }
    },
    data: function() {
        return {
            selectedTeam: ""
        };
    }
}
</script>

<style>

</style>
