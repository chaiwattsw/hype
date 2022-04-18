import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="bg-gradient-to-b from-green-500 to-gray-900">
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto mb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
