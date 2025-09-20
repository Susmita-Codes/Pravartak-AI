import React from "react";
import Header from "@/components/header";
import { Toaster } from "sonner";

const MainLayout = async ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 md:px-6 lg:px-8">
        <div className="container mx-auto mt-24 mb-20">{children}</div>
      </main>
      <Toaster richColors />
      
      <footer className="border-t border-border/40 py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Made with 💗 by VibeCoders</p>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
