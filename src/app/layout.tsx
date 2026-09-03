import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SÉMINAIRE DE FORMATION INTERACT 8.0",
  description: "Plateforme officielle d'inscription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <Toaster position="bottom-right" theme="dark" richColors />
        </LanguageProvider>
      </body>
    </html>
  );
}