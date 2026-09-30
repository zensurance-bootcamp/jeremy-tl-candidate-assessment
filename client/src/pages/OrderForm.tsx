import React, { useState } from "react";
import { placeOrder, getStock } from "../api/grpcClient";
import StockBadge from "../components/StockBadge";

export default function OrderForm() {
  const [sku, setSku] = useState("ABC123");
  const [qty, setQty] = useState(0);
  const [stock, setStock] = useState<Record<string, number>>({});

  async function refresh() {
    const s = await getStock([sku]);
    setStock(s);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await placeOrder({ sku, qty });
    await refresh();
  }

  return (
    <form onSubmit={submit}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <label>
          SKU
          <input value={sku} onChange={(e) => setSku(e.target.value)} />
        </label>
        <label>
          Qty
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value || "0", 10))}
          />
        </label>
        <button type="submit">Place Order</button>
        <button type="button" onClick={refresh}>
          Refresh Stock
        </button>
      </div>
      <div style={{ marginTop: 12 }}>
        <StockBadge stock={stock[sku]} />
      </div>
    </form>
  );
}
