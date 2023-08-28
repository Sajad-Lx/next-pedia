"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "transition duration-200 inline-flex items-center justify-center text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 disabled:drop-shadow-none disabled:opacity-60 disabled:pointer-events-none ring-offset-background active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]",
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
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  active?: boolean;
}

const FirstSegmentButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { active, onClick } = props;

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "rounded-s-full"
          // active ? "active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" : ""
        )}
        ref={ref}
        onClick={onClick}
        {...props}
      />
    );
  }
);
FirstSegmentButton.displayName = "FirstSegmentButton";

const LastSegmentButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { active, onClick } = props;

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "rounded-e-full"
          // active ? "active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" : ""
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
LastSegmentButton.displayName = "LastSegmentButton";

const SegmentButtons = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { active, onClick } = props;

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className })
          // active ? "active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" : ""
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
SegmentButtons.displayName = "SegmentButtons";

export interface SegmentButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {}

type ClonedButtonElement = React.ReactElement<
  ButtonProps & { children?: React.ReactNode }
>;

const SegmentButtonGroup = React.forwardRef<
  HTMLDivElement,
  SegmentButtonGroupProps
>(({ className, variant, ...props }, ref) => {
  // const [activeButton, setActiveButton] = React.useState<number>(0)

  const handleButtonClick = (index: number) => {
    // setActiveButton(index)
    console.log(index);
  };

  const { children } = props;

  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const clonedChild = child as ClonedButtonElement;
      return React.cloneElement(clonedChild, {
        // active: index === activeButton,
        onClick: () => handleButtonClick(index),
      });
    }
    return child;
  });

  const { firstItem, middleItems, lastItem } = getSplitValues(modifiedChildren);

  return (
    <div className={className} ref={ref} {...props}>
      {firstItem}
      {middleItems}
      {lastItem}
    </div>
  );
});
SegmentButtonGroup.displayName = "SegmentButton";

function getSplitValues(items: any) {
  const firstItem = items.at(0);
  let lastItem = null;
  let middleItems = [];
  if (items.length > 1) {
    lastItem = items[items.length - 1];
    for (let i = 1; i < items.length - 1; i++) {
      middleItems.push(items[i]);
    }
  }

  return { firstItem, middleItems, lastItem };
}

// {firstItem && <FirstButton key={0}>{firstItem}</FirstButton>}
//   {middleItems &&
//     middleItems.map((item, index) => (
//       <MiddleButtons key={index + 1}>{item}</MiddleButtons>
//     ))}
//   {lastItem && <LastButton>{lastItem}</LastButton>}

export {
  SegmentButtonGroup,
  FirstSegmentButton,
  LastSegmentButton,
  SegmentButtons,
  buttonVariants,
};
