// vue.config.js

const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
	configureWebpack: () => {
		return {
			plugins: [

				new CompressionPlugin({
					test: /\.js$|\.html$|.\css/, //匹配文件名
					threshold: 10240,//对超过10k的数据压缩
					deleteOriginalAssets: false //不删除源文件
				})
			]
		}

	},
	devServer: {
		proxy: {
			'/apis': {
				target: 'https://bird.ioliu.cn/v2/?url=https://api.douban.com/',  // target host
				ws: true,  // proxy websockets 
				changeOrigin: true,  // needed for virtual hosted sites
				pathRewrite: {
					'^/apis': ''  // rewrite path
				}
			},
			'/imgs': {
				target: 'https://img3.doubanio.com',  // target host
				ws: true,  // proxy websockets 
				changeOrigin: true,  // needed for virtual hosted sites
				pathRewrite: {
					'^/imgs': ''  // rewrite path
				}
			},
		}
	},

	publicPath: '/dou',
	outputDir: undefined,
	assetsDir: undefined,
	runtimeCompiler: undefined,
	productionSourceMap: undefined,
	parallel: undefined,
	css: undefined
};
