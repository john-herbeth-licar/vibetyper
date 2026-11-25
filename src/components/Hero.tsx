import type { Ref } from "react";
import { Button } from "./Button";
import styles from "./Hero.module.css";

export function Hero({ ref, cueRef }: { ref: Ref<HTMLElement>; cueRef: Ref<HTMLSpanElement> }) {
  return <header ref={ref} className={styles.hero}>
    <h1>O teclado para<br /><em>criar com IA.</em></h1>
    <p className={styles.lede}>Teclado mecânico de perfil baixo para Mac, com quatro teclas para criar prompts, falar, rejeitar e aceitar — bem onde seus polegares já ficam.</p>
    <div className={styles.cta}>
      <Button>Pré-venda · US$ 149</Button>
      <span ref={cueRef} className={styles.cue}>Role para ver por dentro <span>↓</span></span>
    </div>
  </header>;
}
