var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var path = require('path')
var museUiThemePath = path.join(
    __dirname,
    'node_modules',
    'muse-ui',
    'src/styles/themes/variables/default.less'
)
module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction ?
            config.build.productionSourceMap : config.dev.cssSourceMap,
        extract: isProduction,
        less: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    globalVars: {
                        museUiTheme: `'${museUiThemePath}'`,
                    }
                }
            }
        ]
    }),
    postcss: [
        require('autoprefixer')({
            browsers: ['iOS >= 7', 'Android >= 4.1']
        })
    ]
}