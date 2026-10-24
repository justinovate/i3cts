# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# i3cts

## Deployment

1. Open **GitHub > Actions > Build deployment release > Run workflow**.
2. Select the branch to build and enter a new tag, such as `v1.0.0`.
3. From the new GitHub Release, download `website.zip` and `website.zip.sha256`.
4. Verify the download in the same folder:

   ```bash
   sha256sum --check website.zip.sha256
   ```

5. Upload and extract `website.zip` into the **parent of your hosting
   `public_html` folder**. The archive already contains `public_html/`,
   including `.htaccess` and the built website.
6. Open your website and check that the pages and downloads work.

You can use `website.tar.gz` instead; verify it with
`sha256sum --check website.tar.gz.sha256` before extracting.
