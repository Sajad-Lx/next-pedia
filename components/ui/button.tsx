import { cn } from "@/lib/utils";
import React from "react";

type variantProps = {
  variant?: "ghost";
  size?: "sm" | "lg";
};

const buttonVariants = ({ variant, size }: variantProps) => {
  const variantDefault =
    "bg-primary text-primary-foreground hover:bg-primary/90";
  const variantGhost =
    "hover:bg-accent hover:text-accent-foreground";

  const sizeDefault = "h-10 py-2 px-4";
  const sizeSm = "h-9 px-3 rounded-md";
  const sizeLg = "h-11 px-8 rounded-md";

  var varint;
  var siz;

  switch (variant) {
    case "ghost":
      varint = variantGhost;
      break;

    default:
      varint = variantDefault;
      break;
  }
  switch (size) {
    case "sm":
      siz = sizeSm;
      break;
    case "lg":
      siz = sizeLg;
      break;

    default:
      siz = sizeDefault;
      break;
  }

  const defvar =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background" +
    " " +
    varint +
    " " +
    siz;
  return defvar;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    variantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
