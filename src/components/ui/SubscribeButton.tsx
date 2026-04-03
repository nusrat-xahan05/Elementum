import { motion } from "framer-motion";

export default function SubscribeButton() {
  return (
    <div className="flex justify-center">
      <motion.button
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden mt-10 py-5 px-12 rounded-full font-satoshi text-xl font-bold text-white bg-primary-text cursor-pointer group">

        <span className="absolute inset-0 bg-highlight translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

        <span className="relative z-10">
          Subscribe Now
        </span>
      </motion.button>
    </div>
  );
}