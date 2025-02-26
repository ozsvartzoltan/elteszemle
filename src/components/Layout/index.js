import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex max-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8 px-4 bg-black text-white max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
