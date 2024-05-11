/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

/* TODO: Create Design system through Tailwind theme config to reduce tech debt
@remarks
@see {@link https://tailwindcss.com/docs/theme|Tailwind theme config documentation}
*/
/* TODO: Configure Tailwind theme for markdown using `tailwindcss-typography` plugin
@remarks
@see {@link https://github.com/tailwindlabs/tailwindcss-typography|tailwindcss-typography documentation}
*/

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       p: {
      //         marginBottom: defaultTheme.spacing[4],
      //         '&:only-child': {
      //           marginBottom: defaultTheme.spacing[8]
      //         },
      //         '&:last-child': {
      //           marginBottom: defaultTheme.spacing[8]
      //         }
      //       }
      //     }
      //   }
      // },
      listStyleImage: {
        square: 'url("/assets/images/square.svg")',
      },
      colors: {
        primary: "#000",
        secondary: "#fff",
        accent: "#f00",
      },
      fontFamily: {
        display: ["Alfa Slab One"],
      },
      // borderColor: {
      //   neo: defaultTheme.color["black"],
      // },
      // borderWidth: {
      //   neo: defaultTheme.borderWidth[2],
      // },
      boxShadow: {
        neo: "4px 4px 0px #000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
