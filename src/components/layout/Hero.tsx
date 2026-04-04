import { motion } from "framer-motion";
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'
import avatar3 from '../../assets/images/avatar3.png'
import avatar4 from '../../assets/images/avatar4.png'
import avatar5 from '../../assets/images/avatar5.png'
import avatar6 from '../../assets/images/avatar6.png'
import avatar7 from '../../assets/images/avatar7.png'
import avatar8 from '../../assets/images/avatar8.png'
import zigzagLine from '../../assets/images/zig-zag line.png'
import halfCircle from '../../assets/images/half-circle.png'
import virticalLine1 from '../../assets/images/vertical line1.png'
import virticalLine2 from '../../assets/images/vertical line2.png'

const avatarData = [
    { src: avatar1, className: "top-[40%] left-0" },
    { src: avatar2, className: "top-[20%] left-[12%] md:left-[7%]" },
    { src: avatar3, className: "top-0 left-[24%] md:left-[28%]" },
    { src: avatar4, className: "bottom-2 left-[30%] md:left-[33%]" },
    { src: avatar5, className: "top-[10%] right-[32%] md:right-[35%]" },
    { src: avatar6, className: "top-[30%] right-[24%] md:right-[28%] shadow-md rounded-full border-2 border-white" },
    { src: avatar7, className: "top-0 right-[8%] md:right-[10%]" },
    { src: avatar8, className: "top-24 right-0" },
];

export default function Hero() {
    return (
        <section className="relative mx-auto py-24 md:pt-40 overflow-hidden">

            {/* main content */}
            <div className="px-6 md:px-16">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-6xl xl:max-w-7xl mx-auto font-gerbil font-normal text-4xl md:text-5xl lg:text-6xl 2xl:text-[90px] leading-normal text-center">
                    The {" "}
                    <span className="relative">thinkers
                        <img className="absolute -bottom-2 left-0 w-full" src={zigzagLine} alt="zig-zag Line" />
                    </span>
                    {" "} and
                    <br />
                    doers were cha<span className="bg-accent-pink pr-4 rounded-full">anging</span>
                    <br />
                    the
                    <span className="bg-accent-green mx-2 px-4 md:px-7 rounded-full italic">status</span>Quo with
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-7 max-w-3xl mx-auto font-satoshi font-normal text-base md:text-lg lg:text-2xl text-primary-text/80 text-center">
                    We are a team of strategists, designers communicators, researchers.
                    Together, we believe that progress only happens when you refuse to play things safe.
                </motion.p>

                {/* Avatar Row */}
                <div className="relative h-75 md:h-64 mt-10 md:mt-14 scale-75 md:scale-100">
                    {avatarData.map((avatar, i) => (
                        <motion.div
                            key={i}
                            className={`absolute ${avatar.className}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, i % 2 === 0 ? -12 : 12, 0]
                            }}
                            transition={{
                                opacity: { delay: 0.4 + i * 0.1, duration: 0.5 },
                                scale: { delay: 0.4 + i * 0.1, duration: 0.5 },
                                y: {
                                    duration: 3 + (i % 3),
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <img className="w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full object-cover"
                                src={avatar.src}
                                alt="Avatar images"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Lines & Shapes */}
            <div className="hidden sm:block">
                <img className="w-8 md:w-12 absolute top-[45%] left-0" src={virticalLine1} alt="Virtical Line1" />
                <img className="w-10 md:w-14 absolute top-[45%] left-5 md:left-7" src={virticalLine2} alt="Virtical Line1" />
            </div>

            <div className="hidden sm:block absolute top-[32%] right-[1%] lg:right-[9%] scale-75 md:scale-100">
                <img className="w-14 md:w-20" src={halfCircle} alt="Half Circle" />
            </div>
        </section>
    );
}