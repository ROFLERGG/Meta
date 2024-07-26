import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-neutral-950 text-neutral-100 font-mono">
      <Header />
      <main className="flex-1 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
