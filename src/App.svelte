<script lang="ts">
	import { MaterialApp } from 'svelte-materialify';
	import Button from 'svelte-materialify/src/components/Button/Button.svelte';

	export let name: string;
</script>

<MaterialApp>
	<main>
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		<Button class="red white-text">Red</Button>
	</main>
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
