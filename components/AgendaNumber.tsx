
import React from "react";

interface AgendaBadgeProps {
  number: number;
}


export const AgendaBadge: React.FC<AgendaBadgeProps> = ({ number }) => {
  return <div className='number' >{number}</div>;
};