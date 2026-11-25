import type { Ref } from "react";
import styles from "./Labels.module.css";

const layers = [
  ["caps", "Teclas", "PBT duplo · quatro teclas cor de brasa"],
  ["switch", "Interruptores mecânicos", "Lineares de perfil baixo · troca sem solda"],
  ["plate", "Placa de fixação", "Alumínio · sustenta cada interruptor"],
  ["foam", "Espuma acústica", "Látex e IXPE · som mais grave e silencioso"],
  ["pcb", "Placa de circuito", "Troca sem solda · luz por tecla · agentes"],
  ["battery", "Bateria", "2.980 mAh · três meses por carga"],
  ["base", "Corpo inteiriço", "Alumínio reciclado usinado em CNC"],
] as const;

const parts = [
  ["cap", "Tecla de aceitar", "PBT cor de brasa · ✓ gravado"],
  ["switch", "Interruptor linear", "Pré-lubrificado · curso de 3,2 mm"],
  ["spring", "Mola", "Acionamento leve de 45 g"],
  ["pad", "Luz da tecla", "Acende quando há alterações para revisar"],
] as const;

export function Labels({ ref }: { ref: Ref<HTMLDivElement> }) {
  return <div ref={ref} className={styles.labels}>
    {layers.map(([name, title, note]) => <div key={name} className={`${styles.label} ${styles.left}`} data-layer={name}><div className={styles.box}><b>{title}</b><span>{note}</span></div></div>)}
    {parts.map(([name, title, note]) => <div key={name} className={`${styles.label} ${styles.right}`} data-part={name}><div className={styles.box}><b>{title}</b><span>{note}</span></div></div>)}
  </div>;
}
