import { cn } from "../lib/utils";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const Component = ({ className, children, ...props }: ButtonProps) => {
  return (
    <div
      className={cn(
        "font-medium rounded-xl border bg-card text-card-foreground shadow p-5", className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
