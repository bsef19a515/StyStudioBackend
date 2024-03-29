import React from "react";
import Individual from "./pages/Individual";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gallery from "./components/Gallery/SalonGallery";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Password from "./pages/ConPassword";
import Booking from "./pages/Booking";
import EditProfile from "./pages/EditProfile";
import Admin from "./components/AdminPanel/Admin";

const App = () => {
  const location = useLocation();

  const hideNavbarAndFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/admin" ||
    location.pathname === "/changePass";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/changePass" element={<Password />} />
        <Route path="/Book" element={<Booking />} />
        <Route exact="true" path="/individual/:id" element={<Individual />} />
        <Route exact="true" path="/individual" element={<Individual />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};
export default App;
