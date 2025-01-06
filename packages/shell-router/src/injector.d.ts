import { RouteObject } from "react-router-dom";
import { RouterType } from "./types";
declare function injectFactory({ routes }: {
    routes: RouteObject[];
}): ({ rootElement, basePath, routerType, }: {
    rootElement: HTMLElement;
    basePath: string;
    routerType: RouterType;
}) => () => void;
export { injectFactory };
