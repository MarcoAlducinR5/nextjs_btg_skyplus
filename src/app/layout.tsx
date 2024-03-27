import type { Metadata } from "next";
import { Main } from "./main";
import { Header } from "./header";
import { Footer } from "./footer";
import localFont from 'next/font/local';

const SkyText = localFont({
  src: [
    {
      path: '../fonts/SkyText/SkyText.ttf',
      weight: 'normal',
      style: 'normal',
    }/* ,
    {
      path: '../fonts/Open_Sans/OpenSans-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../fonts/Nunito-ottf/Nunito-Light.ttf',
      weight: 'normal',
      style: 'normal',
    } */
  ],
  
});

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
      <head> 
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width = device-width, initial-scale = 1.0, user-scalable = no"/>
        <meta httpEquiv='cache-control' content='no-cache'/>
        <meta httpEquiv='expires' content='0'/>
        <meta httpEquiv='pragma' content='no-cache'/>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="SKY +" />
        <meta httpEquiv="X-UA-Compatible" content="IE=11.0"/>
      </head>
      <body className={SkyText.className}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
