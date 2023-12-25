import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-50">
      <Navbar />

      <hr />
      <div>{children}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
