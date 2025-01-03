function injectFactory() {
  return ({
    rootElement,
    basePath,
    routerType,
  }: {
    rootElement: HTMLElement;
    basePath: string;
    routerType: RouterType;
  }) => {
    const router = createRouter({ type: routerType, routes, basePath });
    ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
  };
}
