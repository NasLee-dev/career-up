import inject from "./injector";

inject({
  routerType: "browser",
  rootElement: document.getElementById("app-edu") as HTMLElement,
  basePath: "/edu",
});
