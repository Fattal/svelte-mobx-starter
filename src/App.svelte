<script lang="ts">
	import { connect } from 'svelte-mobx';
	import Router from 'svelte-spa-router';
	import { MaterialApp } from 'svelte-materialify';
	import { routes } from './routes';

	export let vm;

	const { autorun } = connect();

	let currentTimeString: string;
	let elapsedSecondsString: string;

	$: autorun(() => {
		currentTimeString = vm.currentTimeString;
		elapsedSecondsString = vm.elapsedSecondsString;
	});
</script>

<MaterialApp>
	<main>
		<h1>The time is { currentTimeString }!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		<div>This page has been open for { elapsedSecondsString }</div>
	</main>
	<Router {routes}/>
</MaterialApp>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		& > h1 {
			color: #00bcd4;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 600;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
