import './app.css'
import App from './App.svelte'
import 'svelte-material-ui/bare.css';
import './assets/styles/normalize.css';

const app = new App({
  target: document.getElementById('app')
})

export default app
