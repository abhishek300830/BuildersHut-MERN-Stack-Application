# Deploying in Github pages

Firstly add Homepage to package.json

command:
npm install --save gh-pages

add These Scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

command
npm run deploy
