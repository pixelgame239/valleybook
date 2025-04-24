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
import Checkout from "./pages/Checkout";
import QualityProduct from "./pages/QualityProduct";
import InnovationPage from "./pages/InnovationPage";
import AdminApp from "./AdminApp.jsx"; // Điều chỉnh đường dẫn nếu cần
function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
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
          <Route path="/checkout" element={<Checkout />} />
          {/* THÊM ROUTE CHO ADMIN PANEL */}
          <Route
            path="/admin/*" // <-- ĐẢM BẢO ĐƯỜNG DẪN CHÍNH XÁC
            element={
              // Tạm thời không bọc ProtectedAdminRoute để dễ test
              <AdminApp />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
