import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Markdown from "vite-plugin-react-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cs1300-v2-portfolio", 
  plugins: [
    Markdown({
      wrapperComponent: {
        Blockquote: "src/components/Blockquote.tsx",
        ImagePreview: "src/components/ImagePreview.tsx",
        CustomLink: "src/components/CustomLink.tsx",
        Section: "src/components/Section.tsx"
      },
      wrapperComponentPath: "src/components/ProjectArticle"
    }),
    react({
      include: [/\.tsx$/, /\.md$/],
    })],
})
