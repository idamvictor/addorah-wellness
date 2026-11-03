import Link from "next/link";
import type { ComponentProps } from "react";

type InertLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  /** When omitted the content renders without navigating (page not built yet). */
  href?: string;
};

/**
 * A link that only navigates when it has somewhere to go. Pages that are not
 * designed yet render the same markup as a non-interactive span.
 */
export function InertLink({ href, children, className, ...props }: InertLinkProps) {
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <span
      aria-disabled="true"
      aria-label={props["aria-label"]}
      className={className}
      data-inert-link=""
    >
      {children}
    </span>
  );
}
