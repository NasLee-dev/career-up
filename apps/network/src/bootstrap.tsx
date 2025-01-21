import inject from "./injector";

inject({
  rootElement: document.getElementById("app-network")!,
  routerType: "browser",
  basePath: "/network",
});
