import inject from "./injector";
const root = document.getElementById("app-posting");

if (!root) throw new Error("Failed to find the root element");

inject({
  routerType: "browser",
  rootElement: root,
  basePath: "/posting",
});
