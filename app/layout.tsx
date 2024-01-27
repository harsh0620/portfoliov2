import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ModeToggle";
import SheetSlider from "./components/SheetSlider";
import GoUpButton from "./components/GoUpButton";
import Footer from "./components/Footer";
import GiveFeedback from "./components/GiveFeedback";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Chandravanshi",
  description: "Personal Portfolio of Harsh Chandravanshi",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta property="og:title" content="Harsh Chandravanshi" />
          <meta property="og:description" content="Personal Portfolio of Harsh Chandravanshi - Software Developer , Freelancer, Explorer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://harshchandravanshi.tech" />
          <meta property="og:url" content="https://www.harshchandravanshi.tech" />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/portfoliov2-8d7a9.appspot.com/o/metaData%2Fwww.harshchandravanshi.tech_.png?alt=media&token=29c8452f-e475-4186-8d3e-ecb13e88f095"
          />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/portfoliov2-8d7a9.appspot.com/o/metaData%2Fharshchandravanshi.tech.png?alt=media&token=d14e3d92-c10f-47cc-a6d3-e86d34032781"
          />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div style={{ position: "fixed", top: 20, left: 20 }}>
              <SheetSlider />
            </div>
            <div style={{ position: "fixed", top: 20, right: 20 }}>
              <ModeToggle />
            </div>
            <div style={{ position: "fixed", bottom: 80, right: 20 }}>
              <GiveFeedback />
            </div>
            <div style={{ position: "fixed", bottom: 20, right: 20 }}>
              <GoUpButton />
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
