import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ring-2 ring-inset", {
  variants: {
    variant: {
      default: "bg-card text-primary ring-border",
      destructive: "bg-destructive/20 text-red-300 ring-destructive/50",
    },
    color: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
  },
});


const Badge = ({
  className,
  variant,
  color,
  ...props
}) => {
  return (
    <div
      className={cn(badgeVariants({ variant, color, className }))}
      {...props}
    />
  );
};

Badge.displayName = "Badge";

export { Badge, badgeVariants };
