import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Intro from "./pages/Intro";
import Home from "./pages/Home";

function AppRoutes() {
  const location = useLocation();

  // ❌ หน้าเหล่านี้ไม่ต้องมี Navbar
  const hideNavbar = ["/", "/register", "/intro"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      {/* 🔥 สำคัญ: ทำให้ layoutId animate ข้ามหน้า */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
