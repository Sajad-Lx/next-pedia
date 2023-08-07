import React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "transition duration-200 inline-flex justify-center items-center text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:drop-shadow-none disabled:opacity-60 disabled:pointer-events-none ring-offset-background drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]",
  {
    variants: {
      variant: {
        default: "rounded-xl text-on-primary-container bg-mprimary-container",
        surface: "rounded-xl text-mprimary bg-surface",
        secondary:
          "rounded-xl text-on-secondary-container bg-msecondary-container",
        tertiary: "rounded-xl text-on-tertiary-container bg-tertiary-container",
      },
      size: {
        default: "p-4",
        sm: "h-11 px-3 text-sm",
        lg: "h-20 px-8 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const FAB = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
FAB.displayName = "FAB"

export { FAB, buttonVariants }
