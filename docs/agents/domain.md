# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root, or **`CONTEXT-MAP.md`** if it exists; read each context relevant to the topic.
- **`docs/adr/`**: read ADRs that touch the area you're about to work in.

If these files don't exist, proceed silently. The `/domain-modeling` skill creates them lazily when terms or decisions are resolved.

## File structure

This is a single-context repo:

```
/
├── CONTEXT.md
├── docs/adr/
└── src/
```

Use the glossary vocabulary defined in `CONTEXT.md`. If output contradicts an existing ADR, surface the conflict explicitly rather than silently overriding it.
