import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../../assets/images/arrow.png";
import zigzagLine from "../../assets/images/zig-zag line.png";
import bgLine from "../../assets/images/bg-zigZag2.png";

const offers = [
    {
        id: 1,
        category: "Office of multiple interest content",
        title: "Colaborative & partnership",
        description: "We build deep-rooted relationships with our partners to ensure long-term strategic success and shared growth."
    },
    {
        id: 2,
        category: "The hanger US Air force digital experimental",
        title: "We talk about our weight",
        description: "Our methodology involves transparently addressing challenges to streamline digital experimental processes."
    },
    {
        id: 3,
        category: "Delta faucet content, social, digital",
        title: "Piloting digital confidence",
        description: "We empower brands to navigate the digital landscape with confidence through targeted social and digital strategies."
    }
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    },
} as const;

export default function OfferPart() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <section className="relative py-24 px-6 md:px-16 mx-auto">
            {/* Background Decorative Line */}
            <img
                src={bgLine}
                className="absolute -top-1/4 right-0 w-[60%] opacity-30 pointer-events-none z-0 object-cover"
                alt="Background zig zag line" />

            {/* Section Header */}
            <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl font-gerbil font-normal text-4xl md:text-5xl lg:text-6xl 2xl:text-[90px] leading-normal text-left mb-20">
                What we {" "}
                <span className="bg-accent-green p-1 rounded-full">can</span>
                {" "}
                <span className="relative">offer
                    <img className="absolute -bottom-2 left-0 w-full" src={zigzagLine} alt="zig-zag Line" />
                </span>
                {" "}you
            </motion.h3>

            {/* Accordion Rows */}
            <motion.div
                className="border-t border-accent-border"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}>
                {offers.map((offer, index) => (
                    <motion.div
                        key={offer.id}
                        variants={itemVariants}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="border-b border-accent-border py-8 xl:py-10 cursor-pointer group transition-colors px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            {/* Column 1 */}
                            <div className="w-full md:w-1/4">
                                <p className="font-satoshi text-sm md:text-base xl:text-[30px] text-primary-text/80">
                                    {offer.category}
                                </p>
                            </div>

                            {/* Column 2 */}
                            <div className="w-full md:w-2/4">
                                <h3 className="font-gerbil text-3xl md:text-5xl xl:text-[56px] text-primary-text">
                                    {offer.title}
                                </h3>

                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden">
                                            <p className="mt-6 font-satoshi text-lg text-primary-text/70 leading-relaxed max-w-lg">
                                                {offer.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Column 3 */}
                            <div className="w-full md:w-1/4 flex justify-end items-start">
                                <motion.img
                                    src={arrow}
                                    alt="Toggle"
                                    animate={{ rotate: hoveredIndex === index ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}