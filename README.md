# Technical Team Lead Interview Exercise

**Role:** Technical Team Lead (60-70% Management / 30-40% IC)  
**Stack:** NestJS (server) + React (client) + PostgreSQL + REST + gRPC

---

## Interview Format (90 minutes)

| Segment | Duration | Focus |
|---------|----------|-------|
| Intro & warm-up | 5 min | Set expectations, explain format |
| **Code Review Exercise** | **30 min** | **Review, identify issues, fix critical bug** |
| Leadership Scenario | 30 min | System design + team leadership |
| Buffer | 20 min | Overflow or deeper probing |
| Q&A | 5 min | Candidate questions |

> **You are here: Code Review Exercise.** Complete this section, then proceed to [Leadership Scenario](#leadership-scenario-30-min) with your interviewer.

---

## Scenario

You are a Technical Team Lead at an insurance company. Your team has developed a new ordering & inventory service and is preparing to release it to production.

A **junior developer** on your team wrote the inventory stock-fetching functionality. During testing, the team noticed that **when there are hundreds of SKUs in the system and they refresh stock for a few dozen SKUs in a single call, the system becomes very slow**.

Your task is to:

1. **Review the code** as if this junior dev submitted it for review (10 min)
   - Identify the issues
   - Write review comments (can be verbal or written)
   - Focus on mentorship: how would you explain the problems to help them learn?

2. **Fix the most critical bug** and add a test (15 min)
   - The performance issue in `server/src/modules/inventory/inventory.repo.ts`

3. **Discussion** (5 min)
   - What's the single most important thing to fix first and why?
   - How would you prioritize the other issues you found?

---

## Key File to Review

**`server/src/modules/inventory/inventory.repo.ts`** - This is where the performance issue lives.

Other files that may be relevant for context:
- `server/src/modules/inventory/inventory.service.ts`
- `server/src/modules/orders/orders.service.ts`
- `server/test/inventory.service.spec.ts`

---

## Quick Start

### GitHub Codespaces (Recommended)

This project is fully configured for GitHub Codespaces — **it starts automatically!**

1. Click the green **"Code"** button → **"Codespaces"** tab → **"Create codespace on main"**
2. Wait for the environment to build (1-2 minutes)
3. Docker containers start automatically — no commands needed
4. Access the app via the **Ports panel** at the bottom of VS Code

### Local Development (Fallback)

If running locally:

```bash
cd docker
docker compose up --build
```

- App client: http://localhost:5173
- App server REST: http://localhost:3000
- Postgres: localhost:5433 (user: postgres / password: postgres / db: appdb)

---

## Leadership Scenario (30 min)

> **You are here after completing the Code Review Exercise.** This section is a verbal discussion with your interviewer - no coding required.

**Prompt:** "Design a rate-change propagation system - when an insurer updates a rate table, how does it flow through quoting, renewals, and in-flight checkouts without breaking anything?"

**Follow-up leadership questions:**
- How would you break this work down across a team of 4 engineers?
- A senior dev disagrees with your proposed approach and wants to go a different direction - how do you handle it?
- One of your devs is consistently delivering late on their portion - what's your process?
- How would you communicate the technical risk of this project to a non-technical PM?
