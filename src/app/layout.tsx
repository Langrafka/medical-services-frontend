import { Urbanist } from "next/font/google";
import { Header } from "../components/shared/Header/Header";
import "../styles/global.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-sans antialiased bg-white text-dark-green">
        <Header />
        <main>{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
