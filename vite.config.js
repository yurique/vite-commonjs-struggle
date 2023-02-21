export default ({mode}) => {
  /** @type {import('vite').UserConfig} */
  return {
    server: {port: 6090},
    build: {
      commonjsOptions: {
        include: [`main.js`, /node-modules/],
        // transformMixedEsModules: false,
        // transformMixedEsModules: true,
        // strictRequires: 'debug',
        strictRequires: true,
      }
    },
    optimizeDeps: {
      disabled: false,
      force: true,
      include: [
        `main.js`,
        'highlight.js',
      ]
    },
    plugins: []
  }
}
