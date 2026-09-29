# 🏛️ Akaar Bhumi — National Land Governance Research & Policy Innovation Platform

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.0-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Python](https://img.shields.io/badge/Python-3.11%2B-blue?style=flat-square&logo=python)](https://www.python.org)
[![ISO 19152 LADM](https://img.shields.io/badge/Standard-ISO_19152_LADM-emerald?style=flat-square)](https://www.iso.org/standard/51206.html)
[![DILRMP 3.0](https://img.shields.io/badge/Initiative-DILRMP_3.0-orange?style=flat-square)](https://dilrmp.gov.in)
[![Tests Passing](https://img.shields.io/badge/Tests-20%2F20%20Passed-brightgreen?style=flat-square)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Akaar Bhumi** is an AI-powered national digital ecosystem combining geospatial intelligence, legal knowledge graphs, econometric policy simulations, and multi-modal citizen interfaces into a single unified analytical dashboard.

Designed to sit above existing land-governance systems rather than replace them, Akaar Bhumi connects fragmented **land records, cadastral data, Earth observation, legal documents, research literature, environmental information, infrastructure data, and socioeconomic evidence** into a common analytical environment.

> **"Land data should not only be stored and retrieved. It should be connected, researched, analysed, tested, explained, and reused as evidence."**

---

## 📑 Table of Contents

1. [🚀 Quick Start Guide](#-quick-start-guide)
2. [🔐 Demo Persona Credentials](#-demo-persona-credentials)
3. [🏛️ Core Platform Modules](#️-core-platform-modules)
4. [🧪 Testing & Verification](#-testing--verification)
5. [📡 API Reference](#-api-reference)
6. [📂 Project Directory Structure](#-project-directory-structure)
7. [📤 Pushing to GitHub (Step-by-Step)](#-pushing-to-github-step-by-step)
8. [🧬 Scientific & Empirical Architecture](#-scientific--empirical-architecture)
   - [Core Value Proposition & USP](#evidence-traceable-spatial-legal-policy-simulation)
   - [Geo CPSS — Policy Simulation Engine](#geo-cpss--policy-simulation-engine)
   - [Bhu Nyaya — Preventive Land Risk Intelligence](#bhu-nyaya--preventive-land-risk-intelligence)
   - [Evidence Provenance & Traceability](#evidence-provenance--traceability)

---

## 🚀 Quick Start Guide

### Prerequisites
* **Node.js** v18.0.0 or later (v20+ recommended)
* **Python** 3.11 or later (Python 3.11, 3.12, 3.13 supported)
* **Git** installed on your system

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/<your-username>/LandGov-Platform.git
cd LandGov-Platform
```

---

### Step 2: Set Up & Start Backend Server (FastAPI)

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

# Install required dependencies
pip install -r requirements.txt

# Run the FastAPI server with Uvicorn
uvicorn app.main:app --port 8001 --reload
```

* 🟢 **Backend API Base**: `http://localhost:8001`
* 📘 **Interactive Swagger Documentation**: `http://localhost:8001/docs`
* 📕 **ReDoc Alternative**: `http://localhost:8001/redoc`

---

### Step 3: Set Up & Start Frontend Web Portal (Next.js 15)

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

All demo persona accounts use the universal password: **`123456`** (or can be switched instantly via the topbar role switcher).

| Role | Operational Scope | Email | Password |
| :--- | :--- | :--- | :---: |
| **National Super Admin** | Central Directorate / DoLR | `superadmin@landgov.gov.in` | `123456` |
| **Ministry Official** | Ministry of Rural Development | `mord.secretary@landgov.gov.in` | `123456` |
| **Delhi State Revenue Secretary** | State Revenue HQ / Delhi NCT | `state.delhi@landgov.gov.in` | `123456` |
| **District Magistrate (DM)** | District Collectorate / New Delhi | `dm.newdelhi@landgov.gov.in` | `123456` |
| **Revenue Officer (Tehsildar)** | Tehsil Sub-Registrar / Najafgarh | `revenue.officer@landgov.gov.in` | `123456` |
| **Lead Academic Researcher** | Geospatial AI Lab / IIT Delhi | `researcher@iitd.ac.in` | `123456` |
| **Citizen / Landholder** | Public Landholder / Bhu-Seva | `citizen@bharatmail.in` | `123456` |

---

## 🏛️ Core Platform Modules

| Route | Module Name | Primary Capability |
| :--- | :--- | :--- |
| `/` | **Research & Policy Dashboard** | Real-time monitoring of DILRMP cadastral computerization, SVAMITVA village property card coverage, and state-wise performance rankings. |
| `/gis-studio` | **GIS Spatial Studio** | Sub-meter cadastral parcel (Khasra) viewer, Leaflet multi-layer boundary controls, dispute density heatmaps, and climate risk overlays. |
| `/simulation` | **Policy Simulation Sandbox** | Counterfactual econometric modeling testing how policy levers (drone surveys, auto-mutation, fast-track tribunals) affect dispute reduction and land-use transition. |
| `/risk-triangulation` | **Dispute Risk Analytics** | Land Title Fragility Index (TFI), RCCMS litigation dockets, and tripartite risk triangulation. |
| `/conclusive-titling` | **Conclusive Titling Hub** | Presumptive-to-conclusive title transition, state title guarantee eligibility, and indemnity fund exposure calculators. |
| `/data-repository` | **Data Repository & Ingestion** | Centralized catalog of cadastral datasets, multi-format ingestion logs (GeoJSON, CSV), and provenance audit telemetry. |
| `/ai-search` | **AI Policy & Legal Search** | Semantic vector search across Land Revenue Acts, Gazettes, High Court judgments, and academic literature. |
| `/knowledge-hub` | **Knowledge Hub** | Curated policy briefs, state land reforms comparative charts, and empirical research reports. |
| `/research-lab` | **Research Lab** | Collaborative analytical workspaces, computational notebooks, and empirical econometric experiments. |
| `/innovation-hub` | **Innovation Portal** | National land governance challenges, competitive research grants, and pilot project incubators. |

---

## 🧪 Testing & Verification

### Running Backend Unit & Contract Tests
The platform includes an automated pytest suite covering multi-source ingestion, canonical data contracts, full-chain traceability, and schema validation.

```bash
cd backend
.\.venv\Scripts\python -m pytest
```

**Test Results Summary**:
```text
tests/test_connector_extensibility.py .                                  [  5%]
tests/test_delhi_ingestion.py ....                                       [ 25%]
tests/test_existing_contracts.py ....                                    [ 45%]
tests/test_traceability.py ......                                        [ 75%]
tests/test_validation_and_errors.py .....                                [100%]

======================== 20 passed in 8.11s ========================
```

### Typechecking & Production Build (Frontend)
```bash
cd frontend

# Verify TypeScript types
npx tsc --noEmit

# Compile production bundle
npm run build
```

---

## 📡 API Reference

Interactive OpenAPI documentation is available live at `http://localhost:8001/docs`.

### Selected Core Endpoints

* **Parcels**:
  * `GET /api/v1/parcels/` — List all canonical land parcels (paginated, filterable by state, district, title status)
  * `GET /api/v1/parcels/{id}` — Fetch detailed parcel metadata including GeoJSON boundary and risk score
* **Traceability & Provenance**:
  * `GET /api/v1/canonical/trace/{identifier}` — Full-chain traceability by Khasra number, ULPIN, or internal ID
  * `GET /api/v1/canonical/hierarchy` — Multi-tier administrative tree (State → District → Tehsil → Ward/Village)
  * `GET /api/v1/canonical/provenance` — Ingestion batch telemetry, record counts, and data quality metrics
* **Disputes & Courts**:
  * `GET /api/v1/disputes/` — Active litigation cases and revenue court proceedings
* **Policy Simulation**:
  * `POST /api/v1/simulation/run` — Run counterfactual scenario simulations with custom policy parameters
* **Ingestion**:
  * `POST /api/v1/ingestion/geojson` — Ingest spatial cadastral GeoJSON features
  * `POST /api/v1/ingestion/csv-parcels` — Batch ingest tabular revenue records

---

## 📂 Project Directory Structure

```text
LandGov-Platform/
├── backend/
│   ├── app/
│   │   ├── api/v1/endpoints/       # FastAPI route handlers (parcels, disputes, simulation, etc.)
│   │   ├── core/                   # Security, settings, and JWT config
│   │   ├── domain/models/          # SQLModel domain entities (LandParcel, User, DisputeCase)
│   │   ├── domain/services/        # Business logic & canonical adapters
│   │   └── infrastructure/db/      # SQLite & Neo4j graph clients
│   ├── data/                       # Local SQLite storage (landgov.db)
│   ├── tests/                      # Pytest unit & integration test suite
│   ├── requirements.txt            # Python dependencies
│   └── pytest.ini                  # Pytest configuration
├── frontend/
│   ├── public/                     # GeoJSON spatial boundaries (Delhi districts, wards, Leaflet)
│   ├── src/
│   │   ├── app/                    # Next.js App Router (dashboard routes & pages)
│   │   ├── components/             # Reusable UI widgets
│   │   │   ├── layout/             # Sidebar, topbar, search, user navigation
│   │   │   ├── spatial/            # Leaflet map canvas, layers, boundary diff viewers
│   │   │   ├── simulation/         # Parameter sliders, transition matrices, causal effects
│   │   │   ├── risk/               # Title fragility calculators, litigation timelines
│   │   │   └── sources/            # Active notebook sources, document uploaders
│   │   └── lib/                    # Zustand stores, API client, types, utilities
│   ├── package.json                # Frontend dependencies
│   └── tailwind.config.ts          # TailwindCSS configuration
├── .gitignore                      # Git exclusion rules
└── README.md                       # Platform documentation
```

---

## 📤 Pushing to GitHub (Step-by-Step)

If this workspace is not yet connected to your remote repository, execute the following commands in the workspace root:

```bash
# 1. Initialize Git repository
git init

# 2. Add all project files (node_modules, .venv, and caches are automatically ignored)
git add .

# 3. Create initial commit
git commit -m "feat: complete operational setup of LandGov Platform with verified tests"

# 4. Set main branch
git branch -M main

# 5. Link your GitHub remote repository (replace with your repository URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push code to GitHub
git push -u origin main
```

---

## 🧬 Scientific & Empirical Architecture

### The Research-Platform Role
India has made major progress in digitizing land records (DILRMP) and rural property mapping (SVAMITVA). However, land information has historically remained distributed across isolated administrative silos:
* **Data fragmentation**: Revenue, registration, survey, planning, environmental, and judicial systems operate independently.
* **Cadastral–textual desynchronisation**: Boundary geometry and textual titles frequently evolve through divergent workflows.
* **Geospatial–legal separation**: Satellite observations and cadastral boundaries lack a direct analytical bridge to legal statutes and court precedents.

LandGov bridges these gaps through a unified **evidence, intelligence, and simulation layer**:

```text
┌──────────────────────────────────────────────────────────────┐
│                         LANDGOV                              │
│         National Research & Policy Innovation Layer          │
└──────────────────────────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
 ┌────────────┐   ┌──────────────┐  ┌────────────────┐
 │ KNOWLEDGE  │   │ INTELLIGENCE │  │ POLICY SANDBOX │
 ├────────────┤   ├──────────────┤  ├────────────────┤
 │ Research   │   │ Cadastral    │  │ What-if        │
 │ Legal      │   │ Satellite    │  │ Simulation     │
 │ Policies   │   │ Drone        │  │ Causal         │
 │ Judgments  │   │ LULC         │  │ Evaluation     │
 │ Reports    │   │ Climate      │  │ Scenarios      │
 └────────────┘   └──────────────┘  └────────────────┘
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                EVIDENCE TRACEABILITY
                         ▼
              RESEARCH / POLICY INSIGHT
                         ▼
                HUMAN DECISION MAKER
```

### Evidence-Traceable Spatial-Legal Policy Simulation
LandGov's central differentiator is the combination of **cadastral geometry + Earth observation + legal jurisprudence + research evidence + policy simulation + provenance**.

Every analytical output is traceable to supporting evidence:
```text
Risk / Insight / Projection
          │
          ▼
   ┌───────────────┐
   │  Explanation  │
   └───────────────┘
          │
    ┌─────┼─────┬────────┐
    ▼     ▼     ▼        ▼
Cadastral EO   Legal   Research
 Record   Data  Record  Evidence
```

### Geo CPSS — Policy Simulation Engine
* **Layer 1 (Spatial baseline)**: Historical Earth observation and contextual variables model land-use transitions (distance to roads, terrain, zoning, ownership fragmentation, climate).
* **Layer 2 (Policy evaluation)**: Policy interventions are compared against baselines using causal-inference methods (Synthetic Control, Synthetic Difference-in-Differences, spatial counterfactuals).

### Bhu Nyaya — Preventive Land Risk Intelligence
Identifies pre-dispute risk indicators at the parcel level:
* Cadastral-physical boundary variances
* Contested succession / inheritance claims
* Overlapping forest / waterbody eco-buffers
* Unresolved revenue court dockets

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
