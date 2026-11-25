import type { Ref } from "react";
import { Button } from "./Button";
import styles from "./Final.module.css";

export function Final({ ref }: { ref: Ref<HTMLElement> }) {
  return <section ref={ref} className={styles.final}>
    <h2>Digite só quando<br />fizer diferença.</h2>
    <p>Vibetyper para Mac. Em Grafite e Brasa.</p>
    <div className={styles.buttons}>
      <Button>Pré-venda · US$ 149</Button>
      <Button ghost>Comparar modelos</Button>
    </div>
    <small>© 2026 Vibetyper</small>
  </section>;
}
