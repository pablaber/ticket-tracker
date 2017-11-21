<template>
    <div id="options">
        <select v-model="team" v-on:change="selectTeam">
            <option disabled value="">Please select a team</option>
            <option value="NYR">New York Rangers</option>
        </select>
        <span>Selected: {{ team }}</span>
    </div>
</template>

<script>
export default {
    name: 'Options',
    methods: {
        selectTeam: function() {
            this.$emit('tchange', this.team);
        }
    },
    data: function() {
        return {
            team: ''
        }
    }
}
</script>

<style>
</style>