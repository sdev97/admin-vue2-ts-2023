const path = require('path')

export const pluginOptions = {
  'style-resources-loader': {
    preProcessor: 'scss',
    patterns: [
      resolve(__dirname, 'src/styles/_variables.scss'),
      resolve(__dirname, 'src/styles/_mixins.scss')
    ]
  }
}
