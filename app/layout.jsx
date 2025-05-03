import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransistion from "@/components/PageTransistion";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono=JetBrains_Mono({subsets:['latin'],
  weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetBrainsMono'  
}) ;

export const metadata = {
  title: "Subhrodeep Acharya",
  description: "Portfolio of Subhrodeep Acharya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning
    data-new-gr-c-s-check-loaded="14.1224.0"
    data-gr-ext-installed=""
    
    >
      <body
        className={jetBrainsMono.variable}
      >
        <Header/>
        
        
           {children}
        
        
      </body>
    </html>
  );
}
