/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  transpilePackages: ["@repo/ui", "@repo/db"],

  webpack: (config) => {
    config.resolve.alias["@repo/db"] = path.resolve(
      __dirname,
      "../../packages/db"
    );
    return config;
  },
};
