/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

const removeImports = require("next-remove-imports")({
    test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
    matchImports: "\\.(less|css|scss|sass|styl)$",
})

const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/react",
    "@fullcalendar/core",
    "@fullcalendar/interaction",
])

const RemoveImports = removeImports({
    webpack(config, options) {
        return config
    },
})

module.exports = { ...nextConfig, ...withTM({}), ...RemoveImports }
