import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/styles/globals.css';
import Header from '@/components/navbar/Header';
// import FooterBar from '@/components/footer/FooterBar';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";
import Modal from "@/components/modal/Modal";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Travel Trail Holidays",
  description: "Travel Trail Holidays",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <Modal/>
          <Header/>
          {children}
          {/* <FooterBar/> */}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}