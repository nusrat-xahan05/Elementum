import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feedbackData from "../../assets/data/feedback.json";
import customer1 from "../../assets/images/customer1.png";
import customer2 from "../../assets/images/customer2.png";
import customer3 from "../../assets/images/customer3.png";
import customer4 from "../../assets/images/customer4.png";
import customer5 from "../../assets/images/customer5.png";
import customer6 from "../../assets/images/customer6.png";
import customer7 from "../../assets/images/customer7.png";
import customer8 from "../../assets/images/customer8.png";
import zigzagLine from '../../assets/images/zig-zag line.png'
import comma1 from '../../assets/images/comma1.png'
import comma2 from '../../assets/images/comma2.png'


const sideAvatars = [
    { src: customer1, size: "w-16 h-16", top: "20%", left: "8%", delay: 0 },
    { src: customer3, size: "w-24 h-24", top: "50%", left: "10%", delay: 0.5 },
    { src: customer4, size: "w-14 h-14", bottom: "15%", left: "5%", delay: 1 },
    { src: customer2, size: "w-12 h-12", top: "40%", left: "2%", delay: 1.5 },
    { src: customer5, size: "w-20 h-20", top: "20%", right: "6%", delay: 0.2 },
    { src: customer7, size: "w-16 h-16", top: "48%", right: "7%", delay: 0.7 },
    { src: customer8, size: "w-32 h-32", bottom: "13%", right: "2%", delay: 1.2 },
    { src: customer6, size: "w-14 h-14", top: "30%", right: "16%", delay: 1.7 },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    // Feedback-swipe logic
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % feedbackData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full py-24 md:py-35 px-6 md:px-16 mb-10 overflow-hidden flex flex-col items-center justify-center">

            {/* Header*/}
            <div className="text-center mb-14.5 z-20">
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-6xl xl:max-w-7xl mx-auto font-gerbil font-normal text-4xl md:text-5xl lg:text-[56px] leading-normal">
                    <span className="bg-accent-green p-1 rounded-full">What</span>
                    {" "}our customer
                    <br />
                    says{" "}
                    <span className="relative">About Us
                        <img className="absolute -bottom-2 left-0 w-full" src={zigzagLine} alt="zig-zag Line" />
                    </span>
                </motion.h3>
            </div>

            {/* Sliding Feedback Card */}
            <div className="relative z-20 w-full max-w-3xl h-62.5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "anticipate" }}
                        className="absolute inset-0 bg-accent-green lg:bg-accent-green/50 rounded-[40px] p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-sm border border-accent-green/10"
                    >
                        {/* Quote Icons */}
                        <img className="w-12 absolute top-6 left-8" src={comma1} alt="Quote Icons" />
                        <img className="w-12 absolute bottom-6 right-8" src={comma2} alt="Quote Icons" />

                        <p className="font-satoshi text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                            {feedbackData[index].text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Floating Avatars */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {sideAvatars.map((avatar, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full overflow-hidden border-2 border-white shadow-lg ${avatar.size}`}
                        style={{ top: avatar.top, left: avatar.left, right: avatar.right, bottom: avatar.bottom }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 3 + (i % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: avatar.delay,
                        }}
                    >
                        <img src={avatar.src} className="w-full h-full object-cover" alt="client" />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}