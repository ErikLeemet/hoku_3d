import localFont from "next/font/local";
import {Audiowide} from "next/font/google"
import "./globals.css";

const ainohead = localFont({
    src: "./fonts/Aino-Headline.woff2",
    weight: "400",
  });
const aino = localFont({
  src: "./fonts/Aino-Regular.woff2",
  weight: "400",
});
const audiowide = Audiowide({
  weight: "400",
  subsets: ['latin'],
});

export const metadata = {
  title: "Hoku 3D site",
  description: "3D printing and engraving provided by hoku3d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${aino} ${audiowide} ${ainohead} antialiased`}
      >
        <main className="max-w-8xl mx-auto" >{children}</main>
      </body>
    </html>
  );
}
