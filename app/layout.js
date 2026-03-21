import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

// Load font with subsets and display strategy
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Prachi Rawat | Software Engineer & Web Developer",
  description:
    "Portfolio of Prachi Rawat, a Software Engineer specializing in Data Analysis and Web Development.",
  keywords:
    "Prachi Rawat, Software Engineer, Web Developer, Data Analysis, NextJS, React, JavaScript, TypeScript, Nigeria, Portfolio",
  authors: [{ name: "Prachi Rawat", url: "https://prachirawat.com" }],
  creator: "Prachi Rawat",
  publisher: "Prachi Rawat  ",
  openGraph: {
    title: "Prachi Rawat | Software Engineer & Web Developer",
    description:
      "Portfolio of Prachi Rawat, a Software Engineer specializing in Data Analysis and Web Development.",
    url: "https://prachirawat.com",
    siteName: "Prachi Rawat Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prachi Rawat | Software Engineer & Web Developer",
    description:
      "Portfolio of Praises Tula, a Software Engineer specializing in UI creation, animations, and dynamic user experiences.",
    creator: "@PrachiRawat",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2d2d2d",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body
        suppressHydrationWarning
        className="w-full min-h-screen bg-secondary flex flex-col antialiased"
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
