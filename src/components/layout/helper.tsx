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
        <section className="relative py-20 px-6 md:px-16 overflow-hidden">
            {/* Background Decorative Line */}
            <img
                src={bgLine}
                className="absolute top-1/2 left-[6%] w-full opacity-60 pointer-events-none z-0 translate-y-[-50%]"
                alt="Background zig zag line"
            />

            <div className="space-y-40">
                <div className="relative flex flex-col lg:flex-row gap-8 xl:gap-16 justify-between items-center">
                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2">
                        <motion.h3
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-6xl xl:max-w-7xl mx-auto font-gerbil font-normal text-4xl md:text-5xl lg:text-[56px] leading-normal">
                            <span className="relative">Tomorrow
                                <img className="absolute -bottom-2 left-0 w-full" src={zigzagLine} alt="zig-zag Line" />
                            </span>
                            {" "}should
                            <br />
                            be better than{" "}
                            <span className="bg-accent-green p-1 rounded-full">today</span>
                        </motion.h3>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="my-8.5 font-satoshi font-normal text-base md:text-lg lg:text-2xl text-primary-text/80 text-left">
                            We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
                        </motion.p>

                        <button className="flex items-center gap-4 font-satoshi font-medium text-xl group cursor-pointer">
                            Read more
                            <img className="group-hover:translate-x-2 transition-transform" src={arrow} alt="Arrow Line" />
                        </button>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-30 overflow-hidden w-[400px] h-[400px] 2xl:w-[600px] 2xl:h-[600px] text-right">
                        <img src={meetingImg} className="" alt="Team" />
                    </motion.div>

                    <img className="absolute top-28 -right-10 z-10 w-32" src={rectangle} alt="Rectangle Icon" />

                    <div className="absolute top-0 left-[50%] right-[50%] translate-[50%, 50%] w-64 h-64 bg-red-300 blur-3xl rounded-full -z-10" />
                </div>

                <div className="relative flex flex-col lg:flex-row gap-8 xl:gap-16 justify-between items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 overflow-hidden w-[400px] h-[400px] 2xl:w-[600px] 2xl:h-[600px] text-left">
                        <img src={progress} className="" alt="Team Prograss" />
                    </motion.div>

                    <img className="absolute top-[15%] left-0 w-32" src={polygon} alt="Polygon Icon" />

                    <img className="absolute bottom-[14%] left-[25%] z-10 w-32" src={polygon} alt="Polygon Icon" />

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 ">
                        <motion.h3
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-6xl xl:max-w-7xl mx-auto font-gerbil font-normal text-4xl md:text-5xl lg:text-[56px] leading-normal">
                            <span className="bg-accent-green p-1 rounded-full">See</span>
                            {" "}how we can
                            <br />
                            help you{" "}
                            <span className="relative">progress
                                <img className="absolute -bottom-2 left-0 w-full" src={zigzagLine} alt="zig-zag Line" />
                            </span>
                        </motion.h3>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="my-8.5 font-satoshi font-normal text-base md:text-lg lg:text-2xl text-primary-text/80 text-left">
                            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
                        </motion.p>

                        <button className="flex items-center gap-4 font-satoshi font-medium text-xl group cursor-pointer">
                            Read more
                            <img className="group-hover:translate-x-2 transition-transform" src={arrow} alt="Arrow Line" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}