import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightLlmsTxt from "starlight-llms-txt";

export default defineConfig({
    site: "https://docs.equicord.org",
    integrations: [
        starlight({
            plugins: [starlightLinksValidator(), starlightLlmsTxt()],
            title: "Equicord Docs",
            logo: {
                src: "./src/assets/logo.png"
            },
            favicon: "/favicon.png",
            editLink: {
                baseUrl: "https://github.com/Equicord/Equidocs/tree/main/"
            },
            social: [
                { icon: "github", href: "https://github.com/Equicord/Equicord", label: "GitHub" },
                { icon: "discord", href: "https://equicord.org/discord", label: "Discord" }
            ],
            lastUpdated: true,
            sidebar: [
                {
                    label: "Getting Started",
                    link: "/start"
                },
                {
                    label: "Installation & Preparation",
                    items: [{ autogenerate: { directory: "installing" } }]
                },
                {
                    label: "Plugin Development",
                    items: [{ autogenerate: { directory: "plugins" } }]
                },
                {
                    label: "Navigating Discord's Code",
                    items: [{ autogenerate: { directory: "discord-code" } }]
                },
                {
                    label: "FAQ",
                    link: "/faq"
                }
            ]
        })
    ],
    vite: {
        assetsInclude: ["src/assets/**/*"]
    },
    image: {
        remotePatterns: [
            { protocol: "https", hostname: "avatars.githubusercontent.com" },
            { protocol: "https", hostname: "cdn.nest.rip" }
        ]
    }
});