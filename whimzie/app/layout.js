import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whimzie",
  description: "Developers need to have fun too!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <a href="/" className="text-2xl font-bold">
            Whimzie
          </a>
          {/* navbar with login / signup buttons */}

          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
