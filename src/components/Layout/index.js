import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="bg-gradient-to-b from-green-500 to-gray-900 min-h-screen h-auto">
      <Header />
      <main className="relative max-w-7xl mx-auto mb-12 px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
