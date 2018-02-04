<template lang="pug">
div#app
	h2 My App
	ul
		li
			router-link(to="/") Screen A
		li
			router-link(to="alternative") Screen B
	router-view
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'app'
});
</script>

<style lang="stylus">
body
	margin 0
	padding 0
	background-color #ccc

h2
	margin-top 0
	padding 5px 12px
	background-color #fff
</style>
