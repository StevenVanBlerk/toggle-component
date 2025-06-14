import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr"; // transforms SVGs into react components
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src"),
        },
    },
});
