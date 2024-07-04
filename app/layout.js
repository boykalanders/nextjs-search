import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - 360Nav Browser",
    default: "Welcome - 360Nav Browser",
  },
  description: "360Nab Brower for Collins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-1 px-8 py-12">
          <main className=" max-w-7xl mx-auto">{children}</main>
          {/* Footer */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
