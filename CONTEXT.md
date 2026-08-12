# Bhavya Foundation — Institutional Context

This workspace is the living institutional brain of Bhavya Foundation.

**Purpose**: Make the Constitution, policies, pillars, programmes, and organisational structure navigable by both humans and AI agents without stuffing context. An agent (or person) opens the root, follows the routing table, and loads only what the current question requires.

**Form**: Context Map of a public charitable organisation + Knowledge Bundle of its founding documents.

## Constitutional Pillars (permanent)

1. **Nature** — Forest restoration, biodiversity, water, climate resilience (`pillars/nature/`)
2. **Knowledge** — AI Labs, Digital Libraries, education, research (`pillars/knowledge/`)
3. **Heritage** — Cultural preservation, traditional knowledge, yoga, documentation (`pillars/heritage/`)

Plus the cross-cutting **Community Mission** (youth, women, schools, volunteerism).

## Core Source Documents (corpus/)

| # | Document | Role |
|---|---|---|
| 01 | The Constitution | Supreme internal governance document |
| 02 | Public Charitable Trust Deed | Legal foundation |
| 03 | The Founder's Charter | Office of Founder & Steward |
| 04 | Board of Trustees Charter | Board role & duties |
| 05 | Governance Manual | How governance is practised |
| 06 | Code of Ethics | Behavioural standards |
| 07 | Conflict of Interest Policy | Disclosure & management |
| 08 | Financial Management & Procurement | Money & assets |
| 09 | Donation Acceptance Policy | Fundraising ethics |
| 10 | Volunteer Policy | Bhavya Volunteer Corps |
| 11 | Child Protection & Safeguarding | Zero-tolerance safeguarding |
| 12 | Environmental Conservation Policy | Forest Mission standards |
| 13 | AI Ethics & Responsible AI Policy | Technology principles |
| 14 | Digital Library Policy | Knowledge Mission standards |
| 15 | Brand Constitution | Identity, voice, design |

## Status Surface

- Programme readiness and impact → `dashboards/00-tracker.md`
- Node completeness → scan frontmatter in `governance/`, `pillars/`, `policies/`, `teams/`
- Generated indexes → `FILE-MAP.md` (rebuild, never hand-edit)

## Factory vs Product

- **Factory (stable)**: `_shared/`, `_meta/`, `brand/`, corpus originals
- **Product (evolving)**: structured nodes under governance/, pillars/, policies/, programmes/, teams/, patterns/

## Walk Test

1. Open `CLAUDE.md` → know where to go for any major question.
2. Open any node → frontmatter declares type, owner, links.
3. Status is visible by presence of files and frontmatter fields, not by hidden state.
