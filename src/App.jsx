import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import Policy from "./pages/Policy";
import ForgetPassword from "./pages/ForgetPassword";
import { AuthProvider } from "./components/AuthContext";
import NewBook from "./pages/NewBook";
import Cart from "./pages/Cart";
import { BookProvider } from "./backend/BookContext";
import PrestigeBrand from "./pages/PrestigeBrand";
import QualityProduct from "./pages/QualityProduct";
import InnovationPage from "./pages/InnovationPage";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shop"
            element={
              <BookProvider>
                <Shop />
              </BookProvider>
            }
          />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/signIn" element={<LoginPage />} />
          <Route path="/signUp" element={<Signup></Signup>}></Route>
          <Route path="/policy" element={<Policy />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/newBook" element={<NewBook />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/prestigeBrand" element={<PrestigeBrand />} />
          <Route path="/qualityProduct" element={<QualityProduct />} />
          <Route path="/innovationPage" element={<InnovationPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
