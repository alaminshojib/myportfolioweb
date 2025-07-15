
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-full flex-grow py-3">
        {children}
      </main>
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-6">
          <p>&copy; 2025 Md. Al-Amin. All rights reserved.</p>
        </footer>
    </div>
  );
}
