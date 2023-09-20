/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");

const nextConfig = {
    async redirects() {
        return [{ source: "/", destination: "/home", permanent: true }];
    },
};

module.exports = nextConfig;
