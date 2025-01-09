import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";
import Footer from "@/components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Patronize",
  description:
    "A Patreon clone made by following the tutorial by CodeWithHarry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>

        <Navbar />
        <div className="relative min-h-[calc(100vh-128px)] overflow-x-hidden text-white">
        <div className="absolute top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        {children}
        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
