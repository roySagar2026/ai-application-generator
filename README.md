# AI Application Generator

> **NLP-Based System for Transforming Natural Language Descriptions into Executable Application Configurations**

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.9%2B-3776AB?logo=python)](https://www.python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Groq](https://img.shields.io/badge/LLM-Groq%20API-F55036)](https://groq.com/)
[![License](https://img.shields.io/badge/License-MIT-22C55E.svg)](LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [System Architecture](#system-architecture)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Performance](#performance)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**AI Application Generator** is a production-grade, full-stack system that converts natural language software requirements into complete, structured application configurations — in under 60 seconds.

Powered by a **4-stage NLP pipeline** and **Groq's high-throughput LLM inference**, it produces validated JSON schemas covering every layer of a modern application:

| Output Schema | Scope |
|---|---|
| **UI Architecture** | Pages, layouts, components, navigation |
| **API Specification** | Endpoints, methods, request/response contracts |
| **Database Schema** | Tables, relationships, constraints |
| **Auth Configuration** | Roles, permissions, RBAC workflows |
| **Business Logic** | Rules, workflows, premium gating |

### Problem Statement

Bootstrapping a new application typically requires several sequential manual steps: requirements analysis, architecture design, database modelling, API specification, UI planning, and authentication setup. This process is time-intensive and error-prone.

**This system automates the full specification phase**, collapsing hours of design work into a single natural language prompt.

### Example

**Input prompt:**
```
Build a CRM with login, contacts, dashboard, role-based access, premium features with payments, and admin analytics.
```

**Generated output:**
```json
{
  "uiSchema":       { "pages": [...], "layouts": [...], "components": [...] },
  "apiSchema":      { "endpoints": [...], "validation": [...] },
  "databaseSchema": { "tables": [...], "relationships": [...] },
  "authConfig":     { "roles": [...], "permissions": [...] },
  "businessLogic":  { "workflows": [...], "rules": [...] }
}
```

---

## System Architecture

### 4-Stage Generation Pipeline

```
┌──────────────────────────────────────────────┐
│              Natural Language Input          │
│     "Build a CRM with login and contacts"    │
└─────────────────────┬────────────────────────┘
                      │
          ┌───────────▼───────────┐
          │  Stage A              │
          │  Intent Extraction    │
          │  ─────────────────    │
          │  Parse requirements   │
          │  Extract entities     │
          │  Identify workflows   │
          │  Map user roles       │
          └───────────┬───────────┘
                      │
          ┌───────────▼───────────┐
          │  Stage B              │
          │  System Design        │
          │  ─────────────────    │
          │  Architecture plan    │
          │  Module definition    │
          │  Data flow mapping    │
          │  User journey design  │
          └───────────┬───────────┘
                      │
     ┌────────────────▼─────────────────────┐
     │  Stage C — Schema Generation         │
     │  ──────────────────────────────────  │
     │  ┌─────────────┐  ┌─────────────┐   │
     │  │  UI Schema  │  │  API Schema │   │
     │  │  Pages/     │  │  Endpoints  │   │
     │  │  Layouts    │  │  Methods    │   │
     │  └─────────────┘  └─────────────┘   │
     │  ┌─────────────┐  ┌─────────────┐   │
     │  │  DB Schema  │  │ Auth Config │   │
     │  │  Tables/    │  │ Roles/      │   │
     │  │  Relations  │  │ Permissions │   │
     │  └─────────────┘  └─────────────┘   │
     └────────────────┬─────────────────────┘
                      │
          ┌───────────▼───────────┐
          │  Stage D              │
          │  Validation &         │
          │  Refinement           │
          │  ─────────────────    │
          │  Schema consistency   │
          │  Error repair         │
          │  Business logic gen   │
          │  Auth workflow glue   │
          └───────────┬───────────┘
                      │
     ┌────────────────▼─────────────────────┐
     │         Executable Output            │
     │  {                                   │
     │    uiSchema, apiSchema,              │
     │    databaseSchema, authConfig,       │
     │    businessLogic                     │
     │  }                                   │
     └──────────────────────────────────────┘
```

### Technology Layers

```
┌──────────────────────────────────────────────┐
│           Frontend  (Next.js 14)             │
│  Next.js · React 18 · TypeScript · Tailwind  │
└──────────────────────┬───────────────────────┘
                       │  HTTP / REST
┌──────────────────────▼───────────────────────┐
│           Backend  (FastAPI)                 │
│  FastAPI · CORS · SQLAlchemy · Pydantic      │
└──────────────────────┬───────────────────────┘
                       │
┌──────────────────────▼───────────────────────┐
│       Generation Engine  (LLM Pipeline)      │
│  Groq API · Mixtral-8x7b · JSON validation   │
└──────────────────────┬───────────────────────┘
                       │
┌──────────────────────▼───────────────────────┐
│           Data Layer  (SQLite / PostgreSQL)  │
│  Configuration storage · Generation history  │
└──────────────────────────────────────────────┘
```

---

## Key Features

**Multi-Stage NLP Pipeline**
- Stage A: Intent and entity extraction from free-form text
- Stage B: Full system architecture and module planning
- Stage C: Parallel schema generation across all layers
- Stage D: Cross-schema validation and automated repair

**Comprehensive Output Coverage**
- UI architecture: pages, layouts, and component tree
- RESTful API specification with request/response contracts
- Relational database design with foreign keys and constraints
- RBAC authentication and authorization configuration
- Business logic workflows with rule definitions

**High-Performance Inference**
- Groq API delivers 100+ tokens/second throughput
- Optimised prompt templates for consistent, parseable JSON
- Graceful fallbacks on malformed or partial LLM responses

**Production-Ready Engineering**
- Type-safe frontend with TypeScript
- Persistent history via SQLite or PostgreSQL
- CORS configuration and input validation
- Structured logging and retry handling

**Developer Experience**
- Interactive prompt input with built-in examples
- Tabbed schema viewer (UI / API / DB / Auth / Logic)
- One-click JSON download
- Real-time generation progress feedback

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Frontend Framework | Next.js | 14.0+ |
| UI Library | React | 18.2+ |
| Language (Frontend) | TypeScript | 5.2+ |
| Styling | Tailwind CSS | 3.3+ |
| Backend Framework | FastAPI | 0.104+ |
| Language (Backend) | Python | 3.9+ |
| ORM | SQLAlchemy | 2.0+ |
| Database | SQLite / PostgreSQL | — |
| LLM Provider | Groq API (Mixtral-8x7b) | — |
| Frontend Deploy | Vercel | — |
| Backend Deploy | Railway | — |

---

## Quick Start

**Prerequisites:** Node.js 18+, Python 3.9+, a [Groq API key](https://console.groq.com)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/ai-application-generator.git
cd ai-application-generator

# 2. Install frontend dependencies
npm install

# 3. Install backend dependencies
cd backend && pip install -r requirements.txt && cd ..

# 4. Configure environment variables
echo "NEXT_PUBLIC_GROQ_API_KEY=your_key_here"  > .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" >> .env.local

echo "GROQ_API_KEY=your_key_here"                  > backend/.env
echo "DATABASE_URL=sqlite:///./ai_generator.db"    >> backend/.env

# 5. Start backend (Terminal 1)
cd backend && python main.py

# 6. Start frontend (Terminal 2)
npm run dev

# 7. Open http://localhost:3000
```

---

## Installation

### Step 1 — Clone Repository

```bash
git clone https://github.com/yourusername/ai-application-generator.git
cd ai-application-generator
```

### Step 2 — Frontend Dependencies

```bash
npm install
```

Core packages: `next@14`, `react@18`, `typescript@5.2`, `tailwindcss@3.3`

### Step 3 — Backend Dependencies

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate          # macOS / Linux
# venv\Scripts\activate           # Windows

pip install -r requirements.txt
cd ..
```

### Step 4 — Obtain Groq API Key

1. Sign in at [console.groq.com](https://console.groq.com)
2. Navigate to **API Keys → Create new key**
3. Copy the key (starts with `gsk_`)

---

## Configuration

### Frontend — `.env.local`

```bash
# Required
NEXT_PUBLIC_GROQ_API_KEY=gsk_your_api_key_here
NEXT_PUBLIC_API_URL=http://localhost:8000

NODE_ENV=development
```

### Backend — `backend/.env`

```bash
# Required
GROQ_API_KEY=gsk_your_api_key_here

# Database (choose one)
DATABASE_URL=sqlite:///./ai_generator.db
# DATABASE_URL=postgresql://user:password@localhost:5432/ai_generator

# Server
API_HOST=0.0.0.0
API_PORT=8000
ENVIRONMENT=development
```

### Database Options

| Option | Connection String | Use Case |
|---|---|---|
| SQLite (default) | `sqlite:///./ai_generator.db` | Local development |
| Local PostgreSQL | `postgresql://user:pass@localhost:5432/db` | Production self-hosted |
| Managed PostgreSQL | `postgresql://user:pass@host:port/db` | Cloud deployment |

---

## Usage

### Start Development Servers

**Terminal 1 — Backend:**
```bash
cd backend
python main.py
# INFO: Uvicorn running on http://0.0.0.0:8000
```

**Terminal 2 — Frontend:**
```bash
npm run dev
# Ready on http://localhost:3000
```

### Generate a Configuration

1. Open `http://localhost:3000`
2. Enter a natural language description, for example:
   ```
   Build a CRM with login, contacts, dashboard, and role-based access control.
   ```
3. Click **Generate Configuration** and wait 30–60 seconds
4. Browse the output across six tabs:

| Tab | Contents |
|---|---|
| Overview | Metadata, stage completion status |
| UI Schema | Pages, layouts, component tree |
| API Schema | Endpoints, HTTP methods |
| Database | Tables, relationships, constraints |
| Auth Config | Roles, permissions, auth flows |
| Business Logic | Workflows, rules, gating logic |

5. Click **Download Configuration JSON** to export

---

## API Reference

**Base URL:** `http://localhost:8000`

### `GET /health`

Returns service health status.

```json
{ "status": "healthy", "service": "ai-application-generator" }
```

---

### `POST /api/generate`

Generates a full application configuration from a natural language prompt.

**Request:**
```json
{ "prompt": "Build a CRM with login, contacts, and dashboard" }
```

**Response (success):**
```json
{
  "success": true,
  "configuration": {
    "uiSchema": {},
    "apiSchema": {},
    "databaseSchema": {},
    "authConfig": {},
    "businessLogic": {}
  },
  "stages": [
    { "name": "Intent Extraction", "status": "completed" }
  ],
  "metadata": {
    "generatedAt": "2024-06-03T10:30:00",
    "processingTime": 45.23
  }
}
```

**Response (error):**
```json
{ "success": false, "error": "Prompt cannot be empty" }
```

---

### `GET /api/history`

Returns paginated generation history.

```json
{
  "history": [
    {
      "id": 1,
      "prompt": "Build a CRM...",
      "created_at": "2024-06-03T10:30:00",
      "processing_time": 45230
    }
  ]
}
```

---

### Response Schema Reference (TypeScript)

```typescript
interface Configuration {
  uiSchema: {
    pages:      Page[];
    layouts:    Layout[];
    components: Component[];
    navigation: Navigation;
  };
  apiSchema: {
    baseUrl:   string;
    endpoints: Endpoint[];
  };
  databaseSchema: {
    tables:        Table[];
    relationships: Relationship[];
  };
  authConfig: {
    roles:       Role[];
    permissions: Permission[];
    authMethods: string[];
  };
  businessLogic: {
    workflows: Workflow[];
    rules:     Rule[];
  };
}
```

---

## Performance

| Metric | Value | Notes |
|---|---|---|
| Average generation time | 30–60 s | Scales with prompt complexity |
| LLM inference speed | 100+ tokens/s | Groq API |
| Success rate | ~95% | Including fallback handling |
| API response time (non-LLM) | < 100 ms | — |
| DB query time | < 50 ms | History retrieval |

### Sample Benchmark

```
Prompt: "Build a CRM with login, contacts, and dashboard"

Stage A — Intent Extraction   12.3 s   350 tokens
Stage B — System Design       10.5 s   420 tokens
Stage C — Schema Generation   18.2 s  1200 tokens
Stage D — Refinement           8.9 s   380 tokens
─────────────────────────────────────────────────
Total                         49.9 s  2350 tokens
```

---

## Deployment

### Option 1: Vercel + Railway (Recommended)

**Frontend → Vercel:**
```bash
# Connect your GitHub repo at vercel.com/import
# Set environment variables:
#   NEXT_PUBLIC_GROQ_API_KEY
#   NEXT_PUBLIC_API_URL  (your Railway backend URL)
vercel deploy
```

**Backend → Railway:**
```bash
# Create a new Railway project, connect your repo
# Set environment variables:
#   GROQ_API_KEY
#   DATABASE_URL  (use Railway's managed Postgres)
# Deploy triggers automatically on push to main
```

---

### Option 2: Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  frontend:
    build: { context: ., dockerfile: Dockerfile.frontend }
    ports: ["3000:3000"]
    environment:
      NEXT_PUBLIC_API_URL: http://backend:8000
      NEXT_PUBLIC_GROQ_API_KEY: ${GROQ_API_KEY}

  backend:
    build: { context: ./backend, dockerfile: Dockerfile }
    ports: ["8000:8000"]
    environment:
      GROQ_API_KEY: ${GROQ_API_KEY}
      DATABASE_URL: postgresql://postgres:password@db:5432/ai_generator

  db:
    image: postgres:15
    ports: ["5432:5432"]
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: ai_generator
```

```bash
docker-compose up -d
```

---

## Project Structure

```
ai-application-generator/
│
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── .env.local                    # Frontend environment variables (not committed)
├── .env.example                  # Environment template
├── .gitignore
│
├── app/                          # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/generate/
│       └── route.ts              # API route handler
│
├── components/
│   ├── Generator.tsx             # Prompt input form
│   └── OutputViewer.tsx          # Tabbed schema viewer
│
├── types/
│   └── index.ts                  # Shared TypeScript types
│
└── backend/                      # FastAPI application
    ├── main.py                   # Application entry point
    ├── pipeline.py               # 4-stage NLP generation engine
    ├── models.py                 # Pydantic request/response models
    ├── config.py                 # Environment configuration
    ├── database.py               # SQLAlchemy setup
    ├── requirements.txt
    ├── .env                      # Backend environment variables (not committed)
    ├── .env.example
```

| File | Purpose |
|---|---|
| `backend/pipeline.py` | Core 4-stage NLP generation logic |
| `backend/main.py` | FastAPI routes and CORS setup |
| `app/api/generate/route.ts` | Next.js API proxy handler |
| `components/OutputViewer.tsx` | Schema tab renderer |
| `types/index.ts` | Shared TypeScript interfaces |

---

## Troubleshooting

**`GROQ_API_KEY not set`**
Confirm both `.env.local` (root) and `backend/.env` exist, contain a key beginning with `gsk_`, and that you restarted the servers after creation.

**Backend connection refused**
Verify the backend process is running (`python main.py`) and that port 8000 is free. Check that `NEXT_PUBLIC_API_URL=http://localhost:8000` is set correctly.

**Generation exceeds 2 minutes**
Check the [Groq status page](https://status.groq.com), try a shorter prompt, or wait 60 seconds if you've hit a rate limit.

**JSON parsing error in response**
Review backend logs, simplify the prompt, and confirm the Groq API is responding correctly. The pipeline includes automatic repair for common malformed outputs.

**Port already in use**
```bash
# macOS / Linux
lsof -i :3000 && kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or start frontend on an alternate port
npm run dev -- -p 3001
```

**CORS error in browser**
Confirm `NEXT_PUBLIC_API_URL` exactly matches the backend origin, restart the backend, and clear the browser cache.

---

## Roadmap

**Current (v1.0)**
- 4-stage NLP generation pipeline
- Multi-schema output (UI, API, DB, Auth, Logic)
- SQLite and PostgreSQL persistence
- REST API with generation history
- Full-stack web interface

**Planned**
- Code scaffold generation from schemas
- YAML and GraphQL export formats
- Multi-language prompt support
- Collaborative schema editing
- Webhook integration for CI/CD pipelines
- Custom LLM provider support

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Write clean, documented code following PEP 8 (Python) and Prettier (TypeScript)
4. Add or update tests for changed behaviour
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, etc.
6. Open a pull request with a clear description of the change

For bug reports, include a reproduction prompt, expected output, actual output, and any relevant logs.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Sagar Roy**
GitHub: [@roySagar2026](https://github.com/roySagar2026)

---

## Acknowledgements

[Groq](https://groq.com) · [Vercel](https://vercel.com) · [Railway](https://railway.app) · [FastAPI](https://fastapi.tiangolo.com) · [Next.js](https://nextjs.org)
