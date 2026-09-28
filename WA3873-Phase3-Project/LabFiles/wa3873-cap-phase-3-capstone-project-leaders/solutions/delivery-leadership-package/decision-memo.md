# Decision Memo: Defer Renters Coverage to the Next Delivery Window

**Date:** Tue 16:40 (after Inject #1)
**Author:** Sam Okafor
**Decision area:** This week's scope tradeoff

## Context

A partner aggregator asked Tuesday at 14:00, through the sponsor, for renters coverage to be quotable by Thursday. From the outside it looks like "one more dropdown option." It isn't: in this codebase the quote's shape is a database contract. The Mongoose schema's `type` enum states exactly which coverages exist, and every piece the engineering team handed me is written against it.

## Options considered

1. **Add renters properly by Thursday.** Pros: the partner starts quoting this week. Cons: the enum, the rate table, the seed data, the tests, the GraphQL schema, and the site's dropdown all move together, with less than two working days left and both already reserved for the container, CI, and the cluster.
2. **Hack it in without the schema change.** Price `type: "renters"` in the route before validation runs, with a hard-coded rate, and leave the enum alone. Pros: fastest possible demo. Cons: it creates quotes the database schema says cannot exist; REST, GraphQL, and the site would disagree about what a valid quote is; and the tests would have to be weakened to let it through. A quote the system of record can't validate is a liability wearing a feature's name.
3. **Defer to the next delivery window, proposed as its first item.** Pros: the delivery goal stays intact, and the enum has already made the full blast radius visible, so renters lands as one well-tested change with a real estimate (one to two days). Cons: the partner waits one window.

## Recommendation

**Option 3.** Defer renters, and give the partner a date instead of an apology: first item in the next delivery window, estimate attached.

## Why

The partner's first experience of Evergreen would be built on quotes our own database refuses to validate. A firm date protects that first impression; a wrong number would poison it.

## What would change my mind

If Priya confirms by Wednesday 11:00 that the partner needs only to see renters listed as "coming soon" on the marketing site, with no priced quote behind it, that is a one-file site change and I would reconsider that narrow version.
