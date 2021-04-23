import {wrap} from 'svelte-spa-router/wrap';

import Home from './pages/Home/App.svelte'
import About from './pages/About/About.svelte'

export const routes = {
  '/': Home,
  '/about': About,
  '*': Home,
}