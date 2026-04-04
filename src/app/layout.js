import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Hoku 3D site",
  description: "3D printing and engraving provided by hoku3d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function() {
            try {
              var savedTheme = localStorage.getItem("theme");
              var prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
              var isDark = savedTheme
                ? savedTheme === "dark"
                : prefersDarkQuery.matches;

              document.documentElement.classList.toggle("dark", isDark);
              window.__currentTheme = isDark ? "dark" : "light";

              function setPreferredTheme(event) {
                if (!localStorage.getItem("theme")) {
                  document.documentElement.classList.toggle("dark", event.matches);
                  window.__currentTheme = event.matches ? "dark" : "light";
                }
              }

              if (!savedTheme) {
                if (prefersDarkQuery.addEventListener) {
                  prefersDarkQuery.addEventListener("change", setPreferredTheme);
                } else if (prefersDarkQuery.addListener) {
                  prefersDarkQuery.addListener(setPreferredTheme);
                }
              }
            } catch (e) {
              console.error(e);
            }
          })();`}
        </Script>
      </head>
      <body>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
