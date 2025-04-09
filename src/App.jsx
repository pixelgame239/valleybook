import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import Policy from "./pages/Policy";
import { AuthProvider } from "./components/AuthContext";
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productDetail" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<LoginPage />} />
        <Route path="/signUp" element={<Signup></Signup>}></Route>
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
