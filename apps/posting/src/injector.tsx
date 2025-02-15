import { injectFactory } from "@career-up/shell-router";
import { routes } from "./routes";
import "@career-up/ui-kit/index.css";

const inject = injectFactory({ routes });

export default inject;
