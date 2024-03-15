import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Main } from "./UIComponents/main";
import { Header } from "./UIComponents/header";
import { Footer } from "./UIComponents/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BTG Sports",
  description: "Blue To Go Sports ahora es Sky+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
