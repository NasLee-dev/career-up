import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appNetworkBasename } from "../constants/prefix";
import { useShellEvent } from "@career-up/shell-router";
import inject from "network/injector";

export default function AppNetwork() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-network", appNetworkBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appNetworkBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => {
      unmountRef.current();
    };
  }, []);

  return <div ref={wrapperRef} id="app-network" />;
}
