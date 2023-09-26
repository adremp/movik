/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
			spacing: {
				page: "4rem"
			}
		},
  },
	plugins: [plugin(({ addVariant }) => {
		addVariant('child', '& > *')
	})],
};

