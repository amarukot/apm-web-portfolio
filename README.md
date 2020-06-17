# My Portfolio Site

Web portfolio. An ongoing project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dependencies / Frameworks /

- Bootstrap
- React

### Updates

- 6/17/20:
  added \_redirects file to netlify build to take care of SPA routing issue where a reload of a page (other than the home page) shows a 404 error. Placed the `_redirects` file under `/public` folder (or whatever the build folder is) and has this entry:  
  `/* /index.html 200`
