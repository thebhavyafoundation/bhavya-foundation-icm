# Bhavya Foundation ICM Workspace

Institutional knowledge, governance, and operational context for Bhavya Foundation — a public charitable institution dedicated to restoring nature, empowering humanity, and preserving heritage.

Built on ICM (Interpretable Context Methodology): folder structure as agent architecture. One agent walks the structure; state lives in plain files.

## Where things live

| Folder | What it holds |
|---|---|
| `corpus/` | Source documents (Constitution, policies, Trust Deed, Brand Constitution, Vision). Immutable originals. |
| `governance/` | Structured nodes: Founder, Board, constitutional offices, principles, amendment rules. |
| `pillars/` | The three constitutional pillars (Nature, Knowledge, Heritage) + Community Mission. |
| `policies/` | Operational policies as queryable nodes (AI Ethics, Digital Library, Volunteer, Child Protection, Finance, etc.). |
| `programmes/` | Initial and future programmes (Green Bhavya Mission, AI Lab, School Outreach, Heritage Initiative). |
| `brand/` | Brand Constitution, identity, voice, design system. |
| `teams/` | Organisational nodes (Board of Trustees, Volunteer Corps, future Programme Directors). |
| `_meta/` | Schema, node types, naming rules, maturity levels. |
| `_shared/` | Factory: stable reference material used across the workspace. |
| `patterns/` | Cross-cutting patterns observed bottom-up (only after 3+ occurrences). |
| `dashboards/` | Trackers and live queries over frontmatter. |
| `setup/` | One-time configuration and questionnaires. |

## Route by task

| If you need… | Go to | Then |
|---|---|---|
| Founding philosophy & Constitution | `corpus/01_The_Constitution.md` or `governance/` | Read Foundational Principles first |
| Legal foundation | `corpus/02_Public_Charitable_Trust_Deed.md` | |
| Brand identity, voice, design | `brand/` or `corpus/15_Brand_Constitution.md` | |
| AI & technology ethics | `policies/ai-ethics.md` or `corpus/13_...` | |
| Environmental work | `pillars/nature/` + `corpus/12_Environmental...` | |
| Digital Library / Knowledge Mission | `pillars/knowledge/` + `corpus/14_...` | |
| Governance process / Board | `governance/` + `teams/board-of-trustees/` | |
| Volunteer engagement | `policies/volunteer.md` + `teams/volunteer-corps/` | |
| Status of programmes | `dashboards/00-tracker.md` or scan `programmes/*/CONTEXT.md` | |
| Schema / how nodes are typed | `_meta/schema.md` | |

## The one rule

Each level has its own small catalog. No level's catalog describes the internals of the level below — it links down and stops.

Nothing is "done" until a human has reviewed the relevant output or node.

## Identity

- **Name**: Bhavya Foundation
- **Motto**: Restoring Nature. Empowering Humanity. Preserving Heritage.
- **Founder & Steward**: Shri Manohar Lal
- **Form**: Context Map (organisation as graph) composed with Knowledge Bundle (institutional knowledge)
- **GitHub**: thebhavyafoundation
