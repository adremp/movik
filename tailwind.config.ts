import { screens } from "./config/index";
/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const toObj = (els: Array<string | number>, suffix = "") =>
  els.reduce((acc, el) => ({ ...acc, [el]: el + suffix }), {});

module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    screens,
    borderRadius: toObj(
      Array.from({ length: 30 }, (_, i) => i),
      "px"
    ),
    backgroundImage: {
      fadeLeft: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      fade: "linear-gradient(180deg, rgba(22, 22, 22, 0.16) 59.12%, #212121 100%)",
      yellow:
        "linear-gradient(0deg, #FFE24B 0%, #FFE24B 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.01) 100%)",
      "opacity-dark":
        "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.01) 100%)",
    },
    fontWeight: toObj(["400", "500", "600", "700"]),
    colors: {
			black: "black",
      "text-primary": "white",
      primary: "#FFE24B",
      "primary-inverted": "#000000",
    },
    spacing: toObj(
      Array.from({ length: 300 }, (_, i) => i),
      "px"
    ),
    fontSize: toObj(
      Array.from({ length: 200 }, (_, i) => i),
      "px"
    ),
  },
  plugins: [
    plugin(({ addUtilities, addVariant, matchUtilities }) => {
			addVariant("child", "& > *");
			addVariant("hovered", "&:hover");
			matchUtilities({
				"ga": (value: string) => ({
					gridArea: value
				})
			})
      addUtilities({
        ".font-public-sans": {
          fontFamily: `var(--font-public-sans)`,
        },
        ".font-staatliches": {
          fontFamily: `var(--font-staatliches)`,
        },
      });
    }),
  ],
};
