import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
    const ticks = 40;              // จำนวนแท่ง
    const highlightSize = 30;      // ความยาวช่วงที่สว่าง
    const [activeIndex, setActiveIndex] = useState(0);

    // animation loop
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % ticks);
        }, 80); // ปรับความเร็วได้

        return () => clearInterval(interval);
    }, []);

    // ฟังก์ชันคำนวณสี
    const getColor = (i) => {
        const distance = (i - activeIndex + ticks) % ticks;

        if (distance < 4) return "#facc15";        // เหลืองเข้ม
        if (distance < highlightSize * 0.3) return "#fde68a"; // เหลืองอ่อน
        if (distance < highlightSize * 0.6) return "#ffffff"; // ขาว
        if (distance < highlightSize) return "#b4b8bd";       // เทาอ่อน

        return "rgba(209,213,219,0.25)"; // เทาเริ่มต้น
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1e2a3a]">
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
                    <h1 className="text-3xl font-bold text-yellow-400 mb-6">Register</h1>

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 mb-4 rounded-full bg-[#243447] text-white outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 mb-4 rounded-full bg-[#243447] text-white outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 mb-3 rounded-full bg-[#243447] text-white outline-none focus:ring-2 focus:ring-yellow-400"
                    />



                    <Link
                        to="/login"
                        className="block text-center w-full py-3 rounded-full bg-yellow-400 text-black font-bold shadow-lg shadow-yellow-400/40 hover:scale-105 transition"
                    >
                        Create Account
                    </Link>

                    <p className="text-gray-400 mt-4 mb-2">log in with</p>
                    <div className="flex justify-center gap-3 mb-4">
                        <button className="bg-blue-600 w-9 h-9 rounded-full text-white font-bold">f</button>
                        <button className="bg-black w-9 h-9 rounded-full text-white font-bold">x</button>
                        <button className="bg-red-500 w-9 h-9 rounded-full text-white font-bold">G</button>
                    </div>


                </div>
            </div>
        </div>
    );
}