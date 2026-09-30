import { InventoryService } from '../src/modules/inventory/inventory.service';

describe('InventoryService', () => {
  it('happy path adjusts stock', async () => {
    const repo = { adjust: jest.fn(), getStocks: jest.fn(async (s)=>({[s[0]]: 5})) } as any;
    const svc = new InventoryService(repo);
    const res = await svc.adjust({ sku: 'ABC123', quantity: -1 });
    expect(res.ok).toBe(true);
    expect(repo.adjust).toHaveBeenCalledWith('ABC123', -1);
  });

  it.skip('should prevent negative stock', async () => {
    // TODO: implement by reading current stock and rejecting if < 0
  });
});
