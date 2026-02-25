import { useState } from "react";
import { motion} from "framer-motion";
import { FiSearch, FiUser, FiShoppingBag, FiShield, FiTruck, FiRefreshCw } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import FacultySection from "../components/FacultySection";
import ShoppingSection from "../components/ShoppingSection";
import Footer from "../components/Footer";
import logo from "/img/KULOGOpng.png";
import Promo from "/img/Promotion.webp";
import Modal from "../components/Modal";
import { products } from "../data/products";
import nisitMen from "/img/nisitshirtmen.png"
import nisitPant from "/img/nisitpant.png"
import ancess from "/img/ancess.webp"
import jersey from "/img/jersay.jpg"
import nisitWomen from "/img/nisitgirl.png"
import skirt from "/img/skirtgirl.png"
import ancessGirl from "/img/ancessgirl.jpg"



const features = [
    { icon: <FiShield size={22} className="text-pink-500" />, title: "LIFETIME WARRANTY", desc: "Built to last forever" },
    { icon: <FiTruck size={22} className="text-pink-500" />, title: "FREE SHIPPING", desc: "On orders over ฿1,500" },
    { icon: <FiRefreshCw size={22} className="text-pink-500" />, title: "30-DAY RETURNS", desc: "No questions asked" },
];

export default function Home() {
    const location = useLocation();
    const text = location.state?.text;

    const [activeProduct, setActiveProduct] = useState(null);
    const [hovered, setHovered] = useState(null);

    return (
        <div className="min-h-screen bg-orange-50 flex flex-col">

            {/* ===== HERO SECTION ===== */}
            <div className="grid md:grid-cols-2 flex-1">

                {/* ===== LEFT ===== */}
                <div className="px-8 flex flex-col">

                    {/* Top Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4 items-start"
                    >
                        <img src={logo} className="my-6 w-[70px] h-[70px]" alt="logo" />
                        <nav className="px-75 py-8 text-sm space-y-2">
                            <p>MEN</p>
                            <p>WOMAN</p>
                            <p>FACULTY</p>
                            <p>OTHERS <span className="text-pink-500 text-xs"></span></p>
                        </nav>
                    </motion.div>

                    {/* Hero Text */}
                    <div className="mt-20 max-w-lg space-y-6">
                        <motion.h2
                            layoutId="shopTitle"
                            className="text-6xl font-bold text-[#3b2f36]"
                        >
                            {text}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="text-gray-600"
                        >
                            Kasetsart University gear, apparel, and books,
                            designed for the most convenient shopping experience.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4"
                        >
                            <button className="bg-pink-600 text-white px-6 py-3 rounded-md">Shop now →</button>
                            <button className="bg-white border px-6 py-3 rounded-md">Watch story 👁</button>
                        </motion.div>
                    </div>
                </div>

                {/* ===== RIGHT ===== */}
                <div className="flex flex-col pt-6">

                    {/* Image + Clickable Zones */}
                    <div className="relative inline-block">
                        <motion.img
                            src={Promo}
                            alt="Promotion"
                            className="mb-5 pr-3 h-auto w-auto object-cover rounded-[40px]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        />

                        {/* Icons — absolute บนรูป มุมขวาบน */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute top-5 right-12 flex gap-4 text-xl text-black drop-shadow-md"
                        >
                            <FiSearch className="cursor-pointer hover:opacity-60 transition" />
                            <FiShoppingBag className="cursor-pointer hover:opacity-60 transition" />
                            <FiUser className="cursor-pointer hover:opacity-60 transition" />
                        </motion.div>

                        {/* Male Zone — จุดกลางเสื้อ เส้นขึ้นบนหักขวา card ขวาบน */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            onClick={() => setActiveProduct(products.male)}
                            onMouseEnter={() => setHovered("male")}
                            onMouseLeave={() => setHovered(null)}
                            className="absolute cursor-pointer"
                            style={{ top: "38%", left: "8%", width: "40%", height: "28%" }}
                        >
                            {/* จุดขาว — กลาง zone */}
                            <div className="absolute z-10" style={{
                                top: "50%", left: "50%",
                                transform: "translate(-50%,-50%)",
                                width: 13, height: 13,
                                background: "white", borderRadius: "50%",
                                boxShadow: "0 0 0 3px rgba(255,255,255,0.4)"
                            }} />

                            {/* SVG: จากจุดกลาง ขึ้นบน แล้วหักขวาไปหา card */}
                            <motion.svg
                                animate={{ opacity: hovered === "male" ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                            >
                                {/*
                                จุดอยู่ที่ 50%,50% ของ zone
                                ขึ้นบน ~60% ของความสูง zone แล้วหักขวาออกไป 55%
                            */}
                                <path
                                    d="M 50% 50% L 50% 10% L 100% 10%"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>

                            {/* Info Card — ขวาบนของ zone */}
                            <motion.div
                                animate={{
                                    opacity: hovered === "male" ? 1 : 0,
                                    scale: hovered === "male" ? 1 : 0.92,
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                className="absolute pointer-events-none z-20 bg-white rounded-2xl shadow-xl px-2 py-1"
                                style={{ top: "100px", left: "-10%", marginLeft: "8px", width: "155px" }}
                            >
                                <p className="text-xs font-extrabold text-gray-900 leading-snug">{products.male.name}</p>
                                <p className="text-[10px] text-gray-400">{products.male.subtitle}</p>
                                <p className="text-lg font-black text-gray-900 ">฿{products.male.price.toLocaleString()}</p>
                            </motion.div>
                        </motion.div>

                        {/* Female Zone — จุดกลางเสื้อ เส้นขึ้นบนหักซ้าย card ซ้ายบน */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                            onClick={() => setActiveProduct(products.female)}
                            onMouseEnter={() => setHovered("female")}
                            onMouseLeave={() => setHovered(null)}
                            className="absolute cursor-pointer"
                            style={{ top: "32%", right: "8%", width: "40%", height: "28%" }}
                        >
                            {/* จุดขาว — กลาง zone */}
                            <div className="absolute z-10" style={{
                                top: "50%", left: "50%",
                                transform: "translate(-50%,-50%)",
                                width: 13, height: 13,
                                background: "white", borderRadius: "50%",
                                boxShadow: "0 0 0 3px rgba(255,255,255,0.4)"
                            }} />

                            {/* SVG: จากจุดกลาง ขึ้นบน แล้วหักซ้ายออกไป */}
                            <motion.svg
                                animate={{ opacity: hovered === "female" ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                            >
                                <path
                                    d="M 50% 50% L 50% 10% L 0% 10%"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>

                            {/* Info Card — ซ้ายบนของ zone */}
                            <motion.div
                                animate={{
                                    opacity: hovered === "female" ? 1 : 0,
                                    scale: hovered === "female" ? 1 : 0.92,
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                className="absolute pointer-events-none z-20 bg-white rounded-2xl shadow-xl px-2 py-1"
                                style={{ top: "5px", right: "-10%", marginRight: "8px", width: "155px" }}
                            >
                                <p className="text-xs font-extrabold text-gray-900 leading-snug">{products.female.name}</p>
                                <p className="text-[10px] text-gray-400 ">{products.female.subtitle}</p>
                                <p className="text-lg font-black text-gray-900 ">฿{products.female.price.toLocaleString()}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Modal */}
                <Modal product={activeProduct} onClose={() => setActiveProduct(null)} />

            </div>

            {/* ===== SECTION 2 : FEATURES BAR ===== */}
            <div className="bg-white border-t border-gray-100 px-8 py-6">
                <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: i * 0.15, duration: 0.45, ease: "easeOut" }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-11 h-11 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                                {f.icon}
                            </div>
                            <div>
                                <p className="text-xs font-extrabold text-gray-900 tracking-wide">{f.title}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* ===== SECTION 3 : MEN COLLECTION ===== */}
            <div className="bg-white px-12 py-16">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">MEN</h2>
                    <p className="text-sm text-gray-400 mt-2 tracking-wide">Men's Apparel & Accessories</p>
                </motion.div>

                {/* Grid Layout */}
                <div className="max-w-5xl mx-auto grid grid-cols-3 grid-rows-2 gap-4" style={{ gridTemplateRows: "260px 220px" }}>

                    {/* Card 1 — เสื้อขาว (tall left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.0, duration: 0.5 }}
                        className="row-span-2 relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#1a5c4a" }}
                    >
                        <div className="absolute inset-4 border border-white/30 rounded-2xl z-10 pointer-events-none" />
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/20 text-8xl select-none">
                            <img src={nisitMen} alt="" /></div>
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                            <button className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full border border-white/40 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                    {/* Card 2 — กางเกง (tall center) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.12, duration: 0.5 }}
                        className="row-span-2 relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#2d6b58" }}
                    >
                        <div className="absolute inset-4 border border-white/30 rounded-2xl z-10 pointer-events-none" />
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/20 text-8xl select-none">
                            <img src={nisitPant} alt="" /></div>
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                            <button className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full border border-white/40 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                    {/* Card 3 — Accessories (top right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.24, duration: 0.5 }}
                        className="relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#3a7a62" }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/20 text-6xl select-none">
                            <img src={ancess} alt="" /></div>
                        </div>
                        <div className="absolute bottom-3 left-3 z-20">
                            <button className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/40 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                    {/* Card 4 — Jersey (bottom right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.36, duration: 0.5 }}
                        className="relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#e8e8e8" }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-gray-400/40 text-6xl select-none">
                            <img src={jersey} alt="" /></div>
                        </div>
                        <div className="absolute bottom-3 left-3 z-20">
                            <button className="bg-black/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/40 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                </div>
            </div>
            {/* ===== SECTION 4 : WOMEN COLLECTION ===== */}
            <div className="bg-stone-100 px-12 py-16">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">WOMEN</h2>
                    <p className="text-sm text-gray-400 mt-2 tracking-wide">Women's Apparel & Accessories</p>
                </motion.div>

                {/* Grid Layout */}
                <div className="max-w-5xl mx-auto grid grid-cols-3 grid-rows-2 gap-4" style={{ gridTemplateRows: "260px 220px" }}>

                    {/* Card 1 — เสื้อขาว (tall left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.0, duration: 0.5 }}
                        className="row-span-2 relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#1a5c4a" }}
                    >
                        <div className="absolute inset-4 border border-white/30 rounded-2xl z-10 pointer-events-none" />
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/20 text-8xl select-none">
                            <img src={nisitWomen} alt="" /></div>
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                            <button className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full border border-white/40 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                    {/* Card 2 — กางเกง (tall center) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.12, duration: 0.5 }}
                        className="row-span-2 relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#2d6b58" }}
                    >
                        <div className="absolute inset-4 border border-white/30 rounded-2xl z-10 pointer-events-none" />
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/20 text-8xl select-none">
                            <img src={skirt} alt="" /></div>
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                            <button className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full border border-white/40 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                    {/* Card 3 — Accessories (top right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.24, duration: 0.5 }}
                        className="relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#3a7a62" }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/20 text-6xl select-none">
                            <img src={ancessGirl} alt="" /></div>
                        </div>
                        <div className="absolute bottom-3 left-3 z-20">
                            <button className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/40 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                    {/* Card 4 — Jersey (bottom right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.36, duration: 0.5 }}
                        className="relative rounded-3xl overflow-hidden cursor-pointer group"
                        style={{ background: "#e8e8e8" }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-gray-400/40 text-6xl select-none">
                            <img src={jersey} alt="" /></div>
                        </div>
                        <div className="absolute bottom-3 left-3 z-20">
                            <button className="bg-black/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/40 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </motion.div>

                </div>
            </div>
            {/* ===== SECTION 5 : FACULTY ===== */}
            <FacultySection />
             {/* ===== SECTION 6 : SHOPPING ANIMATION ===== */}
            <ShoppingSection />
            {/* ===== FOOTER ===== */}
            <Footer />


        </div>
    );
}


