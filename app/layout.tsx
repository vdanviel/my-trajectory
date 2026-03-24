import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/component/ThemeContext";

const inter = Inter({
  subsets: ['cyrillic']
});

export const metadata = {
  title: "Minha trajetória",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body 
        className={`${inter.className} min-h-screen antialiased transition-colors duration-300`}
        style={{
          backgroundImage: "url('/bullseye-gradient.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}