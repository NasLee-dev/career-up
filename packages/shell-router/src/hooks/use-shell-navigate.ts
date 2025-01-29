export default function useShellNavigate() {
  const navigate = (pathName: string) => {
    window.dispatchEvent(
      new CustomEvent("[shell] navigate", { detail: pathName })
    );
  };

  return navigate;
}
