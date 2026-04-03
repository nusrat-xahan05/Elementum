import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-accent-green mx-auto px-6 xl:px-40"
        >
            {/* Footer Items */}
            <div className="border-t-2 pt-24 grid grid-cols-1 md:grid-cols-4 gap-8 md:place-content-between space-y-5 md:space-y-0 font-satoshi text-xl font-normal text-primary-text/80">

                {/* Company */}
                <div className="space-y-4">
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
                </div>

                {/* Terms & Policies */}
                <div className="space-y-4">
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
                </div>

                {/* Follow Us */}
                <div className="space-y-4">
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
                </div>

                {/* Contact Info*/}
                <div className="space-y-4">
                    <h3 className="font-gerbil text-[22px] font-normal text-primary-text">Contact Info</h3>
                    <ul className="space-y-3 flex flex-wrap md:flex-nowrap flex-row md:flex-col gap-5 md:gap-0">
                        <li>1498w Fluton ste, STE 2D Chicgo, IL 63867.</li>
                        <li>(123) 456789000</li>
                        <li>info@elementum.com</li>
                    </ul>
                </div>
            </div>

            {/* Copyright part */}
            <p className="pt-35 pb-15 text-center font-satoshi text-lg font-normal text-primary-text/80">
                ©2023 Elementum. All rights reserved
            </p>
        </motion.footer>
    );
}