const preprocess = require('svelte-preprocess');
const vercel = require('@sveltejs/adapter-vercel');
const static = require('@sveltejs/adapter-static');

module.exports = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],

	kit: {
		adapter: static(),
		target: '#svelte'
	}
};
