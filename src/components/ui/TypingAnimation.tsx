"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  sentence: string;
  typingDelay?: number;
  erasingDelay?: number;
  switchDelay?: number;
  className?: string;
}

export const TypingEffect = ({
  className,
  sentence,
  typingDelay = 100,
  erasingDelay = 30,
  switchDelay = 1000,
}: TypingAnimationProps) => {
  const [typingSentence, setTypingSentence] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (typingSentence.length < sentence.length) {
        const typingTimeout = setTimeout(() => {
          setTypingSentence((previous) =>
            sentence.slice(0, previous.length + 1)
          );
        }, typingDelay);
        return () => clearTimeout(typingTimeout);
      } else {
        const switchTimeout = setTimeout(() => setIsTyping(false), switchDelay);
        return () => clearTimeout(switchTimeout);
      }
    } else {
      if (typingSentence.length > 0) {
        const erasingTimeout = setTimeout(() => {
          setTypingSentence((previous) => previous.slice(0, -1));
        }, erasingDelay);
        return () => clearTimeout(erasingTimeout);
      } else {
        const restartTypingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, switchDelay);
        return () => clearTimeout(restartTypingTimeout);
      }
    }
  }, [typingSentence, isTyping, sentence]);

  return (
    <motion.span className={`${className} whitespace-nowrap `}>
      {typingSentence}
    </motion.span>
  );
};
