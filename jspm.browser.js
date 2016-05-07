SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "rxjs/*": "node_modules/rxjs/*.js",
    "src/*": "src/*",
    "ng2Boilerplater/": "src/"
  }
});
