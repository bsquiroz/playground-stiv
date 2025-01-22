import { tailwindConfig } from "@arreglatech/alil-stiv";

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindConfig,
  prefix: "st-",
  content: [
    ...tailwindConfig.content,
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
};
