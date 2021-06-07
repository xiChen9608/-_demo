module.exports = {
    // 配置服务器
    devServer: {
        // 启用压缩，代码占的空间少，在互联网传输快
        compress: true,
        port: 8080,
        host: '127.0.0.1',
        hot: true, // 启用热启动。
        open: true, // 默认第一次运行时调起浏览器打开项目
        // 服务器代理，实现跨域访问接口
        proxy: {
            '/api': {
                target: 'http://imissu.herokuapp.com/api/',  // 接口地址
                ws: true, // 是否启用websockets
                changOrigin: true,  //允许跨域  Origin源127.0.0.1:9000
                pathRewrite: {
                    '^/api': ''  //请求的时候使用这个/api前缀就可以
                }
            }
        },
        before: app => {}
    }
}