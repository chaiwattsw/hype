import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
      <Header />
      <main className="relative max-w-7xl mx-auto mb-12 px-8 min-h-screen h-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
