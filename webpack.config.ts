import Webpack from "webpack";
import path from "path";

export default {
    mode: "development",
    entry: "./src/ts/main.ts",
    output: {
        filename: "code.js",
        path: path.join(__dirname, "src", "js")
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [
                "ts-loader"
            ]
        }]
    }
}