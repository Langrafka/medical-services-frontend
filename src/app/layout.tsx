import { Urbanist } from "next/font/google";
import { Header } from "../components/shared/Header/Header";
import "../styles/global.css";
import { Footer } from "../components/shared/Footer/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata = {
  title: "Medical Solution",
  description: "Professional medical services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} h-full`}>
      <body className="font-sans antialiased bg-white text-main-dark min-h-screen flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
