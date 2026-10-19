"use client";

import { useEffect, useRef, useState } from "react";
import { bootDelays, bootLines } from "@/lib/config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const bootCat = `     /\\_/\\
    ( o.o )--o
  +--+---+----------+
  |  CATGPT 7.0     |
  |  boot: zzz      |
  +-----------------+`;

export function BootScreen({ onEnter }: { onEnter: () => void }) {
  const reduced = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [step, setStep] = useState(reduced ? bootLines.length : 0);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (reduced) {
      setStep(bootLines.length);
      return;
    }
    const timers = bootDelays.map((delay, index) => window.setTimeout(() => setStep(index + 1), delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [reduced]);

  useEffect(() => {
    const timer = window.setTimeout(onEnter, 9000);
    return () => window.clearTimeout(timer);
  }, [onEnter]);

  return (
    <div className="boot" role="dialog" aria-modal="true" aria-label="CatGPT 7.0 boot sequence">
      <div className="boot-inner">
        <pre className="boot-cat">{bootCat}</pre>
        <div className="boot-log">
          {bootLines.map((line, index) => (
            <p key={line} className={step > index ? "on" : undefined}>
              {line}
            </p>
          ))}
        </div>
        <button ref={buttonRef} className="btn btn-primary" type="button" onClick={onEnter}>
          OPEN THE BOX
        </button>
      </div>
    </div>
  );
}
