import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "../public/profile.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="relative mt-24 mb-0 md:mt-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] overflow-hidden rounded-full md:rounded-lg"
      >
        <Image
          src={profilePicture}
          alt="userPhoto"
          className="object-cover absolute top-[-19px]"
        />
      </motion.div>
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl text-semibold">
          Here is some{" "}
          <span className="underline decoration-[#333333]">text</span> for you
          to read
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          provident officiis consequatur ut. Porro suscipit ab totam modi aut
          debitis veritatis vel voluptatum sapiente animi, minus vitae
          voluptatem eum laudantium.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
