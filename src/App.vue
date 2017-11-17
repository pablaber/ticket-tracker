<template>
    <div id="app">
        <h1>Ticket Tracker</h1>
        <graph></graph>
    </div>
</template>

<script>
import Graph from './components/Graph.vue'
export default {
    name: 'app',
    components: {
        Graph
    },
    data: function() {
        return {};
    }
}
</script>

<style>

</style>
