import Header from '../components/Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="sl">
      <head>
        <title>Razvoj programske opreme</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          &copy; {new Date().getFullYear()} Razvoj programske opreme
        </footer>
      </body>
    </html>
  );
}
