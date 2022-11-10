import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
type Props = {};

export default function ContactMe({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact me
      </h3>
      <div>
        <h4 className="text-2xl text-center">
          Need Help <span className="font-bold underline">Let's Talk</span>
        </h4>
        <div className="space-y-10 text-center">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="animate-pulse text-[4567de] h-7 w-7" />
            <p className="text-2xl">+91 96255 75079</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="animate-pulse text-[4567de] h-7 w-7" />
            <p className="text-2xl">arafatulla121@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="animate-pulse text-[4567de] h-7 w-7" />
            <p className="text-2xl">k-431</p>
          </div>
        </div>
      </div>
      <form className="flex flex-col space-y-2 w-fit mx-auto">
        <div className="flex space-x-2">
          <input className="formInput" type="text" />
          <input className="formInput" type="text" />
        </div>
        <input className="formInput" type="text" />
        <textarea className="formInput" />
        <button type="submit">Submit</button>
      </form>
      <div className="w-full absolute top-[30%] bg-slate-400/40 left-0 h-[500px] -skew-y-[-21deg]"></div>
    </motion.div>
  );
}
