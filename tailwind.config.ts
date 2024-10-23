import { PluginAPI } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";
import { sub } from "framer-motion/client";  
import { MovingBorder } from "@/components/ui/moving-border";
import plugin from "tailwindcss";

function addVaribleForColors({addBase,theme}:PluginAPI){
  const allColors =theme('colors' ,{}) ||{}

    const newVars : Record<string, string>= {};

     Object.entries(allColors).forEach(([key, value]) => {

      if(typeof value === 'string'){
      newVars[`--${key}`]= value;
      }
      else if(typeof value === 'object' && value !== null){
        Object.entries(value).forEach(([subkey,subValue]) =>{
        if (typeof sub === `string`){
        newVars[`--${key}-${subkey}`] ; subValue;
        }
        });
      }
    });

    addBase({
      ":root": newVars,
    });
  }
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },



      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
          
         
         

        },
      },
    },
    plugins:[
      addVaribleForColors,



    ]




  }
  
 
export default config;

