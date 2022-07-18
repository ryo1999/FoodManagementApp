/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/react",
])

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})

const withPlugins = require("next-compose-plugins")

module.exports = withPlugins([
    withTM,
    withBundleAnalyzer,
],{
    reactStrictMode: true,
    swcMinify: true,
})