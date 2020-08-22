#!/usr/bin/env node

"use strict";
require("@babel/register")({
  presets: [["@babel/preset-env"], ["@babel/preset-react"]],
});
require("./main");
