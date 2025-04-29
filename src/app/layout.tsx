import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Personal Web",
  icons: {
    icon: "/logo.png",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html
        lang="en"
        suppressHydrationWarning
        className={`${poppins.variable} scroll-smooth`}
      >
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
   
  );
}
