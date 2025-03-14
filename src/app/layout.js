import localFont from "next/font/local";
import { Audiowide } from "next/font/google";
import "./globals.css";

const thedusCLR = localFont({
    src: "./fonts/ThedusCondensedLight-Regular.otf",
    weight: "400",
  });
const thedusCLB = localFont({
    src: "./fonts/ThedusCondensedLight-Bold.otf",
    weight: "400",
});
const thedusWLR = localFont({
    src: "./fonts/ThedusWideLight-Regular.otf",
    weight: "400",
});
const thedusWLB = localFont({
    src: "./fonts/ThedusWideLight-Bold.otf",
    weight: "400",
});
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
  subsets: ["latin"],
});

export const metadata = {
  title: "Hoku 3D site",
  description: "3D printing and engraving provided by hoku3d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${thedusCLR} ${thedusCLB} ${thedusWLR} ${thedusWLB} ${aino} ${audiowide} ${ainohead} antialiased`}>
        {children}
      </body>
    </html>
  );
}
