
import fs from "fs";
import { execSync } from "child_process";

export default function init() {
  try {
    execSync('npm install husky');
    execSync('npx husky init');
    execSync('husky')
    console.log("✅ Husky installed and pre-commit hook added.");
    fs.writeFileSync("./.husky/pre-commit", "npx envwarden check", { mode: 0o755 });
    return;
  } catch(e) {
    console.log("Error occured");
    return ;
  }
}






