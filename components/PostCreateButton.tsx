"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";
import CustomToast from "@/components/ui/custom-toast";
import { Icons } from "@/components/Icons";
import {
  ButtonProps,
  buttonVariants,
} from "@/components/material-ui/Buttons/FAB";

interface PostCreateButtonProps extends ButtonProps {}

export function PostCreateButton({
  className,
  variant,
  size,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onClick() {
    setIsLoading(true);

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Post",
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      if (response.status === 402) {
        return CustomToast({
          title: "Limit of 3 posts reached.",
          description: "Please upgrade to the PRO plan.",
        });
      }

      return CustomToast({
        title: "Something went wrong.",
        description: "Your post was not created. Please try again.",
      });
    }

    const post = await response.json();

    // This forces a cache invalidation.
    router.refresh();

    router.push(`/editor/${post.id}`);
  }

  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          buttonVariants({ variant, size }),
          {
            "cursor-not-allowed opacity-60": isLoading,
          },
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.add className="h-4 w-4" />
        )}
        <span className="pl-2">Add Post</span>
      </button>
      <Toaster />
    </>
  );
}
