import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import profilePicture from "../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Arafat", "<loveToCode />", "NeedACoffee.js"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.1, 0.2, 0.8, 0.1, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative h-32 w-32 mx-auto"
      >
        <Image
          src={profilePicture}
          alt="profile-picture"
          className="rounded-full h-32 w-32 object-cover"
        />
      </motion.div>
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase text-gray-500 tracking-[15px]">
          Front end developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#45frt5" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
