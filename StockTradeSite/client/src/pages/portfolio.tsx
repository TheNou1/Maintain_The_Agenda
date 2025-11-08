import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PriceChange } from "@/components/price-change";
import { Link } from "wouter";

//todo: remove mock functionality
const mockHoldings = [
  {
    symbol: "TECH",
    name: "TechCorp Industries",
    shares: 150,
    avgPrice: 98.50,
    currentPrice: 105.20,
    totalValue: 15780,
    totalCost: 14775,
    change: 1005,
    changePercent: 6.80,
  },
  {
    symbol: "FINANCE",
    name: "FinanceHub Global",
    shares: 200,
    avgPrice: 45.30,
    currentPrice: 47.85,
    totalValue: 9570,
    totalCost: 9060,
    change: 510,
    changePercent: 5.63,
  },
  {
    symbol: "ENERGY",
    name: "EnergyFlow Systems",
    shares: 100,
    avgPrice: 78.90,
    currentPrice: 76.20,
    totalValue: 7620,
    totalCost: 7890,
    change: -270,
    changePercent: -3.42,
  },
  {
    symbol: "HEALTH",
    name: "HealthTech Solutions",
    shares: 80,
    avgPrice: 86.50,
    currentPrice: 89.75,
    totalValue: 7180,
    totalCost: 6920,
    change: 260,
    changePercent: 3.76,
  },
];

const totalPortfolioValue = mockHoldings.reduce((sum, h) => sum + h.totalValue, 0);
const totalCost = mockHoldings.reduce((sum, h) => sum + h.totalCost, 0);
const totalGain = totalPortfolioValue - totalCost;
const totalGainPercent = (totalGain / totalCost) * 100;

export default function Portfolio() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
          <p className="text-muted-foreground">Your current holdings and performance</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-bold" data-testid="text-total-value">
              ${totalPortfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Cost
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-bold" data-testid="text-total-cost">
              ${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Gain/Loss
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-mono font-bold ${totalGain >= 0 ? "text-chart-2" : "text-destructive"}`} data-testid="text-total-gain">
              {totalGain >= 0 ? "+" : ""}${totalGain.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <p className={`text-sm font-mono mt-1 ${totalGain >= 0 ? "text-chart-2" : "text-destructive"}`}>
              {totalGain >= 0 ? "+" : ""}{totalGainPercent.toFixed(2)}%
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockHoldings.map((holding) => (
              <div
                key={holding.symbol}
                className="grid gap-4 p-4 rounded-lg border hover-elevate"
                data-testid={`row-holding-${holding.symbol}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <Link href={`/stock/${holding.symbol}`}>
                      <h3 className="font-bold text-lg hover:text-primary">{holding.symbol}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{holding.name}</p>
                  </div>
                  <div className="text-right min-w-[120px]">
                    <p className="text-sm text-muted-foreground">Shares</p>
                    <p className="font-mono font-semibold">{holding.shares}</p>
                  </div>
                  <div className="text-right min-w-[120px]">
                    <p className="text-sm text-muted-foreground">Avg Price</p>
                    <p className="font-mono font-semibold">${holding.avgPrice.toFixed(2)}</p>
                  </div>
                  <div className="text-right min-w-[120px]">
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="font-mono font-semibold">${holding.currentPrice.toFixed(2)}</p>
                  </div>
                  <div className="text-right min-w-[140px]">
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="font-mono font-semibold">${holding.totalValue.toLocaleString()}</p>
                  </div>
                  <div className="text-right min-w-[140px]">
                    <p className="text-sm text-muted-foreground">Gain/Loss</p>
                    <PriceChange value={holding.change} percentage={holding.changePercent} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
