import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "Todo List",
  title: {
    template: '%s | Todo List',
    default: 'Todo List'
  },
  description: "Next.js로 만든 할일 앱입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        { children }
        <Footer />
    </body>
    </html>
  );
}
