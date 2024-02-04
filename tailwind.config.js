/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',

      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1600px',
      },
    },
    extend: {
    
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "single-product-header":
          "url('/single-product/bg-single-product-header.svg')",
        "cover-garadient-more":
          "linear-gradient(0deg, rgba(253,253,253,1) 0%, rgba(253,253,253,0.499124649859944) 50%, rgba(253,253,253,0) 100%)",
          "white-garadient-card-aboutus": "linear-gradient(270deg, #FFF 0.15%, rgba(217, 217, 217, 0.00) 99.87%)",
          "black-garadient-card-aboutus": "linear-gradient(270deg, rgba(0, 0, 0, 0.90) 0.15%, rgba(64, 64, 64, 0.63) 99.86%, rgba(217, 217, 217, 0.00) 99.87%)",
          "black-gradient-intro-awards":"linear-gradient(270deg, rgba(0, 0, 0, 0.90) 0.15%, rgba(217, 217, 217, 0.00) 99.87%)",
          "black-bg-manager-gradient":"linear-gradient(270deg, rgba(0, 0, 0, 0.90) 0.15%, rgba(217, 217, 217, 0.00) 99.87%)"
      },
      colors: {
        lightGray: "#F7F7F7",
        lightWhiteSmoke: "#FDFDFD",
        mainGreen1: "#13625c",
        mainYellow: "#f5a800",
        dangerRed : "#8F1428",
        mainRed : "#DF2040",
      },
      boxShadow: {
        // G2:"0px 8px 12px 0px rgba(0, 0, 0, 0.12)",
        'G2': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'G1' : ' 0px 1px 8px 0px rgba(0, 0, 0, 0.08)',
        'G3' :  "0px 8px 16px 0px rgba(0, 0, 0, 0.16)"
      }
      ,
      fontFamily: {
        costumRegular: ['IRANSansX-Regular', 'sans-serif'],
        costumFaNum: ['IRANSansXFaNum-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
