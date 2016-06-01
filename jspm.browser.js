SystemJS.config({
  baseURL: "/",
  paths: {
    "rxjs/*": "node_modules/rxjs/*.js",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "src/": "src/"
  }
});
