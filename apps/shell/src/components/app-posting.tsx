import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appPostingBaseName } from "../constants/prefix";
import {
  type InjectFunctionType,
  useShellEvent,
} from "@career-up/shell-router";
import { importRemote } from "@module-federation/utilities";

export default function AppPosting() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-posting", appPostingBaseName);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;
    isFirstRunRef.current = false;
    importRemote<{ default: InjectFunctionType }>({
      url: "http://localhost:3001",
      scope: "posting",
      module: "injector",
      remoteEntryFileName: "remoteEntry.js",
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appPostingBaseName, ""),
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [location]);

  useEffect(() => {
    return () => {
      unmountRef.current();
    };
  }, []);

  return <div ref={wrapperRef} id="app-posting" />;
}
