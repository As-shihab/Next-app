import { Inter } from "next/font/google";
import "./globals.css";
import './CSS/Media.mobile.css'
import "./CSS/Media.desktop.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata= {
  title: "AS-SHIHAB",
  description: "Hi , this is as shihab"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
