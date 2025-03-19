import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matsuura Ryusei",
  description: "Portfolio of Matsuura Ryusei",
};

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
