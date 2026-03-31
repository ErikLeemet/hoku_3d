import "./globals.css";

export const metadata = {
  title: "Hoku 3D site",
  description: "3D printing and engraving provided by hoku3d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body>
        <main className="max-w-8xl mx-auto" >{children}</main>
      </body>
    </html>
  );
}
