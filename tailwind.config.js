const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  corePlugins: {
    order: false
  },
  theme: {
    extend: {
      order: {
        first: "-9999",
        last: "9999",
        normal: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6"
      },

      fontFamily: {
        base: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        yellowtail: ["Yellowtail", "cursive"],
        manrope: ["Manrope"]
      },
      colors: {
        gray: colors.blueGray,

        yellow: {
          500: "#FF823D"
        },
        black: "#040405",
        brand: "#F5A623",

        "dashboard-active": "rgba(1, 1, 1, 0.15)"
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        72: "18rem",
        80: "20rem"
      },
      screens: {
        xxl: "1440px"
      }
    }
  },
  variants: {
    extend: {
      order: ["hover", "focus"]
    },
    zIndex: ["hover"],
    textColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "visited",
      "group-hover"
    ],
    borderColor: ["responsive", "hover", "focus", "active", "focus-within"],
    borderRadius: ["responsive", "hover", "first", "last"],
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    borderStyle: ["responsive", "hover", "first", "last"],
    borderWidth: ["responsive", "last", "hover", "focus"]
  }
};
