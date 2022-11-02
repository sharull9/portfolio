import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Arafat", "Sharull"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="p-5">
      <h1>
        {text}
        <Cursor cursorColor="#45frt5" />
      </h1>
    </div>
  );
}

export default Hero;
