import { useEffect, useRef, useState } from "react";
import type { Experience } from "./lib/stage";
import type { SectionName } from "./lib/ui";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Panel } from "./components/Panel";
import { Labels } from "./components/Labels";
import { Final } from "./components/Final";
import styles from "./App.module.css";

const INSIDE = { eyebrow: "Por dentro", title: <>Sete camadas. <br />22 milímetros.</> };
const VIBE_ROW = { eyebrow: "A fileira vibe", title: <>Quatro teclas para <br /><em>criar do seu jeito.</em></> };
const ACCEPT = {
  eyebrow: "A tecla de aceitar",
  title: <>A tecla mais <br />usada <br /><em>para criar com IA.</em></>,
  body: "Feita para 80 milhões de acionamentos, com um mecanismo mais leve e uma luz que acende sempre que uma alteração aguarda sua aprovação.",
};

// The page is one fixed WebGL canvas (the keyboard) under one fixed layer of
// copy; a tall empty <main> gives the scroll that drives both (src/lib/scroll.ts).
export function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const veil = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLElement>(null);
  const hero = useRef<HTMLElement>(null);
  const cue = useRef<HTMLSpanElement>(null);
  const inside = useRef<HTMLElement>(null);
  const vibe = useRef<HTMLElement>(null);
  const key = useRef<HTMLElement>(null);
  const final = useRef<HTMLElement>(null);
  const labels = useRef<HTMLDivElement>(null);
  const experience = useRef<Experience | null>(null);
  const [active, setActive] = useState<SectionName | null>("overview");

  useEffect(() => {
    const cancelled = new AbortController();
    // three.js and the post-processing load in their own chunk
    import("./lib/stage")
      .then(({ startExperience }) =>
        startExperience({
          canvas: canvas.current!,
          ui: {
            veil: veil.current!,
            nav: nav.current!,
            hero: hero.current!,
            scrollCue: cue.current!,
            inside: inside.current!,
            vibeCopy: vibe.current!,
            keyCopy: key.current!,
            final: final.current!,
            labels: labels.current!,
          },
          onSection: setActive,
          cancelled: cancelled.signal,
        }),
      )
      .then((exp) => {
        if (cancelled.signal.aborted) exp?.dispose();
        else experience.current = exp;
      });
    return () => {
      cancelled.abort();
      experience.current?.dispose();
      experience.current = null;
    };
  }, []);

  return (
    <>
      <canvas ref={canvas} className={styles.gl} aria-hidden="true" />
      <div className={styles.ui}>
        <div ref={veil} className={styles.veil} />
        <Nav ref={nav} active={active} onGo={(name) => experience.current?.goToSection(name)} />
        <Hero ref={hero} cueRef={cue} />
        <Panel ref={inside} place="inside" {...INSIDE} />
        <Panel ref={vibe} place="vibe" {...VIBE_ROW} />
        <Labels ref={labels} />
        <Panel ref={key} place="key" {...ACCEPT} />
        <Final ref={final} />
      </div>
      <main className={styles.scroll} aria-label="Vibetyper" />
    </>
  );
}
