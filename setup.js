
import fs from "fs";
import { execSync } from "child_process";

export default function init() {
  try {
    execSync('npm install husky');
    execSync('husky init');
    execSync('husky')
    console.log("✅ Husky installed and pre-commit hook added.");
    fs.writeFileSync("./.husky/pre-commit", "node ./node_modules/envwarden/script.js", { mode: 0o755 });
    return;
  } catch(e) {
    console.log("Error occured");
    return ;
  }
}






