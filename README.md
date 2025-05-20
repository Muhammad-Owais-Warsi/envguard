# envwarden : The End of Oops-I-Committed-My-.env

A simple tool to protect your environment variables by ensuring `.env` files never get committed to Git.

## 🚀 Features

- Automatically adds `.env` to `.gitignore` if missing
- Removes `.env` from Git tracking if it was accidentally committed
- Integrates with Husky for pre-commit protection

## 🛠️ Quick Start

1. **Install envsafe:**
    ```bash
    npm install envwarden
    ```

2. **Initialize the package**
    ```bash
    npx envwarden init
    ```

That's it! envsafe will automatically protect your `.env` files from being committed to Git.

## 🧩 How It Works

- Checks if `.env` is in `.gitignore` and adds it if missing
- Detects if `.env` is being tracked by Git and removes it from tracking
- Uses Husky to prevent accidental commits of `.env` files


## 🤔 Why Use ensafe?

- **Peace of Mind:**  
  No more "oh no" moments after a late-night push.
- **Team Safety:**  
  Protects everyone on your team, even the new folks.


