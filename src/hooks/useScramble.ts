import { useEffect, useRef, useState } from "react";
import { SCRAMBLE_CHARS } from "../constants/data";

function useScramble(target: string, trigger: boolean, speed = 40) {
  const [display, setDisplay] = useState(target);
  const frame = useRef(0);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    clearInterval(frame.current);
    frame.current = window.setInterval(() => {
      setDisplay(
        target
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) return target[idx];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("")
      );
      iteration += 0.6;
      if (iteration >= target.length) clearInterval(frame.current);
    }, speed);
    return () => clearInterval(frame.current);
  }, [target, trigger, speed]);

  return display;
}

export default useScramble;
