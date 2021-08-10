import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen max-w-7xl mx-auto">
      <Header />
      <main className="mb-auto container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
