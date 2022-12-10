import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-gray-100">
      <head />
      <body className="h-full">
        <div className="min-h-full">
          <Navbar />
          <Title />
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-4 sm:px-0">
                <div className="rounded-lg border-2 border-gray-200 bg-white shadow p-6">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
