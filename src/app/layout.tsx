import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/provider/ThemeProvider";
import { Toaster } from "sonner";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "NeuNote",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${inter.className} font-sans`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >   
          <div className="min-h-screen w-full flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col pt-10">
              {children}
            </main>
          </div>

          {/**Toaster for notification */}
          <Toaster position="bottom-right" richColors expand={true} />

        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
