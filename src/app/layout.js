import { Inter } from "next/font/google";
import "@splidejs/splide/css";
import "./globals.css";
import "animate.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Footnote from "@/components/Footnote";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lamb of God Motors Limited",
  description:
    "Welcome to Lamb of God Motors, your premier inter-state transport division",
  icons: {
    icon: ["/favico?v=4"],
    apple: ["/apple-touch-icon?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Footnote />
        </ChakraProvider>
      </body>
    </html>
  );
}
