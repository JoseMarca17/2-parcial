import React from "react";
import styles from "./AgendaBody.module.css";

interface AgendaCardBodyProps {
  description: string;
  lastUpdated: string;
  footer?: React.ReactNode;
}

export const AgendaCardBody: React.FC<AgendaCardBodyProps> = ({
  description,
  lastUpdated,
  footer,
}) => {
  return (
    <div className={styles.body}>
      <p className={styles.description}>{description}</p>
      <div className={styles.divider} />
      <div className={styles.metaRow}>
        <span className={styles.metaLabel}>Last updated</span>
        <span className={styles.metaValue}>{lastUpdated}</span>
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};