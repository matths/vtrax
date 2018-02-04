<template lang="pug">
div#app
	v-app
		v-navigation-drawer(app fixed clipped)
			v-list(dense)
				v-list-tile(v-for="item in items" :key="item.title" :to="item.link")
					v-list-tile-action
						v-icon {{ item.icon }}
					v-list-tile-content
						v-list-tile-title {{ item.title }}
		v-toolbar(app dark fixed clipped-left color="primary")
			v-toolbar-side-icon
			v-toolbar-title(class="white--text") My App
		v-content
			v-container(fluid)
				v-fade-transition(mode="out-in")
					router-view
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'app',
	data: function() {
		return {
			items: [
				{ link: '/', title: 'Screen A', icon: 'dashboard' },
				{ link: '/alternative', title: 'Screen B', icon: 'dashboard' }
			]
		};
	}
});
</script>

<style lang="stylus">

@import '../../node_modules/vuetify/src/stylus/main.styl'

</style>
