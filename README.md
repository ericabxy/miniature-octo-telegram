# Miniature Octo Telegram

A poor [React App to GitHub Pages](https://github.com/gitname/react-gh-pages) tutorial was followed.

Vite was used instead of create-react-app. An older Vite was used to work with the older version of NPM installed on the development system.

    npm create vite@6.1.0 miniature-octo-telegram -- --template react

In addition to the tutorial instructions, a line needed to be modified in `package.json` to facilitate relative file linking.

    ...
    "scripts": {
      ...
      "build": "vite build --base=./",
      ...
    },
    ...

React Boostrap is needed for React components.

    npm install react-bootstrap bootstrap
