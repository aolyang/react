import cjs from "@rollup/plugin-commonjs"
import ts from "rollup-plugin-typescript2"
import generatePackageJson from "rollup-plugin-generate-package-json"

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
        plugins: [
            ts(),
            cjs(),
            generatePackageJson({
                inputFolder: resolveInput("react"),
                outputFolder: resolveOutput("react"),
                baseContents: ({ name, version, author, license }) => {
                    return {
                        name,
                        version,
                        author,
                        license,
                        main: "index.js",
                        module: "index.js",
                        types: "index.d.ts",
                        sideEffects: false
                    }
                }
            })
        ],
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
