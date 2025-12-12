import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Faunbi",
    template: "%s | Faunbi",
  },
  description:
    "Faunbi transforma áudio e vídeo em texto com velocidade, simplicidade e inteligência. Produtividade sem atrito.",
  applicationName: "Faunbi",
  authors: [{ name: "Faunbi" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon512_rounded.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon512_rounded.png", sizes: "512x512", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon512_maskable.png",
      },
    ],
  },
  openGraph: {
    title: "Faunbi",
    description:
      "Converta áudio e vídeo em texto claro e preciso instantaneamente. Faunbi ajuda você a trabalhar de forma mais inteligente.",
    url: "https://faunbi.com",
    siteName: "Faunbi",
    locale: "pt_BR", // Alterado de 'en_US' para 'pt_BR'
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Faunbi",
    description:
      "Converta áudio e vídeo em texto claro e preciso instantaneamente. Faunbi ajuda você a trabalhar de forma mais inteligente.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.className} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
