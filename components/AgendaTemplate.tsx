import React from "react";
import { AgendaCard, AgendaCardProps } from "./AgendaOrganismo";
import styles from "./AgendaListTemplate.module.css";

export interface AgendaListTemplateProps {
  title?: string;
  subtitle?: string;
  items: Omit<AgendaCardProps, "number">[];
  startIndex?: number;
}

export const AgendaListTemplate: React.FC<AgendaListTemplateProps> = ({
  title = "Agenda",
  subtitle,
  items,
  startIndex = 1,
}) => {
  return (
    <div className={styles.template}>
      {/* Page header */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <span className={styles.badge}>{items.length} items</span>
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.divider} />

      {/* Cards list */}
      <div className={styles.list}>
        {items.length === 0 ? (
          <p className={styles.emptyState}>No agenda items yet.</p>
        ) : (
          items.map((item, idx) => (
            <AgendaCard
              key={`${item.ticketId}-${idx}`}
              number={startIndex + idx}
              {...item}
            />
          ))
        )}
      </div>
    </div>
  );
};

const MOCK_ITEMS: Omit<AgendaCardProps, "number">[] = [
  {
    title: "Agenda / Topic",
    ticketId: "SAAS-0001",
    description: "Review sprint goals and align on priorities for the upcoming cycle.",
    lastUpdated: "3/8/2020",
    footer: <a className={styles.tag} href="#">helper/note/future</a>,
  },
  {
    title: "Design Review",
    ticketId: "SAAS-0002",
    description: "Walk through new UI components and collect feedback from the team.",
    lastUpdated: "4/12/2020",
    footer: <a className={styles.tag} href="#">design/feedback</a>,
  },
  {
    title: "Backend Sync",
    ticketId: "SAAS-0003",
    description: "Discuss API changes, migration scripts and deployment timeline.",
    lastUpdated: "4/15/2020",
  },
];

export const AgendaListTemplateMock: React.FC = () => (
  <AgendaListTemplate
    title="Sprint Agenda"
    subtitle="Week 14 — April 2020"
    items={MOCK_ITEMS}
  />
);