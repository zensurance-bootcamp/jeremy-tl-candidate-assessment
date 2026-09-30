import axios from "axios";
import { getApiBaseUrl } from "./baseURL";

const base = getApiBaseUrl();

export async function adjustStock({ sku, qty }: { sku: string; qty: number }) {
  return axios.post(base + "/inventory/adjust", { sku, quantity: -qty });
}

export async function placeOrder({ sku, qty }: { sku: string; qty: number }) {
  return axios.post(base + "/orders", { sku, qty });
}

export async function getStock(skus: string[]) {
  const q = skus.join(",");
  const res = await axios.get(base + "/inventory/stock?skus=" + q);
  return res.data as Record<string, number>;
}
