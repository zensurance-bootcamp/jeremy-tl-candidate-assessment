import React from "react";

export default function StockBadge({ stock }: { stock?: number }) {
  let status = "unknown";
  if (typeof stock === "number") {
    if (stock <= 0) status = "out";
    else if (stock < 5) status = "low";
    else status = "in";
  }

  return (
    <span>
      Stock: {status} ({stock ?? "–"})
    </span>
  );
}
