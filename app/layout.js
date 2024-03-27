import "./globals.css";
import Navbar from "@/pages/Navbar";
export const metadata = {
  title: "My Portfolio",
  description: "Show-Casing Skills And Talent",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      
      <body>

        {children}
      </body>
    </html>
  );
}
