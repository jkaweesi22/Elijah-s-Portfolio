/**
 * Inline script that runs before paint to prevent theme flash.
 * Must be placed in head/layout before any content.
 * Renders as static HTML - no "use client" needed (no hooks).
 */
export function ThemeScript() {
  const script = `
    (function() {
      const theme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = theme === 'dark' || (!theme && systemDark);
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
