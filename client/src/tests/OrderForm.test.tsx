import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

vi.mock("../api/grpcClient", () => ({
  placeOrder: vi.fn(async () => ({ data: { id: 1, sku: "ABC123", qty: 1 } })),
  getStock: vi.fn(async () => ({ ABC123: 4 })),
}));

describe("OrderForm", () => {
  it("submits an order (happy path)", async () => {
    render(<App />);
    const btn = await screen.findByText("Place Order");
    fireEvent.click(btn);
    expect(await screen.findByText(/Stock:/)).toBeInTheDocument();
  });

  it.skip("should prevent zero or negative qty in UI", () => {
    // Skipping this for now.
  });
});
