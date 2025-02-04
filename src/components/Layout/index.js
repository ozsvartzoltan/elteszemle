import React from 'react';

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: '',
      }}
    >
      <header className="bg-opacity-50 bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <nav>
            <a href="/" className="mx-2 hover:underline">
              Home
            </a>
            <a href="/kapcsolat" className="mx-2 hover:underline">
              Kapcsolat
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">{children}</main>

      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
