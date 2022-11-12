import Image from "next/image";
import { motion } from "framer-motion";
import nextLogo from "../public/next-js-icon.png";
type Props = {
  name: string;
  index: number;
};

export default function Project({ name, index }: Props) {
  const i = 0;
  return (
    <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-20 xl:p-44 h-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{once: true}}
        className="relative w-24 md:w-28 xl:w-32"
      >
        <Image alt="" src={nextLogo} className="w-full h-full object-cover" />
      </motion.div>
      <div>
        <h4 className="text-xl text-center">
          {index}. Project{" "}
          <span className="font-bold text-2xl">{name.toUpperCase()}</span>
        </h4>
        <p className="text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          voluptatem tempore similique quas fuga est sit accusantium illo
          consequatur sunt quis nobis fugit quidem blanditiis quasi soluta
          repudiandae odio aperiam, consequuntur reprehenderit nesciunt
          perspiciatis tempora dolore! Dolore vitae rem adipisci?
        </p>
      </div>
    </div>
  );
}
