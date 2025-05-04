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
import AdminChatScreen from "./pages/AdminChatScreen.jsx"; // Điều chỉnh đường dẫn nếu cần
import SetNewPassword from "./pages/SetNewPassword.jsx"; // Điều chỉnh đường dẫn nếu cần
import ForumPage from "./pages/ForumPage.jsx";
import { ForumProvider } from "./backend/ForumContext.jsx";
import ForumDetailPage from "./pages/ForumDetailPage.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import Confirmation from "./pages/Confirmation";
import Profile from "./pages/Profile";
import Gacha from "./pages/Gacha.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <div>
          <BackgroundMusic />
          {/* Nội dung khác của trang */}
        </div>
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
          <Route path="/adminChat" element={<AdminChatScreen />} />
          <Route path="/setNewPassword" element={<SetNewPassword />} />
          <Route path="/gacha" element={<Gacha />} />

          <Route
            path="/forum"
            element={
              <ForumProvider>
                <ForumPage></ForumPage>
              </ForumProvider>
            }
          ></Route>
          <Route
            path="/forum/:id"
            element={<ForumDetailPage></ForumDetailPage>}
          ></Route>

          {/* THÊM ROUTE CHO ADMIN PANEL */}
          <Route
            path="/admin/*" // <-- ĐẢM BẢO ĐƯỜNG DẪN CHÍNH XÁC
            element={
              // Tạm thời không bọc ProtectedAdminRoute để dễ test
              <AdminApp />
            }
          />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
