import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appJobBasename } from "../constants/prefix";
import { useShellEvent } from "@career-up/shell-router";
import inject from "job/injector";

export default function AppJob() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-job", appJobBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appJobBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => {
      unmountRef.current();
    };
  }, []);

  return <div ref={wrapperRef} id="app-job" />;
}
