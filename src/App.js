import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Cart from "./components/Cart";
import ProtectedRoute1 from "./Pages/ProtectedRoute";
import ProtectedRoute from "./Pages/protectedRoutes";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute1 Component={Login}></ProtectedRoute1>}
        ></Route>
        <Route path="/signin" element={<Signup></Signup>}></Route>
        <Route
          path="/home"
          element={<ProtectedRoute Component={Home}></ProtectedRoute>}
        ></Route>
        <Route
          path="products"
          element={<ProtectedRoute Component={Products}></ProtectedRoute>}
        ></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </>
  );
}

export default App;
