import { motion } from "framer-motion";
import Image from "next/image";
import companyLogo from "../public/logo.webp";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[500px] xl:w-[600px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{
          once: true,
        }}
        className="bg-white rounded-full overflow-hidden w-32 h-32 xl:w-[200px] xl:h-[200px] relative flex justify-center items-center"
      >
        <Image
          src={companyLogo}
          alt="company logo"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">Web Designer</h4>
        <p className="font-bold text-lg md:text-2xl  uppercase mt-1">
          Adaan Digital Solutions
        </p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 text-gray-300">July 16, 2022 - Ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg text-left">
          <li>summary</li>
          <li>summary</li>
          <li>summary</li>
          <li>summary</li>
          <li>summary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
