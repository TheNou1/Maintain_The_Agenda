import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PriceChange } from "./price-change";
import { Link } from "wouter";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export function StockCard({ symbol, name, price, change, changePercent }: StockCardProps) {
  return (
    <Link href={`/stock/${symbol}`}>
      <Card className="hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-stock-${symbol}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg" data-testid={`text-symbol-${symbol}`}>{symbol}</h3>
              <p className="text-sm text-muted-foreground truncate">{name}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-mono font-bold" data-testid={`text-price-${symbol}`}>
              ${price.toFixed(2)}
            </p>
            <PriceChange value={change} percentage={changePercent} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
