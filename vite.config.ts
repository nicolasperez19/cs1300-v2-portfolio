import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Markdown from "vite-plugin-react-markdown";
import path from "path";

import webfontDownload from "vite-plugin-webfont-dl";

/* TODO: Add simpler way to resolve path aliases
@remarks
@see {@link https://github.com/pingdotgg/uploadthing/blob/main/vitest.config.ts|Resolve path aliases programmatically}
*/

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cs1300-v2-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [
    Markdown({
      wrapperComponent: {
        Blockquote: "src/components/Blockquote.tsx",
        ImagePreview: "src/components/ImagePreview.tsx",
        CustomLink: "src/components/CustomLink.tsx",
        Section: "src/components/Section.tsx",
      },
      wrapperComponentPath: "src/components/ProjectArticle",
    }),
    react({
      include: [/\.tsx$/, /\.md$/],
    }),
    webfontDownload(),
  ],
});
