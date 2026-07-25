// Inline, render-blocking script that sets the `dark` class on <html> before
// hydration, so there is no flash of the wrong theme. Reads a previously
// saved choice from localStorage, falling back to the visitor's OS
// preference. No external theme library — this is the entire implementation.
const THEME_INIT_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem("epic-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    if (isDark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export function ThemeScript() {
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}
