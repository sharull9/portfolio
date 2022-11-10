import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 max-w-7xl w-full mx-auto">
      <div className="flex flex-row items-center justify-between">
        {/* social icons */}
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            url="https://github.com/sharull9"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/sharull9"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/sharull9"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="cursor-pointer"
        >
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 font-semibold">
            Get in touch
          </p>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
