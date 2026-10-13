"use client";

import type { AnchorHTMLAttributes } from "react";

type PaginationLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & { href: string };

/** These listings already hold their data locally; only the page query changes. */
export default function PaginationLink({ href, ...props }: PaginationLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (event.currentTarget.target && event.currentTarget.target !== "_self") return;
        const target = new URL(href, window.location.href);
        if (target.origin !== window.location.origin || target.pathname !== window.location.pathname) return;

        event.preventDefault();
        // Next.js syncs native history updates with useSearchParams, without a
        // server navigation that can reuse a stale static-route query cache.
        if (target.href !== window.location.href) window.history.pushState(null, "", href);
        window.scrollTo({ top: 0, behavior: "instant" });
      }}
    />
  );
}
