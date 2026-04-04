import { useState } from "react";
import { motion } from "framer-motion";
import hamburger from "../../assets/images/menubar.png";
import { X } from "lucide-react";

const links = ["Home", "Studio", "Services", "Contact", "FAQs"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute w-full z-50 bg-transparent pt-4"
        >
            <div className="px-6 md:px-16 mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="my-5">
                    <a href="/"
                        className="font-gerbil font-normal text-[28px]"
                    >Elementum</a>
                </div>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-16">
                    {links.map((link) => (
                        <motion.li
                            key={link}
                            whileHover={{ y: -2 }}
                            className="relative cursor-pointer group">
                            <a href={`#${link}`}
                                className="font-satoshi font-medium text-lg text-primary-text/80 group-hover:text-primary-text relative">
                                {link}

                                {/* Hover Underline */}
                                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-highlight transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"
                                />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <button className="hidden lg:flex">
                    <a href="/"
                        className="font-gerbil font-normal text-[28px]">
                        <img src={hamburger} alt="hamburger icon" />
                    </a>
                </button>



                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu">
                    {open ? (
                        <X className="text-primary-text size-10" />
                    ) : (
                        <img src={hamburger} alt="hamburger icon" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden flex flex-col gap-6 px-8 py-6">
                    {links.map((link, i) => (
                        <motion.a
                            key={link}
                            href={`#${link}`}
                            onClick={() => setOpen(false)}

                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}

                            className="relative w-fit ml-auto font-satoshi font-medium text-lg text-primary-text/80 active:text-primary-text">
                            {link}

                            {/* Underline */}
                            <span className="absolute right-0 -bottom-1 w-0 h-0.5 bg-highlight transition-all duration-300 active:w-full"
                            />
                        </motion.a>
                    ))}
                </div>
            )}
        </motion.nav>
    );
}
