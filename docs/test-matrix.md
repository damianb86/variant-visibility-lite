# Test matrix

| Area | Automatic test | Manual test | Notes |
| --- | --- | --- | --- |
| Dashboard render | tests/e2e/app-home.e2e.ts | Open /app in dev store | /preview covers visuals only |
| Settings validation | tests/unit/validators.test.ts | Submit invalid fields in Admin | Server action wired |
| GraphQL errors | tests/unit/graphql.test.ts | Force API error in dev store | Helper ready |
| userErrors | tests/unit/graphql.test.ts | Mock failed mutation | Helper ready |
| Missing scopes | tests/unit/graphql.test.ts | Remove scope and reinstall | Needs dev store |
| Empty state | component fixtures | Store with no data | Visual state included |
| Many data | fixtures/products.many | Large catalog dev store | Cursor pagination future |
| Narrow viewport | tests/e2e/app-home.e2e.ts | Mobile browser in Admin | Preview only |
| Accessibility | tests/accessibility/app-home.spec.ts | Keyboard pass | Axe preview |
