/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Josefin: "var(--Josefin)",
      Lato: "var(--Lato)",
    },
    extend: {
      colors: {
        BtnColor: "var(--BtnColor)",
        FooterColor: "var(--FooterColor)",
        FooterBtmColor: "var(--FooterBtmColor)",
        ItemColor: "var(--ItemColor)",
        HoverColor: "var(--HoverColor)",
        HeaderTopColor: "var(--HeaderTopColor)",
        CommonColor: "var(--CommonColor)",
        LogoColor: "var(--LogoColor)",
        BannerBg: "var(--BannerBg)",
        CardColor: "var(--CardColor)",
        FtextColor: "var(--FtextColor)",
        SecondBtnColor: "var(--SecondBtnColor)",
        OpacityColor: "var(--OpacityColor)",
      },
      dropShadow: {
        CardShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      },
    },
  },
  plugins: [],
}