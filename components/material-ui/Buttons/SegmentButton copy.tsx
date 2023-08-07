import React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "transition duration-200 inline-flex items-center justify-center text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:drop-shadow-none disabled:opacity-60 disabled:pointer-events-none ring-offset-background hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]",
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
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-8",
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
    VariantProps<typeof buttonVariants> {
  items: string[]
}

const SegmentButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, items, ...props }, ref) => {
    const { firstItem, middleItems, lastItem } = getSplitValues(items)

    return (
      <div>
        {firstItem && (
          <button
            className={cn(
              buttonVariants({ variant, size, className }),
              "rounded-s-full"
            )}
            ref={ref}
            key={0}
            {...props}
          >
            {firstItem}
          </button>
        )}
        {middleItems &&
          middleItems.map((item, index) => (
            <button
              className={cn(buttonVariants({ variant, size, className }))}
              ref={ref}
              key={index + 1}
              {...props}
            >
              {item}
            </button>
          ))}
        {lastItem && (
          <button
            className={cn(
              buttonVariants({ variant, size, className }),
              "rounded-e-full"
            )}
            ref={ref}
            key={items.length - 1}
            {...props}
          >
            {lastItem}
          </button>
        )}
      </div>
    )
  }
)
SegmentButton.displayName = "Button"

export { SegmentButton, buttonVariants }

function getSplitValues(items: string[]) {
  const firstItem: String = items[0]
  let lastItem: String = ""
  let middleItems: String[] = []
  if (items.length > 1) {
    lastItem = items[items.length - 1]
    for (let i = 1; i < items.length - 1; i++) {
      middleItems.push(items[i])
    }
  }

  return { firstItem, middleItems, lastItem }
}
