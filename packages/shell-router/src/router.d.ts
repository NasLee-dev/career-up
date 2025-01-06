import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { type CreateRouterProps } from "./types";
type Router = ReturnType<typeof createBrowserRouter> | ReturnType<typeof createMemoryRouter>;
export declare function createRouter({ type, routes, basePath, }: CreateRouterProps): Router;
export {};
