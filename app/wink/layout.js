// app/wink/layout.js
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Using generateMetadata for dynamic metadata based on the address parameter
export async function generateMetadata({ params }) {
  const baseUrl = "https://donate-dynamic.vercel.app";
  
  return {
    title: "Donate | Dynamic Payment",
    description: "Send donations easily with dynamic payment links",
    metadataBase: new URL(baseUrl),
    // Twitter specific meta tags for Player Card
    other: {
      'twitter:card': 'player',
      'twitter:site': '@UltimateDigits', 
      'twitter:title': 'Dynamic Payment Link',
      'twitter:description': 'Send donations easily with dynamic payment links',
      'twitter:player': `${baseUrl}/wink/${params.address}`,
      'twitter:player:width': '360',
      'twitter:player:height': '560',
      'twitter:image': 'https://res.cloudinary.com/dg8ssfxu3/image/upload/v1722584912/ud/y6uypvxozxsutmrkhot0.png', 
    },
  };
}

export default function WinkLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}