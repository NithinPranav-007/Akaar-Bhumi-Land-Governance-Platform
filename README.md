# 🏛️ Akaar Bhumi — National Land Governance Research & Policy Innovation Platform

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.0-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Python](https://img.shields.io/badge/Python-3.11%2B-blue?style=flat-square&logo=python)](https://www.python.org)
[![ISO 19152 LADM](https://img.shields.io/badge/Standard-ISO_19152_LADM-emerald?style=flat-square)](https://www.iso.org/standard/51206.html)
[![DILRMP 3.0](https://img.shields.io/badge/Initiative-DILRMP_3.0-orange?style=flat-square)](https://dilrmp.gov.in)
[![Tests Passing](https://img.shields.io/badge/Tests-20%2F20%20Passed-brightgreen?style=flat-square)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Akaar Bhumi** (आकार भूमि) is an AI-powered national digital land governance ecosystem combining geospatial intelligence, legal knowledge graphs, econometric policy simulations, and multi-modal citizen interfaces into a single unified analytical research platform.

Designed to sit above existing land-governance systems rather than replace them, Akaar Bhumi connects fragmented **cadastral records, textual RoR (Record of Rights), Earth observation, legal judgments, research literature, environmental buffers, infrastructure corridors, and socioeconomic evidence** into an evidence-traceable analytical environment.

> **"Land data should not only be stored and retrieved. It should be connected, researched, analysed, tested, explained, and reused as evidence."**

---

## 📑 Table of Contents

1. [🌟 Key Highlights & Innovations](#-key-highlights--innovations)
2. [🚀 Quick Start Guide](#-quick-start-guide)
3. [🔐 Demo Persona Credentials](#-demo-persona-credentials)
4. [🏛️ Core Platform Modules](#️-core-platform-modules)
5. [🧬 System Architecture & ISO 19152 LADM](#-system-architecture--iso-19152-ladm)
6. [🔬 Scientific Engines & Empirical Methodology](#-scientific-engines--empirical-methodology)
   - [Geo CPSS — Counterfactual Policy Simulation](#geo-cpss--counterfactual-policy-simulation)
   - [Bhu Nyaya — Title Fragility Index (TFI)](#bhu-nyaya--title-fragility-index-tfi)
   - [Diffeomorphic Boundary Discrepancy Engine](#diffeomorphic-boundary-discrepancy-engine)
   - [Policy RAG & Statutory Knowledge Copilot](#policy-rag--statutory-knowledge-copilot)
7. [📡 Comprehensive API Reference](#-comprehensive-api-reference)
8. [🧪 Testing & Verification](#-testing--verification)
9. [📂 Project Directory Structure](#-project-directory-structure)
10. [⚙️ Environment Configuration](#️-environment-configuration)
11. [📄 License & Attribution](#-license--attribution)

---

## 🌟 Key Highlights & Innovations

* **ISO 19152 LADM Compliant**: Canonical domain modeling structuring Parties (`LA_Party`), Spatial Units (`LA_SpatialUnit`), Administrative Rights, Restrictions, and Responsibilities (`LA_RRR`), and Sources (`LA_Source`).
* **Sub-Meter Delhi NCT Multi-Tier Boundary Mapper**: High-fidelity GIS canvas integrating official GeoJSON boundaries across all **11 Districts, 70 Assembly Constituencies, and 290 Wards** with volunteer ground-coverage intelligence.
* **Counterfactual Policy Simulation Sandbox (Geo CPSS)**: Real-time econometric modeling examining how policy levers (e.g., auto-mutation triggers, drone resurvey intervals, fast-track tribunals) alter dispute trajectories, agricultural transition, and economic velocity.
* **Bhu Nyaya Title Fragility Index (TFI)**: Automated multi-factor risk assessment (0.00 – 1.00) measuring litigation probability, succession fragmentation, boundary mismatch, and encumbrance overlap.
* **Diffeomorphic Cadastre-Reality Reconciler**: Compares historical revenue cadastres ($P_{cad}$) with drone/satellite observations ($P_{phys}$) to detect encroachment and boundary discrepancies.
* **Full-Chain Evidence Traceability**: Backwards-traceable provenance graphs linking analytical outputs directly to court dockets (RCCMS), revenue records, and gazette notifications.
* **Adaptive Theme Engine**: Flawless switching between Sleek Dark Mode and High-Legibility Light Mode with isolated Leaflet map stacking.

---

## 🚀 Quick Start Guide

### Prerequisites
* **Node.js**: v18.0.0 or later (v20+ LTS recommended)
* **Python**: 3.11 or later (3.11, 3.12, 3.13 supported)
* **Git**: Installed on your operating system

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/NithinPranav-007/Akaar-Bhumi-Land-Governance-Platform.git
cd Akaar-Bhumi-Land-Governance-Platform
```

---

### Step 2: Set Up & Launch Backend Server (FastAPI)

```bash
# Navigate to backend directory
cd backend

# Create Python virtual environment
python -m venv .venv

# Activate virtual environment
# Windows (PowerShell):
.\.venv\Scripts\Activate.ps1
# Windows (CMD):
.\.venv\Scripts\activate.bat
# Linux / macOS:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI application with Uvicorn
uvicorn app.main:app --port 8001 --reload
```

* 🟢 **Backend API Base**: `http://localhost:8001`
* 📘 **Interactive OpenAPI / Swagger**: `http://localhost:8001/docs`
* 📕 **Alternative ReDoc UI**: `http://localhost:8001/redoc`

---

### Step 3: Set Up & Launch Frontend Web Portal (Next.js 15)

Open a **new terminal tab**:

```bash
# Navigate to frontend directory
cd frontend

# Install Node dependencies
npm install

# Start development server on port 3000
npm run dev -- -p 3000
```

* 🌐 **Web Portal**: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Demo Persona Credentials

Akaar Bhumi features role-based access control (RBAC) across government, research, and citizen tiers. Use the universal password **`123456`** or switch roles instantly via the topbar persona selector:

| Persona | Operational Scope | Email | Password |
| :--- | :--- | :--- | :---: |
| **National Super Admin** | Central Directorate / DoLR / DILRMP 3.0 | `superadmin@landgov.gov.in` | `123456` |
| **Ministry Official** | Ministry of Rural Development | `mord.secretary@landgov.gov.in` | `123456` |
| **Delhi State Revenue Secretary** | State Revenue HQ / Delhi NCT | `state.delhi@landgov.gov.in` | `123456` |
| **District Magistrate (DM)** | District Collectorate / New Delhi | `dm.newdelhi@landgov.gov.in` | `123456` |
| **Revenue Officer (Tehsildar)** | Tehsil Sub-Registrar / Najafgarh | `revenue.officer@landgov.gov.in` | `123456` |
| **Lead Academic Researcher** | Geospatial AI Lab / IIT Delhi | `researcher@iitd.ac.in` | `123456` |
| **Citizen / Landholder** | Public Landholder / Bhu-Seva Portal | `citizen@bharatmail.in` | `123456` |

---

## 🏛️ Core Platform Modules

| Route | Module Name | Primary Capability |
| :--- | :--- | :--- |
| `/` | **Research & Policy Dashboard** | National macro indicators: DILRMP 3.0 computerization percentage, SVAMITVA village property card saturation, Delhi NCT boundary map, and district coverage tracker. |
| `/gis-studio` | **GIS Spatial Studio** | Interactive sub-meter parcel viewer, multi-layer boundary controls (cadastre, satellite, eco-zones, disputed parcels), split-screen diffs, and coordinate queries. |
| `/simulation` | **Policy Simulation Sandbox** | Interactive econometric modeling adjusting policy levers (drone resurveys, tribunal speed, auto-mutation) to project litigation impact and land conversion. |
| `/risk-triangulation` | **Dispute Risk Analytics** | Title Fragility Index (TFI) calculators, RCCMS revenue court dockets, tripartite risk classification, and litigation chronology. |
| `/conclusive-titling` | **Conclusive Titling Hub** | Torrens-system transition metrics, state guarantee eligibility scoring, and fiscal exposure calculators for state title indemnity reserves. |
| `/data-repository` | **Data Repository & Ingestion** | Central registry of verified cadastral datasets, multi-format ingestion logs (GeoJSON, CSV, PDF), and cryptographic hash audit trails. |
| `/ai-search` | **AI Policy & Legal Search** | RAG-powered statutory research querying Land Revenue Acts, Delhi RCCMS judgments, and academic literature with confidence scoring and citations. |
| `/knowledge-hub` | **Knowledge Hub** | Curated repository of central and state land reform policies, comparative regulatory frameworks, and reform blueprints. |
| `/research-lab` | **Research Lab** | Analytical notebooks, empirical econometric research papers, and reproducible land-economics research environments. |
| `/innovation-hub` | **Innovation Portal** | Open national challenge tracker, competitive innovation grant calls, and pilot project funding registries. |

---

## 🧬 System Architecture & ISO 19152 LADM

Akaar Bhumi adheres strictly to the **ISO 19152 Land Administration Domain Model (LADM)** international standard:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   AKAAR BHUMI ARCHITECTURE OVERVIEW                    │
└────────────────────────────────────────────────────────────────────────┘

 [ Presentation Layer — Next.js 15 (App Router, TailwindCSS, Zustand) ]
       │                                                      │
       ▼                                                      ▼
 [ Multi-Layer Leaflet GIS ]                           [ Copilot & Sandboxes ]
 (Delhi Wards, Districts, ULPINs)                     (Sliders, RAG, TFI)
       │                                                      │
 ══════╪══════════════════════════════════════════════════════╪══════════
       ▼                                                      ▼
 [ API Gateway & Ingestion — FastAPI 0.115 ]
  ├── Canonical Model Adapters (Delhi Connector, CSV, GeoJSON, RCCMS)
  ├── Full-Chain Traceability Engine (ULPIN & Khasra Identifier Trace)
  ├── Econometric Policy Simulation Engine (Synthetic Control / DD)
  └── Statutory RAG Pipeline (Revenue Acts & Court Dockets)
       │                                                      │
 ══════╪══════════════════════════════════════════════════════╪══════════
       ▼                                                      ▼
 [ Storage & Persistence ]
  ├── SQLite Relational Engine (`landgov.db` — Parcels, Users, Disputes)
  └── Neo4j Graph DB Client (Spatial-Legal-Pedigree Knowledge Graph)
```

### ISO 19152 LADM Entity Mapping

```
      ┌─────────────────────────┐
      │  LA_Party (Landholder)  │
      └────────────┬────────────┘
                   │
                   ▼ (holds)
      ┌─────────────────────────┐         ┌─────────────────────────┐
      │     LA_RRR (Rights,     │────────▶│    LA_Source (Title,    │
      │  Restrictions, Resp.)   │         │    Deed, Court Docket)  │
      └────────────┬────────────┘         └─────────────────────────┘
                   │
                   ▼ (applies to)
      ┌─────────────────────────┐
      │ LA_SpatialUnit (Parcel) │
      │   ULPIN / Khasra No.    │
      └─────────────────────────┘
```

---

## 🔬 Scientific Engines & Empirical Methodology

### Geo CPSS — Counterfactual Policy Simulation
The Policy Simulation Sandbox models the causal impact of state and national policy decisions:
* **Spatial Baseline**: Incorporates proximity to transit, baseline dispute velocity, agricultural zoning, and parcel fragmentation.
* **Causal Inference**: Implements Synthetic Difference-in-Differences to model treatment effects when changing:
  * Drone Resurvey Frequency (1–10 years)
  * Auto-Mutation Threshold (₹ Lakhs)
  * Fast-Track Revenue Tribunal Capacity (Benches)
* **Outcome Projections**: Computes projected 5-year litigation reduction percentage and agricultural-to-urban conversion rates.

### Bhu Nyaya — Title Fragility Index (TFI)
The Title Fragility Index calculates a weighted compound risk score between `0.00` (Pristine, Clear Title) and `1.00` (Severe Latent Risk):
$$\text{TFI} = w_1 \cdot R_{lit} + w_2 \cdot R_{cad} + w_3 \cdot R_{succ} + w_4 \cdot R_{eco}$$
Where:
* $R_{lit}$: Pending or historical revenue court litigation index
* $R_{cad}$: Spatial boundary discrepancy between cadastre and physical reality
* $R_{succ}$: Undivided ancestral co-parcenary and unmutated succession risk
* $R_{eco}$: Encroachment onto ecologically protected forest, wetland, or gram sabha commons

### Diffeomorphic Boundary Discrepancy Engine
Detects non-rigid geometric deviations between historical revenue cadastres ($P_{cad}$) and high-resolution orthorectified drone surveys ($P_{phys}$):
* Computes surface area delta ($\Delta A = |A_{phys} - A_{cad}|$)
* Highlights encroached boundary segments in red hatched SVG textures
* Generates localized cadastral-reality overlap vectors

### Policy RAG & Statutory Knowledge Copilot
* Extracts semantic embeddings from the Delhi Land Reforms Act, UP Revenue Code, Transfer of Property Act, and Supreme Court rulings.
* Returns verified statutory citations, legal confidence scores, and chunk-level provenance.

---

## 📡 Comprehensive API Reference

All REST endpoints are documented live with request/response schemas at `http://localhost:8001/docs`.

### Core API Catalog

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/parcels/` | Retrieve all land parcels with pagination and state/district filters |
| `GET` | `/api/v1/parcels/{id}` | Detailed parcel profile, boundaries, and risk factors |
| `GET` | `/api/v1/canonical/trace/{identifier}` | Full-chain provenance trace by ULPIN or Khasra Number |
| `GET` | `/api/v1/canonical/hierarchy` | Complete administrative hierarchy tree (State → District → Ward) |
| `GET` | `/api/v1/canonical/provenance` | Ingestion batch metadata, checksums, and audit telemetry |
| `GET` | `/api/v1/disputes/` | Active revenue litigation cases, court dockets, and claim values |
| `POST` | `/api/v1/simulation/run` | Execute econometric counterfactual scenario with policy parameters |
| `POST` | `/api/v1/policy-rag/query` | Query statutory knowledge base and receive citations |
| `GET` | `/api/v1/analytics/summary` | Macro platform KPIs (dispute rate, titling progress, registered parcels) |
| `POST` | `/api/v1/ingestion/geojson` | Ingest spatial boundary GeoJSON features |
| `POST` | `/api/v1/ingestion/csv-parcels` | Batch ingest tabular revenue records |
| `GET` | `/api/v1/repository/policies` | Retrieve catalog of state and national land governance policies |
| `GET` | `/api/v1/repository/papers` | Retrieve published academic and empirical research papers |
| `GET` | `/api/v1/innovation/items` | Retrieve national challenges, research grants, and pilot initiatives |

---

## 🧪 Testing & Verification

### Running Automated Backend Test Suite
The platform includes an automated pytest suite validating data contracts, canonical transformations, connector extensibility, error boundaries, and end-to-end traceability:

```bash
cd backend
.\.venv\Scripts\python -m pytest
```

```text
============================= test session starts =============================
tests/test_connector_extensibility.py .                                  [  5%]
tests/test_delhi_ingestion.py ....                                       [ 25%]
tests/test_existing_contracts.py ....                                    [ 45%]
tests/test_traceability.py ......                                        [ 75%]
tests/test_validation_and_errors.py .....                                [100%]

============================== 20 passed in 8.11s ==============================
```

### Frontend TypeScript Verification & Build Check
```bash
cd frontend

# Verify static typing
npx tsc --noEmit

# Test production build
npm run build
```

---

## 📂 Project Directory Structure

```text
Akaar-Bhumi-Land-Governance-Platform/
├── backend/
│   ├── app/
│   │   ├── api/v1/endpoints/       # FastAPI endpoints (parcels, disputes, simulation, etc.)
│   │   ├── core/                   # Security settings, JWT tokens, application config
│   │   ├── domain/models/          # ISO 19152 LADM SQLModel entities
│   │   ├── domain/services/        # Ingestion adapters, canonical service, policy RAG
│   │   └── infrastructure/db/      # SQLite client & Neo4j graph connector
│   ├── data/                       # Local SQLite storage (landgov.db)
│   ├── tests/                      # Pytest automated test suite (20 tests)
│   ├── requirements.txt            # Python dependencies
│   └── pytest.ini                  # Pytest runner configuration
├── frontend/
│   ├── public/                     # GeoJSON spatial files (Delhi districts, wards, Leaflet)
│   ├── src/
│   │   ├── app/                    # Next.js 15 App Router (all dashboard routes)
│   │   ├── components/             # Modular React UI components
│   │   │   ├── campaign/           # District coverage list & volunteer panels
│   │   │   ├── inspector/          # LADM entity inspector, AI copilot, dossier export
│   │   │   ├── layout/             # Shell, sidebar, topbar, ULPIN search, theme switcher
│   │   │   ├── risk/               # TFI calculators, litigation timelines, triage tools
│   │   │   ├── simulation/         # Parameter sliders, transition matrices, causal effects
│   │   │   ├── sources/            # Chunk inspector modal, source uploaders
│   │   │   └── spatial/            # Delhi OSM Leaflet map, map canvas, diff viewer
│   │   └── lib/                    # Zustand stores, API client, types, utilities
│   ├── package.json                # Frontend package configuration
│   └── tailwind.config.ts          # Tailwind CSS styling configuration
├── DATA_CONTRACT.md                # Canonical data contract specification
├── DESIGN.md                       # Comprehensive design system guidelines
├── PROBLEM_STATEMENT.md            # National land governance problem analysis
├── .gitignore                      # Git exclusion rules
└── README.md                       # Comprehensive platform documentation
```

---

## ⚙️ Environment Configuration

### Backend Configuration (`backend/.env`)
Create a `.env` file in the `backend/` directory if configuring external databases:

```ini
PROJECT_NAME="Akaar Bhumi"
VERSION="3.0.0"
API_V1_STR="/api/v1"
SECRET_KEY="landgov-secret-key-for-development-change-in-production"
ACCESS_TOKEN_EXPIRE_MINUTES=1440

# SQLite (Default)
DATABASE_URL="sqlite:///./data/landgov.db"

# Neo4j Graph DB (Optional)
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="password"
```

### Frontend Configuration (`frontend/.env.local`)
Create a `.env.local` file in the `frontend/` directory if deploying on a custom domain:

```ini
NEXT_PUBLIC_API_URL=http://localhost:8001/api/v1
```

---

## 📄 License & Attribution

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

Developed as an open-source, evidence-traceable digital public infrastructure initiative aligned with **Digital India Land Records Modernization Programme (DILRMP 3.0)** and **SVAMITVA**.
