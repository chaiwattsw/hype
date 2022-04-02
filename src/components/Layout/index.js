import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
