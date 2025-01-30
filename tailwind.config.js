import { ThemeDesignSystem } from "@arreglatech/design-system";

/** @type {import('tailwindcss').Config} */
export default {
  ...ThemeDesignSystem,
  prefix: "st-",
  content: [
    ...ThemeDesignSystem.content,
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
};
