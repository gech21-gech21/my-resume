"use client";
import { useEffect, useState } from "react";

export default function HandwritingText() {
  const [displayText, setDisplayText] = useState("I am a ");
  const [phase, setPhase] = useState("typing"); // typing, pausing, deleting
  const [currentIndex, setCurrentIndex] = useState(0);

  const prefix = "I am a ";
  const phrases = [
    "full-stack web developer !!",
    "computer science student !!",
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentIndex];
    const typingSpeed = 100;
    const deletingSpeed = 0;
    const pauseDuration = 1500;

    if (phase === "typing") {
      const currentLength = displayText.length - prefix.length;
      if (currentLength < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(
            prefix + currentPhrase.substring(0, currentLength + 1)
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("pausing");
        }, pauseDuration);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, pauseDuration);
    } else if (phase === "deleting") {
      const currentLength = displayText.length - prefix.length;
      if (currentLength > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            prefix + currentPhrase.substring(0, currentLength - 1)
          );
        }, deletingSpeed);
      } else {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, currentIndex]);

  return (
    <div className="text-center min-h-[60px] flex items-center justify-center">
      <div className="text-4xl font-bold inline-block">
        <span className="font-sans text-gray-800">{prefix}</span>
        <span className="font-caveat text-blue-700">
          {displayText.substring(prefix.length)}
          {phase === "typing" &&
            displayText.length - prefix.length <
              phrases[currentIndex].length && (
              <span className="ml-1 inline-block h-10 w-1 bg-blue-700 animate-pulse" />
            )}
        </span>
      </div>
    </div>
  );
}
