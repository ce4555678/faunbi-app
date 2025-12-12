// app/manifest.ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
            {
                purpose: "maskable",
                sizes: "512x512",
                src: "/icon512_maskable.png",
                type: "image/png",
            },
            {
                purpose: "any",
                sizes: "512x512",
                src: "/icon512_rounded.png",
                type: "image/png",
            },
        ],
        orientation: "portrait",
        display: "standalone",
        dir: "auto",
        lang: "pt-BR",
        name: "Faunbi",
        short_name: "Faunbi",
        start_url: "/",
        scope: "/",
        description:
            "Faunbi converte áudio e vídeo em texto de forma rápida, simples e inteligente. Economize tempo e foque no que importa.",
        id: "/",
    };
}