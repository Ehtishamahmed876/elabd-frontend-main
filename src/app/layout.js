import "./globals.css";
import { Inter, Poppins, Raleway, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "500",
});

const railway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-railway",
  weight: "700",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
});

export const metadata = {
  title: "Elabd Tech",
  description: "Elabd Tech",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` bg-[#DCFFDB] ${poppins.variable} ${poppins.className}`}
    >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon.png"
      />
      <body className={`${poppins.className} `}>{children}</body>
    </html>
  );
}
