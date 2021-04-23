import App from './App.svelte';
import AppVm from './store/App.store';

const app = new App({
	target: document.body,
	props: {
		vm: new AppVm(),
	}
});

export default app;
