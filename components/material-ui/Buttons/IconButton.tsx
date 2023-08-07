import React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "transition duration-200 inline-flex items-center justify-center rounded-full text-base font-medium focus-visible:outline-none focus-visible:ring-2 disabled:drop-shadow-none disabled:opacity-60 disabled:pointer-events-none ring-offset-background hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]",
  {
    variants: {
      variant: {
        filled: "bg-mprimary text-on-primary",
        outlined: "text-on-surface-variant border border-outline",
        tonal: "text-on-secondary-container bg-msecondary-container",
        standard:
          "text-on-surface-variant hover:bg-mbackground active:text-mprimary",
      },
      size: {
        default: "h-11 w-11 p-2",
        sm: "h-8 w-8 p-2 text-sm",
        lg: "h-14 w-14 p-2 text-xl",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
IconButton.displayName = "IconButton"

export { IconButton, buttonVariants }
