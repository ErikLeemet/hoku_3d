import "./globals.css";

export const metadata = {
  title: "Hoku 3D site",
  description: "3D printing and engraving provided by hoku3d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const savedTheme = localStorage.getItem("theme");

              if (savedTheme) {
                document.documentElement.classList.toggle("dark", savedTheme === "dark");
              } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.classList.toggle("dark", prefersDark);
              }
            `,
          }}
        />
      </head>
      <body>
        <main className="max-w-8xl mx-auto" >{children}</main>
      </body>
    </html>
  );
}
