import { motion } from "framer-motion";
import meetingImg from "../../assets/images/meeting.png";
import progress from "../../assets/images/progress.png";
import bgLine from "../../assets/images/bg-zigZag.png";
import zigzagLine from '../../assets/images/zig-zag line.png'
import arrow from '../../assets/images/arrow.png'
import polygon from '../../assets/images/polygon.png'
import rectangle from '../../assets/images/rectangle.png'

export default function CareerProgress() {
    return (
        <section className="relative py-24 px-6 md:px-16 overflow-hidden">
            {/* Background Decorative Line */}
            <img
                src={bgLine}
                className="absolute top-1/2 left-[6%] w-full h-auto opacity-30 pointer-events-none z-0 translate-y-[-50%] object-cover"
                alt="Background zig zag line" />

            {/* Middle Blur Shadow */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-highlight/40 blur-3xl z-10 rounded-full" />

            <div className="space-y-32 lg:space-y-40 relative z-10">
                {/* First Section - Tomorrow */}
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 order-2 lg:order-1">
                        <h3 className="font-gerbil font-normal text-4xl md:text-5xl lg:text-[56px] leading-tight">
                            <span className="relative inline-block">Tomorrow
                                <img className="absolute -bottom-4 left-0 w-full" src={zigzagLine} alt="ig-zag Line" />
                            </span>
                            {" "}should be better than{" "}
                            <span className="bg-accent-green p-1 rounded-full italic">today</span>
                        </h3>

                        <p className="my-8.5 font-satoshi font-normal text-lg lg:text-xl text-primary-text/80 leading-relaxed">
                            We are a team of strategists, designers, communicators, and researchers.
                            Together, we believe that progress only happens when you refuse to play things safe.
                        </p>

                        <button className="flex items-center gap-4 font-satoshi font-medium text-xl group cursor-pointer overflow-hidden pr-2">
                            <span className="relative">
                                Read more
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full" />
                            </span>
                            <img className="group-hover:translate-x-2 transition-transform duration-300" src={arrow} alt="" />
                        </button>
                    </motion.div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative">
                            <img src={meetingImg} className="w-full max-w-125 rounded-full relative z-30" alt="Team" />

                            <img className="absolute top-10 -right-7 w-20 md:w-32 z-20 animate-pulse" src={rectangle} alt="Rectangle Icon" />
                        </motion.div>
                    </div>
                </div>

                {/* Second Section: Progress */}
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative">
                            <img src={progress} className="w-full max-w-125 rounded-full relative z-30" alt="Progress" />

                            <img className="absolute z-20 top-4 left-2 w-24 md:w-32 animate-pulse" src={polygon} alt="Polygon Icon" />
                            <img className="absolute z-30 bottom-12 right-7 w-20 md:w-28" src={polygon} alt="Polygon Icon" />
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="font-gerbil font-normal text-4xl md:text-5xl lg:text-[56px] leading-tight">
                            <span className="bg-accent-green p-1 rounded-full mr-2">See</span>
                            how we can help you{" "}
                            <span className="relative inline-block">progress
                                <img className="absolute -bottom-4 left-0 w-full" src={zigzagLine} alt="" />
                            </span>
                        </h3>

                        <p className="my-8.5 font-satoshi font-normal text-lg lg:text-xl text-primary-text/80 leading-relaxed">
                            We add a layer of fearless insights and action that allows change makers to
                            accelerate their progress in brand, design, and social research.
                        </p>

                        <button className="flex items-center gap-4 font-satoshi font-medium text-xl group cursor-pointer overflow-hidden pr-2">
                            <span className="relative">
                                Read more
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full" />
                            </span>
                            <img className="group-hover:translate-x-2 transition-transform duration-300" src={arrow} alt="" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}