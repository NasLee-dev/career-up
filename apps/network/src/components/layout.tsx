import React from "react";
import * as css from "./layout.css";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>MyNetworkContainer</div>
      <div className={css.center}>
        {children}
      </div>
    </div>
  );
};

export default Layout;