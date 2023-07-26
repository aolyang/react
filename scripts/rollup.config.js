import ts from "rollup-plugin-typescript2"
import cjs from "@rollup/plugin-commonjs"

/**
 * @param {...string} paths
 * */
const resolve = (...paths) =>
    require("path").resolve(__dirname, "../", ...paths)

const resolveInput = (path) => resolve("packages", path)
const resolveOutput = (path) => resolve("dist", path)
export default [
    // react package rollup option
    {
        input: resolveInput("react/index.ts"),
        plugins: [ts(), cjs()],
        output: {
            file: resolveOutput("react/index.js"),
            name: "index.js",
            format: "umd"
        }
    },
    {
        input: resolveInput("react/src/jsx.ts"),
        plugins: [ts(), cjs()],
        output: [
            // jsx runtime
            {
                file: resolveOutput("react/jsx-runtime.js"),
                name: "jsx-runtime.js",
                format: "umd"
            },
            // jsx dev runtime
            {
                file: resolveOutput("react/jsx-dev-runtime.js"),
                name: "jsx-dev-runtime.js",
                format: "umd"
            }
        ]
    }
]
