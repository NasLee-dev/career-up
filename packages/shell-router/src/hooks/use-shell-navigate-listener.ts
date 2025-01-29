import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useShellNavigateListener() {
  const navigate = useNavigate();
  useEffect(() => {
    const shellNavigateListener = (event: Event) => {
      const pathName = (event as CustomEvent).detail;
      navigate(pathName);
    };
    window.addEventListener("[shell] navigate", shellNavigateListener);
    return () => {
      window.removeEventListener("[shell] navigate", shellNavigateListener);
    };
  }, [navigate]);
}
