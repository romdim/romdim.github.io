const sveltePreprocess = require('svelte-preprocess')
const typescript = require('./tsconfig.json')

module.exports = {
	dev: process.env.NODE_ENV !== 'development',
	hydratable: true,
	emitCss: true,
	preprocess: sveltePreprocess({
		defaults: {
			script: 'typescript',
			style: 'scss'
		},
		scss: { includePaths: ['src'] },
		postcss: {
			plugins: [require('autoprefixer')],
		},
		typescript
	})
}
