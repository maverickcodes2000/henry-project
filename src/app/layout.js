import { Inter } from "next/font/google";
import "./globals.css";
import { Globalcontext } from "./Context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Happy Home",
  description: "a website that enables for smooth adoption processes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Globalcontext>
          {children}
        </Globalcontext>
      </body>
    </html>
  );
}
