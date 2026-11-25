import type { Ref } from "react";
import { Button } from "./Button";
import type { SectionName } from "../lib/ui";
import styles from "./Nav.module.css";

const links: { name: SectionName; label: string }[] = [
  { name: "overview", label: "Visão geral" },
  { name: "vibe-row", label: "Fileira vibe" },
  { name: "inside", label: "Por dentro" },
  { name: "specs", label: "Detalhes" },
];

export function Nav({ ref, active, onGo }: {
  ref: Ref<HTMLElement>;
  active: SectionName | null;
  onGo: (name: SectionName) => void;
}) {
  const go = (name: SectionName) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onGo(name);
  };

  return <nav ref={ref} className={styles.nav} aria-label="Navegação principal">
    <a className={styles.logo} href="#overview" onClick={go("overview")}><span>vibe</span>typer</a>
    <div className={styles.links}>
      {links.map(({ name, label }) => <a key={name} href={`#${name}`} onClick={go(name)} aria-current={active === name ? "true" : undefined} className={active === name ? styles.active : undefined}>{label}</a>)}
    </div>
    <Button small>Pré-venda</Button>
  </nav>;
}
