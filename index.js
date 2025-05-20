#!/usr/bin/env node

import fs from "fs";
import { execSync } from "child_process";

function init() {
  try {
    execSync('npm install husky');
    execSync('husky init');
    execSync('husky')
    console.log("✅ Husky installed and pre-commit hook added.");
    fs.writeFileSync("./.husky/pre-commit", "node script.js", { mode: 0o755 });
    return;
  } catch(e) {
    console.log("Error occured");
    return ;
  }
}

init()




