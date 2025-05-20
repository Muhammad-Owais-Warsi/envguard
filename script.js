
import fs from "fs";
import { execSync } from "child_process";

function isGitRepo() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}


function checkIfTracked() {
  try {
    const tracked = execSync('git ls-files .env', { encoding: 'utf-8' }).trim();
    const cached = execSync('git ls-files --cached .env', { encoding: 'utf-8' }).trim();
    return tracked || cached;
  } catch (error) {
    console.error("Error checking tracking status:", error.message);
    return false;
  }
}






function untrackEnv() {
  try {
    console.log("🔄 Removing .env from Git tracking...");
    execSync('git rm --cached .env', { stdio: 'ignore' });
    console.log("✅ Successfully untracked .env file");
  } catch (error) {
    console.error("❌ Failed to remove .env from Git cache:", error.message);
  }
}

function safeAppendToGitignore() {
  try {
    const gitignore = fs.readFileSync('.gitignore', 'utf-8');
    if (!gitignore.includes('.env')) {
      console.log("📝 Adding .env to .gitignore...");
      fs.appendFileSync('.gitignore', '\n.env');
      execSync('git add .gitignore', { stdio: 'ignore' });
      console.log("✅ .env successfully added to .gitignore");
    } else {
      console.log("ℹ️ .env is already listed in .gitignore");
    }
  } catch (error) {
    console.error("❌ Error updating .gitignore:", error.message);
  }
}

function main() {
  console.log("\n🔍 Starting environment safety check...\n");

  if (!isGitRepo()) {
    console.log("❌ This directory is not a Git repository. Please initialize Git first.");
    return;
  }
  
  if(!setUpHusky()) {
    console.log("⚠️ Husky setup incomplete. Please complete the setup manually.");
    return;
  }
  
  console.log("✅ Husky pre-commit hooks configured successfully\n");

  if (!fs.existsSync('./.gitignore')) {
    console.log("📁 .gitignore not found. Creating new file...");
    execSync('touch .gitignore', { stdio: 'ignore' });
    console.log("✅ Created new .gitignore file");
    safeAppendToGitignore();
    return;
  }

  console.log("🔍 Checking .gitignore configuration...");
  safeAppendToGitignore();

  console.log("\n🔍 Checking Git tracking status for .env...");
  if (checkIfTracked()) {
    console.log("⚠️ .env file is currently tracked by Git");
    untrackEnv();

    if (!checkIfTracked()) {
      console.log("✅ .env file successfully untracked");
    } else {
      console.log("⚠️ Unable to untrack .env file. Please check manually");
    }
  } else {
    console.log("✅ .env file is not tracked by Git");
  }

  console.log("\n✨ Environment safety check completed\n");
}

export default main;
