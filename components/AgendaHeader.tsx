import React from "react";
import { AgendaBadge } from "./AgendaNumber";
import styles from "./AgendaHeader.module.css";

interface AgendaCardHeaderProps {
  number: number;
  title: string;
  ticketId: string;
  icon?: React.ReactNode;
}


export const AgendaCardHeader: React.FC<AgendaCardHeaderProps> = ({
  number,
  title,
  ticketId,
  icon,
}) => {
  return (
    <div className={styles.header}>
      <AgendaBadge number={number} />
      <span className={styles.title}>{title}</span>
      <span className={styles.ticketId}>{ticketId}</span>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
    </div>
  );
};