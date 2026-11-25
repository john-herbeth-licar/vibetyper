import type { ReactNode } from "react";
import styles from "./Button.module.css";

export function Button({ href = "#", small = false, ghost = false, children }: {
  href?: string;
  small?: boolean;
  ghost?: boolean;
  children: ReactNode;
}) {
  return <a className={[styles.button, small && styles.small, ghost && styles.ghost].filter(Boolean).join(" ")} href={href}>{children}</a>;
}
