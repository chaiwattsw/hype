import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="bg-black">
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
