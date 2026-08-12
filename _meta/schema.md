# Schema — Rules of the Bhavya Foundation ICM Workspace

Closed set of node types, labels, and naming. When practice and this file disagree, reconcile the same day.

## Node types

| `type:` | Lives at | Purpose |
|---|---|---|
| pillar | `pillars/<slug>/` | Constitutional pillars (Nature, Knowledge, Heritage) + Community |
| policy | `policies/<slug>.md` | Operational policies derived from Constitution |
| governance | `governance/<slug>.md` | Constitutional offices, Board, Founder, principles, amendment rules |
| programme | `programmes/<slug>/` | Concrete programmes (Green Bhavya Mission, AI Lab, etc.) |
| team | `teams/<slug>/` | Organisational units (Board, Volunteer Corps, future Programme Directors) |
| brand | `brand/` | Identity, voice, design system, taglines |
| pattern | `patterns/<slug>.md` | Cross-cutting patterns (only after 3+ independent occurrences) |
| data-asset | `teams/.../data/` or `pillars/.../data/` | Source-of-truth data shapes |
| process | `teams/.../processes/` or `programmes/.../processes/` | Workflow nodes with scoring |

## Labels (YAML frontmatter)

Required on most nodes:

```yaml
type: policy | pillar | governance | programme | team | pattern | ...
title: Human-readable name
owner: role or person (e.g. Board of Trustees, Managing Trustee)
status: draft | active | reviewed | archived
version: 1.0
source: corpus/XX_... or internal
ai-level: L0 | L1 | L2 | L3   # L0 = fully manual, L3 = integrated AI
value: 1-5
pain: 1-5
```

Optional / recommended:

- `pillar: nature | knowledge | heritage | community`
- `access_tier: public | internal | sensitive`
- `consumes: [[wikilink]]`
- `produces: [[wikilink]]`
- `review_cycle: every 2 years | annually | ...`
- `approved_by: Board of Trustees`

value + pain ≥ 8 → candidate for process improvement / AI pilot.

## Naming

- Slugs: kebab-case (`ai-ethics`, `green-bhavya-mission`)
- Human-facing cards may use Title Case filenames when they are the primary node for a team or pillar
- Data assets: always `data-<thing>.md`
- `_meta/` holds the rules. Generated indexes (`FILE-MAP.md`) are rebuilt by script, never hand-edited.

## Layered loading (for Knowledge Bundle behaviour)

1. Always-load: CLAUDE.md + CONTEXT.md + relevant pillar overview
2. Task-relevant: the specific policy / programme / governance node
3. Evidence: original corpus document or supporting data (load last, only when needed)

## One-home-per-fact

Original full text lives in `corpus/`. Structured, queryable, linked summaries and contracts live in the typed folders. Never copy the full Constitution into every node; link to it.
