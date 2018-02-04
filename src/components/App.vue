<template lang="pug">
div#app
	md-app(md-waterfall)
		md-app-toolbar.md-primary
			div.md-toolbar-row
				md-button.md-icon-button(@click="menuVisible = !menuVisible")
					md-icon menu
				span.md-title My Title
		md-app-drawer(:md-active.sync="menuVisible")
			md-toolbar.md-transparent(md-elevation="0")
				span Navigation
			md-list
				md-list-item(to="/" @click="menuVisible = !menuVisible")
					md-icon move_to_inbox
					span.md-list-item-text Screen A
				md-list-item(to="/alternative" @click="menuVisible = !menuVisible")
					md-icon move_to_inbox
					span.md-list-item-text Screen B
		md-app-content
			router-view
			md-button.md-primary.md-raised Test2
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'app',
	data: () => ({
		menuVisible: false
	})
});
</script>

<style lang="stylus">
</style>
