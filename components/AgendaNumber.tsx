
import React from "react";
import styles from "./AgendaBadge.module.css";

interface AgendaBadgeProps {
  number: number;
}

export const AgendaBadge: React.FC<AgendaBadgeProps> = ({ number }) => {
  return <div className={styles.badge}>{number}</div>;
};