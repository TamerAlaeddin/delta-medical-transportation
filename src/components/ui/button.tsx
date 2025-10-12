import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "primary";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-blue text-white hover:bg-[#043380] focus-visible:ring-brand-blue":
              variant === "default",
            "bg-accent text-white hover:bg-brand-green focus-visible:ring-accent shadow-lg hover:shadow-xl":
              variant === "primary",
            "border-2 border-brand-blue text-brand-blue hover:bg-blue-50 focus-visible:ring-brand-blue":
              variant === "outline",
            "hover:bg-gray-100 text-gray-700 focus-visible:ring-gray-400":
              variant === "ghost",
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-12 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };