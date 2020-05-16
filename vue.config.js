const path = require("path");
module.exports = {
    configureWebpack: config => {
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
                alias: {
                    vue$: "vue/dist/vue.js",
                    "@": path.resolve(__dirname, "./src")
                }
            }
        });
    },
}