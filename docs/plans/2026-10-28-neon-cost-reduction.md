# Neon cost reduction

The production baseline is `21be447`. The owner requested live changes to reduce Neon costs after the per-minute newsletter worker was observed running with no queued mail. Normal digest delivery, confirmation, unsubscribe, frozen message bodies, and provider deduplication must remain intact.

## Design and execution

1. Replace the 1,440 daily newsletter polls with hourly recovery plus the existing 09:20 and 09:30 Hong Kong delivery times: 26 scheduled invocations per day. Automatic retry may wait up to an additional hour. Confirmation mail still attempts delivery immediately in the signup request.
2. Extend public News list/detail page and database caches from five minutes to six hours. Share one normalized-locale published snapshot across public list, detail, related-article and year-filter reads. Preserve immediate tag/path invalidation for administrative edits, publishing and withdrawal. Newsletter planning continues using its uncached content source.
3. Verify schedule spacing, daily delivery times, retry-window compatibility, public cache/invalidation, and the existing newsletter integration suite. Commit a clean candidate and run the repository's complete release verification before deployment.
4. Recheck the production deployment before replacing it, inherit current protected production environment values, and verify the installed cron definitions, public routes, cache artifacts and runtime logs after release. Never send a synthetic newsletter to real subscribers as a smoke test.
5. Inspect current Neon settings for the largest projects. Reduce only demonstrably unnecessary capacity; preserve scale-to-zero and data. Historical charges cannot be removed by this change. Measure actual post-release usage before claiming a monetary saving.

No database migration, subscriber mutation, billing-plan change, or new dependency is needed. If rollback is necessary, the previous production deployment is `dpl_AYsK9tQ1pVmTHh5ZZDn3bFLGib6R`; rolling back also restores its expensive minute schedule.

The first stage (`6e42979`, deployment `dpl_2JgCVzaEWLimwEmduGo4kyJ2Fr7N`) verified the reduced scheduler and six-hour cache. Its 9-minute observation showed one worker lease cycle but remaining article-detail index scans. The shared snapshot change addresses that observed public-read source. This first-stage deployment is the rollback target for the shared-reader change and retains the cheaper schedule.
