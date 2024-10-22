import { Inter, Work_Sans, Lora } from 'next/font/google';
import "./globals.css";
import Header from "@/app/components/Header";

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

export const metadata = {
  title: "New Shoe Collection",
  description: "Generated by Nahuel Basterretche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${workSans.variable} ${lora.variable} antialiased min-h-screen bg-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}