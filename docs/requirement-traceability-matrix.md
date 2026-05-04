# Requirement traceability matrix

| Requirement | Automated tests | Manual/justification |
| --- | --- | --- |
| FR-001 | tests/e2e/app-home.e2e.ts | Real embedded iframe requires dev store |
| FR-002 | tests/e2e/app-home.e2e.ts, tests/integration/app-config.test.ts | - |
| FR-003 | tests/e2e/app-home.e2e.ts | Workspace real data future |
| FR-004 | tests/unit/validators.test.ts | Submit action in dev store |
| FR-005 | tests/components/VisualStatePanel.test.tsx | - |
| FR-006 | Typecheck/build | OAuth behavior manual in dev store |
| FR-007 | tests/unit/graphql.test.ts, tests/integration/app-config.test.ts | Reinstall with scopes manually |
| FR-008 | tests/unit/graphql.test.ts | Real mutation failure manual |
| FR-009 | tests/e2e/app-home.e2e.ts, tests/accessibility/app-home.spec.ts | Keyboard pass manual |

| Acceptance criterion | Coverage |
| --- | --- |
| AC-001 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-002 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-003 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-004 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-005 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-006 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-007 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-008 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-009 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
| AC-010 | Automatic where preview/helper covers it; OAuth/API-specific branches documented as manual until dev store exists. |
