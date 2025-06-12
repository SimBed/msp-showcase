const path = require("node:path")
const build = require("./config/esbuild.defaults.js")

// You can customize this as you wish, perhaps to add new esbuild plugins.
//
// ```
// const path = require("path")
// const esbuildCopy = require('esbuild-plugin-copy').default
// const esbuildOptions = {
//   plugins: [
//     esbuildCopy({
//       assets: {
//         from: [path.resolve(__dirname, 'node_modules/somepackage/files/*')],
//         to: [path.resolve(__dirname, 'output/_bridgetown/somepackage/files')],
//       },
//       verbose: false
//     }),
//   ]
// }
// ```
//
// You can also support custom base_path deployments via changing `publicPath`.
//
// ```
// const esbuildOptions = {
//   publicPath: "/my_subfolder/_bridgetown/static",
//   ...
// }
// ```

/**
 * @typedef { import("esbuild").BuildOptions } BuildOptions
 * @type {BuildOptions}
 */
const esbuildOptions = {
  // esdev fails with the KonnorRogers define: { "process.env.BASE_PATH": `"${process.env.BASE_PATH}"` } approach
  publicPath: "/msp-showcase/_bridgetown/static",
  plugins: [
    // add new plugins here...
  ],
  globOptions: {
    excludeFilter: /\.(dsd|lit)\.css$/
  }
}

build(esbuildOptions)
