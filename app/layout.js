import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pravartak-AI",
  description: "Your AI-powered career development platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-tab.png" sizes="any" />
        <title>Pravartak-AI</title>
      </head>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <div className="grid-background"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="relative z-10">
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />

              <footer className="border-t border-border/40 py-12 mt-20">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                  <p>Made with 💗 by Quad Squad</p>
                </div>
              </footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
