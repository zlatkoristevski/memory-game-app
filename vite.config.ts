import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";
import type { ManifestOptions, VitePWAOptions } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import replace from "@rollup/plugin-replace";

const pwaOptions: Partial<VitePWAOptions> = {
  mode: "development",
  base: "/",
  includeAssets: ["favicon.png"],
  manifest: {
    name: "ATRO Games - for Damjan",
    short_name: "ATRO Games",
    theme_color: "#ffffff",
    icons: [
      {
        src: "icon-192.png", // <== don't add slash, for testing
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png", // <== don't remove slash, for testing
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "icon-512.png", // <== don't add slash, for testing
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  },
  devOptions: {
    enabled: process.env.SW_DEV === "true",
    /* when using generateSW the PWA plugin will switch to classic */
    type: "module",
    navigateFallback: "index.html"
  }
};

const replaceOptions = { __DATE__: new Date().toISOString() };
const claims = process.env.CLAIMS === "true";
const reload = process.env.RELOAD_SW === "true";
const selfDestroying = process.env.SW_DESTROY === "true";

if (process.env.SW === "true") {
  pwaOptions.srcDir = "src";
  pwaOptions.filename = claims ? "claims-sw.ts" : "prompt-sw.ts";
  pwaOptions.strategies = "injectManifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).name = "PWA Inject Manifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).short_name = "PWA Inject";
}

if (claims) pwaOptions.registerType = "autoUpdate";

if (reload) {
  // @ts-expect-error overrides
  replaceOptions.__RELOAD_SW__ = "true";
}

if (selfDestroying) pwaOptions.selfDestroying = selfDestroying;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(pwaOptions), replace(replaceOptions)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
