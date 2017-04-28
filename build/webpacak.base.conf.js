/**
 * Created by allen on 17-4-27.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function (env) {
    return {
        // context: __dirname + '../src',
        entry: { // 入口
            index: path.join(__dirname + '/../src/index.js')
        },
        output: { // 出口
            path: path.join(__dirname, '/../dist'),
            filename: 'js/[name].min.js',
            // publicPath: '/', // webpack-dev-server 伺服的文件是相对 publicPath 这个路径的, 在 index.html 文件当中引入的路径也发生相应的变化: 如：<script src="assets/index.js"></script>
        },
        resolve: {
            //设置可省略文件后缀名(注:如果有文件没有后缀设置''会在编译时会报错,必须改成' '中间加个空格。ps:虽然看起来很强大但有时候省略后缀真不知道加载是啥啊~);
            extensions: [' ', '.js', '.css', '.sass', '.scss', '.vue', '.less', '.json'],

            //查找module的话从这里开始查找;
            modules: [path.join(__dirname, '/../src'), 'node_modules'],

            // 别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
            // 为了方便开发，我们可以定义自己的别名，以便很快捷地引用不同的模块
            alias: {
                // jquery: path.resolve(__dirname,'./src/j/jquery.min.js') //绝对路径;
            },

        },
        module: {
            rules: [
                // 解析js文件，用babel编译es6
                {
                    test: /\.js/,
                    use: ["babel-loader"],
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, '../src/')]
                },
                // css
                // {
                //     test: /\.css$/,
                //     use: ExtractTextPlugin.extract({
                //         fallback: "style-loader",
                //         use: "css-loader"
                //     })
                // },
                // css/less
                {
                    test: /\.(less|css)$/,
                    use: ExtractTextPlugin.extract({ // 打包css
                        fallback: 'style-loader',
                        use: ['css-loader','less-loader']
                    })
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'img/[name].[hash:7].[ext]'
                            }
                        }
                    ]
                },
                //字体
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'fonts/[name].[md5:hash:hex:7].[ext]'
                            }
                        }
                    ]
                },
                // 视频
                {
                    test: /\.mp4$/,
                    use: ['file-loader'],
                }
            ]
        },
        plugins: [
            /* 所有$都会加载对应的jquery模块，其他同 */
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
        ]
    }
}