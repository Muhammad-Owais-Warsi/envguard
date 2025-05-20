
import { execSync } from 'child_process';
import fs from 'fs';

try {

  execSync('npm install husky');
  execSync('husky init');
  execSync('husky')
  console.log("✅ Husky installed and pre-commit hook added.");
} catch {
  console.log("⚠️ Not in a Git repo. Skipping Husky setup.");
}
