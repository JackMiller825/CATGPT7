"use client";

import { useCallback, useEffect, useState } from "react";

const idle = "idle: awaiting first paw.";

export function BiscuitCompiler() {
  const [target, setTarget] = useState<number | null>(null);
  const [opened, setOpened] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);
  const [log, setLog] = useState(idle);
  const [bad, setBad] = useState(false);

  const reset = useCallback((quiet: boolean) => {
    setTarget(Math.floor(Math.random() * 3));
    setOpened([]);
    setSolved(false);
    setBad(false);
    setLog(quiet ? idle : "recompiled: three boxes, one cursor. awaiting first paw.");
  }, []);

  useEffect(() => {
    reset(true);
  }, [reset]);

  function inspect(index: number, button: HTMLButtonElement) {
    if (target === null) return;
    if (solved || opened.includes(index)) {
      setBad(false);
      setLog(
        solved
          ? "exit 0. press recompile to shuffle the cursor."
          : `box ${index + 1} already inspected. the state is visible for a reason.`
      );
      button.focus();
      return;
    }

    const next = [...opened, index];
    setOpened(next);
    if (index === target) {
      setSolved(true);
      setBad(false);
      setLog(
        `caught the cursor in ${next.length} ${next.length === 1 ? "inspection. suspicious." : "inspections. no ticket filed."}`
      );
    } else {
      setBad(true);
      setLog(`box ${index + 1}: empty, which met specifications. ${3 - next.length} left.`);
    }
    button.focus();
  }

  return (
    <section className="pn" id="box">
      <header className="pn-h">
        <h2>The Biscuit Compiler</h2>
        <span>three boxes · one cursor</span>
      </header>
      <div className="pn-b box-wrap">
        <p className="box-intro">
          One box holds the cursor. Inspect boxes until you find it. Inspected boxes stay visibly inspected, and the
          keyboard keeps its focus after every press.
        </p>
        <div className="boxes" role="group" aria-label="Three cardboard boxes">
          {[0, 1, 2].map((index) => {
            const isOpen = opened.includes(index);
            const hit = isOpen && index === target;
            const empty = isOpen && index !== target;
            return (
              <button
                key={index}
                type="button"
                className={`boxbtn${isOpen ? " open" : ""}${hit ? " hit" : ""}${empty ? " empty" : ""}`}
                aria-pressed={isOpen}
                onClick={(event) => inspect(index, event.currentTarget)}
              >
                <span className="lid" />
                <span className="face" />
                <span className="lbl">box {index + 1}</span>
              </button>
            );
          })}
        </div>
        <p className={`box-log${bad ? " bad" : ""}`} role="status" aria-live="polite">
          {log}
        </p>
        <button className="btn btn-ghost" type="button" onClick={() => reset(false)}>
          recompile
        </button>
      </div>
    </section>
  );
}
