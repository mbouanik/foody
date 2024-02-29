const { defaults } = require("jest-config");

/** @type {import('jest').Config} */
const config = {
  moduleDirectories: [...defaults.moduleDirectories, "bower_components"],
};

module.exports = config;
