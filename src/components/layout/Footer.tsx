import { motion } from "framer-motion";

// Container variant for animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Item variant for animation
const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
} as const

export default function Footer() {
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="bg-accent-green mx-auto px-6 xl:px-40"
        >
            {/* Footer Items */}
            <div className="border-t-2 border-primary-text/10 pt-24 grid grid-cols-1 md:grid-cols-4 gap-8 md:place-content-between space-y-5 md:space-y-0 font-satoshi text-xl font-normal text-primary-text/80">

                {/* Company */}
                <motion.div variants={columnVariants} className="space-y-4">
                    <h3 className="font-gerbil text-[22px] font-normal text-primary-text">Company</h3>
                    <ul className="space-y-3 flex flex-wrap md:flex-nowrap flex-row md:flex-col gap-5 md:gap-0">
                        {["Home", "Studio", "Service", "Blog"].map((item) => (
                            <li key={item}>
                                <a href="#" className="relative group inline-block">
                                    <span className="transition-all duration-300 group-hover:pl-2">
                                        {item}
                                    </span>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary-text transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Terms & Policies */}
                <motion.div variants={columnVariants} className="space-y-4">
                    <h3 className="font-gerbil text-[22px] font-normal text-primary-text">Terms & Policies</h3>
                    <ul className="space-y-3 flex flex-wrap md:flex-nowrap flex-row md:flex-col gap-5 md:gap-0">
                        {["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"].map((item) => (
                            <li key={item}>
                                <a href="#" className="relative group inline-block">
                                    <span className="transition-all duration-300 group-hover:pl-2">
                                        {item}
                                    </span>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary-text transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Follow Us */}
                <motion.div variants={columnVariants} className="space-y-4">
                    <h3 className="font-gerbil text-[22px] font-normal text-primary-text">Follow Us</h3>
                    <ul className="space-y-3 flex flex-wrap md:flex-nowrap flex-row md:flex-col gap-5 md:gap-0">
                        {["Instagram", "LinkedIn", "Youtube", "Twitter"].map((item) => (
                            <li key={item}>
                                <a href="#" className="relative group inline-block">
                                    <span className="transition-all duration-300 group-hover:pl-2">
                                        {item}
                                    </span>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary-text transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Info*/}
                <motion.div variants={columnVariants} className="space-y-4">
                    <h3 className="font-gerbil text-[22px] font-normal text-primary-text">Contact Info</h3>
                    <ul className="space-y-3 flex flex-wrap md:flex-nowrap flex-row md:flex-col gap-5 md:gap-0">
                        <li>1498w Fluton ste, STE 2D Chicgo, IL 63867.</li>
                        <li>(123) 456789000</li>
                        <li>info@elementum.com</li>
                    </ul>
                </motion.div>
            </div>

            {/* Copyright part */}
            <motion.p
                variants={columnVariants}
                className="pt-35 pb-15 text-center font-satoshi text-lg font-normal text-primary-text/80"
            >
                ©2023 Elementum. All rights reserved
            </motion.p>
        </motion.footer>
    );
}