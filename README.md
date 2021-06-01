# Getting Started with Translate To Morse App

This project was made by hand [Run Translate To Morse App](https://github.com/facebook/create-react-app).

## Prework

### Console work

npx create-react-app translate-morse-react

#### go to repository

npm i node-sass gh-pages

### Deleting unnecessary files and adding code

editing package.json with:
"homepage": "http://svenWacker.github.io/translat-morse-react",
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Updating and connecting GitHub

git init
git remote add origin git@github.com:svenWacker/translate-morse-react.git
git branch -M main
git push -u origin main

git add . && git commit -m 'initial commit and copy to github'
git push
