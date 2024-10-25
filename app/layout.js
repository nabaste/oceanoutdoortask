import { Inter, Work_Sans, Lora, Agdasima } from 'next/font/google';
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const workSans = Work_Sans({
    subsets: ['latin'],
        variable: '--font-work-sans',
})

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
})

const agdasima = Agdasima({
    subsets: ['latin'],
    weight: ["400", "700"],
    variable: '--font-agdasima',
})

export const metadata = {
  title: "New Shoe Collection",
  description: "Generated by Nahuel Basterretche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${workSans.variable} ${lora.variable} ${agdasima.variable} antialiased min-h-screen bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}