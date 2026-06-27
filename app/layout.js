import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "HOÀNG GIA - Sữa Bắp Thiên Nhiên & Nước Sâm Thảo Mộc",
  description: "Sữa bắp thiên nhiên và nước sâm thảo mộc đậm đà truyền thống, nguyên chất 100% bảo vệ sức khỏe.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${jakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

