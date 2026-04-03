import { motion } from "framer-motion";
import halfCircle2 from '../../assets/images/half-circle2.png'
import arrowLine1 from '../../assets/images/Arrow-Line1.png'
import arrowLine2 from '../../assets/images/Arrow-Line2.png'
import SubscribeButton from "../ui/SubscribeButton";


export default function Subscription() {
    return (
        <section className="relative bg-accent-green mx-auto pt-24 md:pt-35 pb-24">
            <div className="hidden sm:block">
                <img className="w-48 absolute top-0 left-[36%]" src={arrowLine1} alt="Virtical Line1" />
                <img className="w-48 absolute top-0 left-[41%]" src={arrowLine2} alt="Virtical Line1" />
            </div>

            {/* Subscription part */}
            <div className="relative">
                <div className="px-6 md:px-16">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-6xl xl:max-w-7xl mx-auto font-gerbil font-normal text-4xl md:text-5xl lg:text-6xl 2xl:text-[90px] leading-tight md:leading-normal text-center">
                        Subscribe to <br />our newsletter
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-2.5 max-w-3xl mx-auto font-satoshi font-normal text-base md:text-lg lg:text-2xl text-primary-text/80 text-center">
                        To make your stay special and even more memorable
                    </motion.p>

                    <SubscribeButton></SubscribeButton>
                </div>

                {/* Decorative Lines & Shapes */}
                <div className="hidden sm:block absolute top-[32%] right-[1%] lg:right-[3%] scale-75 md:scale-100">
                    <img className="w-14 md:w-20" src={halfCircle2} alt="Half Circle" />
                </div>
            </div>
        </section>
    );
}