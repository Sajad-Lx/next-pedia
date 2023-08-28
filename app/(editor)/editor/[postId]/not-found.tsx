import Link from "next/link";

import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";
import { buttonVariants } from "@/components/material-ui/Buttons/Button";

export default function NotFound() {
  return (
    <EmptyPlaceholder className="mx-auto max-w-[800px]">
      <EmptyPlaceholder.Icon name="warning" />
      <EmptyPlaceholder.Title>Uh oh! Not Found</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        This post cound not be found. Please try again.
      </EmptyPlaceholder.Description>
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "elevated" })}
      >
        Go to Dashboard
      </Link>
    </EmptyPlaceholder>
  );
}
