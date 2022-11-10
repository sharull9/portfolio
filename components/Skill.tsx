import { motion } from "framer-motion";
import Image from "next/image";
import nextLogo from "../public/next-js-icon.png";
type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true,
        }}
        className="rounded-full border border-gray-500 group"
      >
        <Image
          src={nextLogo}
          alt=""
          className="w-24 md:w-28 xl:w-32 h-full object-cover filter group-hover:blur transition duration-200 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 inset-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/40 w-24 md:w-28 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
