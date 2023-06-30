import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
});

export const metadata = {
  title: "Advice Generator App by Ken Sparby | Frontend Mentor",
  description:
    "A solution for the Advice Generator App challenge from Frontend Mentor ( https://frontendmentor.io )",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
