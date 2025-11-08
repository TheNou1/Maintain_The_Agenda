import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceChange } from "@/components/price-change";
import { StockCard } from "@/components/stock-card";

//todo: remove mock functionality
const mockPortfolio = {
  totalValue: 125430.50,
  cash: 25430.50,
  todayChange: 2340.25,
  todayChangePercent: 1.90,
  totalChange: 25430.50,
  totalChangePercent: 25.43,
};

const mockTopHoldings = [
  { symbol: "TECH", name: "TechCorp Industries", shares: 150, avgPrice: 98.50, currentPrice: 105.20, change: 6.70, changePercent: 6.80 },
  { symbol: "FINANCE", name: "FinanceHub Global", shares: 200, avgPrice: 45.30, currentPrice: 47.85, change: 2.55, changePercent: 5.63 },
  { symbol: "ENERGY", name: "EnergyFlow Systems", shares: 100, avgPrice: 78.90, currentPrice: 76.20, change: -2.70, changePercent: -3.42 },
];

const mockRecentActivity = [
  { type: "BUY", symbol: "TECH", shares: 50, price: 105.20, date: "2 hours ago" },
  { type: "SELL", symbol: "RETAIL", shares: 75, price: 34.50, date: "5 hours ago" },
  { type: "BUY", symbol: "HEALTH", shares: 100, price: 89.75, date: "1 day ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your portfolio</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Portfolio Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-bold" data-testid="text-portfolio-value">
              ${mockPortfolio.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <PriceChange
              value={mockPortfolio.totalChange}
              percentage={mockPortfolio.totalChangePercent}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Today's Change
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-bold" data-testid="text-today-change">
              ${mockPortfolio.todayChange.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <PriceChange
              value={mockPortfolio.todayChange}
              percentage={mockPortfolio.todayChangePercent}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cash Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-bold" data-testid="text-cash-balance">
              ${mockPortfolio.cash.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Return
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-bold text-chart-2" data-testid="text-total-return">
              +{mockPortfolio.totalChangePercent.toFixed(2)}%
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTopHoldings.map((holding) => (
                <div
                  key={holding.symbol}
                  className="flex items-center justify-between p-4 rounded-lg border hover-elevate"
                  data-testid={`holding-${holding.symbol}`}
                >
                  <div className="flex-1">
                    <div className="font-semibold">{holding.symbol}</div>
                    <div className="text-sm text-muted-foreground">{holding.shares} shares</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-semibold">${holding.currentPrice.toFixed(2)}</div>
                    <PriceChange value={holding.change} percentage={holding.changePercent} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg border"
                  data-testid={`activity-${idx}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        activity.type === "BUY"
                          ? "bg-chart-2/10 text-chart-2"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {activity.type}
                    </div>
                    <div>
                      <div className="font-semibold">{activity.symbol}</div>
                      <div className="text-sm text-muted-foreground">{activity.shares} shares</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono">${activity.price.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground">{activity.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
