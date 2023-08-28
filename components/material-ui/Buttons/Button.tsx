import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "transition duration-200 inline-flex items-center rounded-full text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:drop-shadow-none disabled:opacity-60 disabled:pointer-events-none ring-offset-background hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]",
  {
    variants: {
      variant: {
        filled: "bg-mprimary text-on-primary",
        outlined: "text-mprimary border border-outline",
        elevated:
          "text-mprimary bg-surface drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]",
        tonal: "text-on-secondary-container bg-msecondary-container",
        text: "text-mprimary hover:bg-mbackground",
      },
      size: {
        default: "h-10 py-2 px-6",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
      alignText: {
        default: "justify-center",
        left: "justify-start",
        right: "justify-end",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
      alignText: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
