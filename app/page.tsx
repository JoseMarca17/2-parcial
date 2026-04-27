import Image from "next/image";
import { AgendaListTemplate } from "@/components/AgendaTemplate";

export default function Home() {  // Ejemplo de datos
  const items = [
    {
      title: "Reunión de equipo",
      ticketId: "TCK-001",
      description: "Discusión semanal",
      lastUpdated: "2026-04-27",
    },
    {
      title: "Presentación",
      ticketId: "TCK-002",
      description: "Demo del proyecto",
      lastUpdated: "2026-04-27",
    },
  ];

  return (
    <main>
      <AgendaListTemplate
        title="Mi Agenda"
        subtitle="Eventos de hoy"
        items={items}
        startIndex={1}
      />
    </main>
  );
}
