import "./globals.css";
import "animate.css";
import localFont from "next/font/local";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const uncutSans = localFont({
  src: "../../public/fonts/UncutSans-Variable.woff2",
  display: "swap",
});

export const metadata = {
  title: "Kevin Wolford",
  description: "Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${uncutSans.className}`}>
        <TheHeader />
        <main className="px-4">{children}</main>

        <TheFooter />
      </body>
    </html>
  );
}
