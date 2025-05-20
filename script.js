#!/usr/bin/env node

import fs from "fs";

function init() {
  try {
    console.log("sdv")
    fs.writeFileSync("./.husky/pre-commit", "node index.js", { mode: 0o755 });
    return;
  } catch(e) {
    console.log("Error occured");
    return ;
  }
}

init()
