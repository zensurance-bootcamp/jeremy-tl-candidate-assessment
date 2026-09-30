CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  stock INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  sku TEXT NOT NULL REFERENCES products(sku),
  qty INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO products (sku, name, stock) VALUES
('ABC123', 'Widget', 10),
('DEF456', 'Gadget', 5),
('GHI789', 'Doohickey', 0)
ON CONFLICT (sku) DO NOTHING;
