import React from "react";
import { AgendaCardHeader } from "./AgendaHeader";
import { AgendaCardBody } from "./AgendaBody";
import styles from "./AgendaOrganismo.module.css";

export interface AgendaCardProps {
  number: number;
  title: string;
  ticketId: string;
  description: string;
  lastUpdated: string;
  headerIcon?: React.ReactNode;
  footer?: React.ReactNode;
}

export const AgendaCard: React.FC<AgendaCardProps> = ({
  number,
  title,
  ticketId,
  description,
  lastUpdated,
  headerIcon,
  footer,
}) => {
  return (
    <div className={styles.card}>
      <AgendaCardHeader
        number={number}
        title={title}
        ticketId={ticketId}
        icon={headerIcon}
      />
      <AgendaCardBody
        description={description}
        lastUpdated={lastUpdated}
        footer={footer}
      />
    </div>
  );
};