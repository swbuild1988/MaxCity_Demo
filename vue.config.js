const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    // chainWebpack: config => {
	// 	const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
	// 	types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
	// },

    baseUrl: BASE_URL,

    // 打包生成的生产环境构建文件的目录
    outputDir: 'dist',

    // 放置生成的静态资源路径，默认在outputDir
    assetsDir: '',

    // 指定生成的 index.html 输入路径，默认outputDir
    indexPath: 'index.html',

    // 构建多页
    pages: undefined,

    // 开启 生产环境的 source map?
    productionSourceMap: false,

    
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    },

    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
        .set('@', resolve('src'))
        .set('_c', resolve('src/components'))
        const types = ["vue-modules", "vue", "normal-modules", "normal"]
        types.forEach(type =>
            addStyleResource(config.module.rule("less").oneOf(type))
        )
    },

    css: {
        modules: false, // 启用 CSS modules
        extract: true, // 是否使用css分离插件
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        } // css预设器配置项
    },

    devServer: {
        port: 8080, // 端口
        proxy: 'https://www.easy-mock.com' // 设置代理
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: []
      }
    }
}
function addStyleResource(rule) {
	rule.use('style-resource')
	.loader('style-resources-loader')
	.options({
		patterns: [
			// 需要全局导入的less路径，自己修改，我这里引入了两个less文件
			path.resolve(__dirname, './src/assets/less/common.less'),
			path.resolve(__dirname, './src/assets/less/variables.less')
		],
	})
}
