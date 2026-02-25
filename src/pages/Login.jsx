import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
    const ticks = 40;
    const highlightSize = 30;
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate(); // ✅ เพิ่ม

    const handleLogin = () => {
    navigate("/intro"); // ไปหน้า animation ก่อน
};

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % ticks);
        }, 80);
        return () => clearInterval(interval);
    }, []);

    const getColor = (i) => {
        const distance = (i - activeIndex + ticks) % ticks;

        if (distance < 4) return "#facc15";
        if (distance < highlightSize * 0.3) return "#fde68a";
        if (distance < highlightSize * 0.6) return "#ffffff";
        if (distance < highlightSize) return "#b4b8bd";

        return "rgba(209,213,219,0.25)";
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex items-center justify-center bg-[#1e2a3a]"
        >
            <div className="relative flex items-center justify-center">

                {/* วงแหวนโหลด */}
                <div className="absolute w-[520px] h-[520px]">
                    {Array.from({ length: ticks }).map((_, i) => (
                        <span
                            key={i}
                            className="absolute left-63 top-60 w-[10px] h-[40px] rounded-full transition-colors duration-200"
                            style={{
                                backgroundColor: getColor(i),
                                transform: `rotate(${(360 / ticks) * i}deg) translateY(-240px)`,
                            }}
                        />
                    ))}
                </div>

                {/* กล่อง Login */}
                <div className="relative z-10 w-[320px] text-center">
                    <h1 className="text-3xl font-bold text-yellow-400 mb-6">Login</h1>

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 mb-4 rounded-full bg-[#243447] text-white outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 mb-2 rounded-full bg-[#243447] text-white outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <p className="text-sm text-gray-400 mb-4 cursor-pointer hover:text-yellow-400">
                        Forgot your password?
                    </p>

                    <button
                        onClick={handleLogin}
                        className="bg-yellow-400 px-6 py-3 rounded-full font-bold hover:scale-110 active:scale-95 transition"
                    >
                        LOGIN
                    </button>

                    <p className="text-gray-400 mt-4 mb-2">log in with</p>
                    <div className="flex justify-center gap-3 mb-4">
                        <button className="bg-blue-600 w-9 h-9 rounded-full text-white font-bold">f</button>
                        <button className="bg-black w-9 h-9 rounded-full text-white font-bold">x</button>
                        <button className="bg-red-500 w-9 h-9 rounded-full text-white font-bold">G</button>
                    </div>

                    <Link to="/register" className="text-yellow-400 hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}