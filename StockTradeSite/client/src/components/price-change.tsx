import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceChangeProps {
  value: number;
  percentage: number;
  className?: string;
}

export function PriceChange({ value, percentage, className }: PriceChangeProps) {
  const isPositive = value >= 0;

  return (
    <div
      className={cn(
        "flex items-center gap-1 font-mono text-sm font-semibold",
        isPositive ? "text-chart-2" : "text-destructive",
        className
      )}
      data-testid="text-price-change"
    >
      {isPositive ? (
        <ArrowUp className="h-4 w-4" />
      ) : (
        <ArrowDown className="h-4 w-4" />
      )}
      <span>
        {isPositive ? "+" : ""}${Math.abs(value).toFixed(2)} ({isPositive ? "+" : ""}
        {percentage.toFixed(2)}%)
      </span>
    </div>
  );
}
