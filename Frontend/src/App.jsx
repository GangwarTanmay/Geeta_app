import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BookStore from "./store/BookStore";

function App() {
  return (
    <BookStore>
      <div className="container-fluid outer">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </BookStore>
  );
}

export default App;
