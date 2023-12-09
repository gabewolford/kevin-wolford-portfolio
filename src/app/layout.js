import "./globals.css";
import "animate.css";
import localFont from "next/font/local";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Oxygen_Mono, DM_Sans } from "next/font/google";

const oxygen_mono = Oxygen_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-oxygen-mono",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const uncut_sans = localFont({
  src: "../../public/fonts/UncutSans-Variable.woff2",
  display: "swap",
  variable: "--font-uncut-sans",
});

export const metadata = {
  description: "Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oxygen_mono.variable} ${dm_sans.variable}`}>
      <body className="pb-[40px] border">
        <TheHeader />
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
