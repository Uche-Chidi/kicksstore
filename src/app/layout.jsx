import { Kolker_Brush } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "./component/TopNavbar";
import {BottomNavbar} from "./component/BottomNavbar";
import Footer from "./component/Footer";

const kolker_brush = Kolker_Brush({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "React",
  description: "Welcome to React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kolker_brush.className}>
      <div className="bg-white z-[1] fixed inset-x-0 border-b-4 border-b-gray-200">
      <TopNavbar />
      <BottomNavbar />
      </div>

      <div className="relative top-[160px] min-h-screen">
      {children}
      </div>

      <Footer />
      </body>
    </html>
  );
}
