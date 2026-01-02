# Deployment Guide: From Local to Live

Follow this step-by-step guide to deploy your **Data Analyst Portfolio** to the web using GitHub and Render.

## Phase 1: Push Code to GitHub

Since you have the code ready locally, you need to push it to a remote GitHub repository.

1.  **Create a New Repository on GitHub**
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `portfolio-website` (or similar).
    *   **Do not** check "Initialize with README", .gitignore, or license (you already have these).
    *   Click **"Create repository"**.

2.  **Commit Your Local Changes**
    Open your terminal in VS Code (Ctrl+`) and run:
    ```bash
    git add .
    git commit -m "Initial commit: Completed portfolio website with CI/CD"
    ```

3.  **Link and Push**
    Copy the commands from the "…or push an existing repository from the command line" section on GitHub, which look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
    git branch -M main
    git push -u origin main
    ```

## Phase 2: Deploy on Render

We will use the `render.yaml` file I created to make this automatic.

1.  **Sign Up / Login**
    *   Go to [dashboard.render.com](https://dashboard.render.com/).
    *   Sign in with your **GitHub account**.

2.  **Create a New Blueprint**
    *   Click the **"New +"** button.
    *   Select **"Blueprint"**.
    *   Connect your `portfolio-website` repository.

3.  **Deploy**
    *   Render will detect the `render.yaml` file.
    *   Give your service a name (e.g., `samuel-portfolio`).
    *   Click **"Apply"** or **"Create Blueprint"**.

Render will now:
1.  Clone your code.
2.  Install dependencies (`npm install`).
3.  Build the site (`npm run build`).
4.  Start the server (`npm start`).

Wait for a few minutes. Once you see "Service is live", click the URL (e.g., `https://samuel-portfolio.onrender.com`) to visit your site.

## Phase 3: Connect CI/CD (Optional)

To enable the smart deployment checks we added to GitHub Actions:

1.  **Get Deploy Hook URL**
    *   In Render Dashboard, go to your new service "Settings".
    *   Scroll down to **"Build & Deploy"**.
    *   Find **"Deploy Hook"** and copy the URL. (It should verify the correct branch is set to `main`).

2.  **Add Secret to GitHub**
    *   Go to your GitHub Repository.
    *   Click **Settings** -> **Secrets and variables** -> **Actions**.
    *   Click **"New repository secret"**.
    *   **Name**: `RENDER_DEPLOY_HOOK_URL`
    *   **Value**: Paste the URL you copied from Render.
    *   Click **"Add secret"**.

Now, whenever you push to GitHub, the "CI/CD Pipeline" action will run. Use the **Actions** tab in GitHub to watch it build and test. If successful, it will tell Render to update your live site.
