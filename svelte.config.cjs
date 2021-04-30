const preprocess = require('svelte-preprocess');
const vercel = require('@sveltejs/adapter-vercel');


/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
	],

	kit: {
		adapter: vercel(),
		target: '#svelte'
	}
};
