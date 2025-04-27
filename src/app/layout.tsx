import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

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
  const session = await auth();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth`}
    >
      <body className="transition-colors duration-900 ease-in-out">
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
