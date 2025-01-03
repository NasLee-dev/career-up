import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useShellEvent(type: string, basename: string) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const appNavigateEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname =
        pathname === "/" ? basename : `${basename}${pathname}`;

      if (newPathname === location.pathname) return;

      navigate(newPathname);
    };
    window.addEventListener(`[${type}] navigated`, appNavigateEventHandler);

    return () => {
      window.removeEventListener(
        `[${type}] navigated`,
        appNavigateEventHandler
      );
    };
  }, [basename, location, navigate, type]);

  useEffect(() => {
    if (location.pathname.startsWith(basename)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(basename, ""),
        })
      );
    }
  }, [basename, location]);
}
