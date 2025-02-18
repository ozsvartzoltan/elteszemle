import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex max-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">{children}</main>
      <Footer />
    </div>
  );
}
