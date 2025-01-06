import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appPostingBaseName } from "../constants/prefix";
import { useShellEvent } from "@career-up/shell-router";
import inject from "posting/injector";

export default function AppPosting() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-posting", appPostingBaseName);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appPostingBaseName, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => {
      unmountRef.current();
    };
  }, []);

  return <div ref={wrapperRef} id="app-posting" />;
}
