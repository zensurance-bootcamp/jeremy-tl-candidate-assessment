# Orders & Inventory Mini-Service Interview Exercise -- Start Here & Read This Document Thoroughly!

Stack: **NestJS** (server) + **React** (client) + **PostgreSQL** + **REST** + **gRPC**

This repo is intentionally small and contains a few **bugs and design smells** for a live interview exercise.
Candidates should **identify and analyze bugs**, **identify/extend/write a failing test**, **fix it**, and then **refactor toward SOLID** principles.

## Scenario

You are a senior developer in the organization. Your team has developed a new ordering & inventory service and is ready to release it to production. Before go-live, your assignment is to take one final look at the project to ensure that it is complete, meeting the team's commitment to quality and fulfilling the acceptance criteria provided by the stakeholders.

You may use any tools at your disposal **including AI Agents** to make changes and fixes to the codebase, but for the purposes of this exercise, please do not ask AI to analyze the code and identify problems for you.

Please refer to the Business Acceptance Criteria listed below and read through them completely before beginning.

Good luck!

## Thought Starters

1. A junior developer on your team has been working on implementing the `getStock` method in the Inventory Service. They've noticed that when there are hundreds of SKUs in the system and they are refreshing stock for a few dozen SKUs in a single call, the system is very slow.

2. During a customer demo of the new system, a Product Manager received feedback that the web page was confusing and it wasn't clear how they should make an order with more than one product or how they can view the stock levels for more than one product at a time.

3. An intermediate developer on the team has complained during standups that the GRPC requirements were given to the team too late and it wasn't clear how or why they should implement it.

## Quick Start (dev mode)

```bash
cd docker
docker compose up --build
```

### Local Development
- App client: http://localhost:5173
- App server REST: http://localhost:3000
- Postgres: localhost:5433 (user: postgres / password: postgres / db: appdb)

### GitHub CodeSpaces
This project is fully configured for GitHub CodeSpaces! Simply:
1. Open in CodeSpaces 
2. Run `cd docker && docker compose up --build`
3. Access the forwarded ports through the Ports panel
4. The client automatically detects CodeSpaces and connects to the correct API URL

## Business acceptance criteria (black-box behavior)

**1. Place an order (success)**

Given a product exists and has stock ≥ qty and qty > 0,  
when POST /orders { sku, qty },  
then the API returns 201 (or 200) with the created order { id, sku, qty },  
and the product’s stock decreases by qty.

**2. Reject invalid quantity**

Given any product, when order qty ≤ 0,  
then the API returns 400 with a clear validation error,  
and no order record is created and no stock is changed.

**3. Reject insufficient stock**

Given a product with stock s, when qty > s,  
then the API returns 409 (or 422) "insufficient stock",  
with no side effects.

**4. Request Stock Level Refresh**

Given a list of comma-separated SKUs,  
then the server should return information for all requested SKUs  
and current stock levels for all SKUs returned should be displayed in the UI.

**5. Client UI expectations**

- The order form prevents submitting with qty ≤ 0 (inline validation).
- The "Stock" badge reflects the latest server value after a successful order, and after refresh.
- Unknown stock level shown as a dash "–".

## Technical Requirements

**Atomicity**: creating an order and decrementing stock is transactional — either both persist or neither does.

**Testing**: unit tests and e2e tests should cover the acceptance criteria listed above.

**Design**: controllers are thin, business rules live in services, and persistence is done in repositories.
