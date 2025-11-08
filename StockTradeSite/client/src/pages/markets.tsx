import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StockCard } from "@/components/stock-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//todo: remove mock functionality
const mockMarketIndices = [
  { name: "TradeHub 500", value: 4523.45, change: 45.23, changePercent: 1.01 },
  { name: "Tech Index", value: 1234.56, change: -12.34, changePercent: -0.99 },
  { name: "Finance Index", value: 789.12, change: 23.45, changePercent: 3.06 },
];

const mockTopGainers = [
  { symbol: "CYBER", name: "CyberSec Corp", price: 156.78, change: 23.45, changePercent: 17.59 },
  { symbol: "BIOTECH", name: "BioTech Innovations", price: 89.34, change: 12.67, changePercent: 16.52 },
  { symbol: "SOLAR", name: "SolarMax Energy", price: 67.89, change: 8.90, changePercent: 15.09 },
  { symbol: "CLOUD", name: "CloudNet Systems", price: 234.56, change: 28.34, changePercent: 13.74 },
];

const mockTopLosers = [
  { symbol: "LEGACY", name: "Legacy Industries", price: 23.45, change: -5.67, changePercent: -19.48 },
  { symbol: "OLDTECH", name: "OldTech Corp", price: 45.67, change: -8.90, changePercent: -16.31 },
  { symbol: "RETAIL", name: "RetailMax Corp", price: 34.56, change: -4.23, changePercent: -10.90 },
  { symbol: "TELECOM", name: "TeleCom Global", price: 78.90, change: -7.12, changePercent: -8.28 },
];

const mockMostActive = [
  { symbol: "TECH", name: "TechCorp Industries", price: 105.20, change: 6.70, changePercent: 6.80 },
  { symbol: "FINANCE", name: "FinanceHub Global", price: 47.85, change: 2.55, changePercent: 5.63 },
  { symbol: "ENERGY", name: "EnergyFlow Systems", price: 76.20, change: -2.70, changePercent: -3.42 },
  { symbol: "HEALTH", name: "HealthTech Solutions", price: 89.75, change: 3.25, changePercent: 3.76 },
];

export default function Markets() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Markets</h1>
        <p className="text-muted-foreground">Overview of market performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {mockMarketIndices.map((index) => (
          <Card key={index.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {index.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-mono font-bold" data-testid={`text-index-${index.name}`}>
                {index.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              <div
                className={`flex items-center gap-1 mt-2 font-mono text-sm ${
                  index.change >= 0 ? "text-chart-2" : "text-destructive"
                }`}
              >
                <span>
                  {index.change >= 0 ? "+" : ""}
                  {index.change.toFixed(2)} ({index.change >= 0 ? "+" : ""}
                  {index.changePercent.toFixed(2)}%)
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="gainers" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="gainers" data-testid="tab-gainers">Top Gainers</TabsTrigger>
          <TabsTrigger value="losers" data-testid="tab-losers">Top Losers</TabsTrigger>
          <TabsTrigger value="active" data-testid="tab-active">Most Active</TabsTrigger>
        </TabsList>
        <TabsContent value="gainers" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mockTopGainers.map((stock) => (
              <StockCard key={stock.symbol} {...stock} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="losers" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mockTopLosers.map((stock) => (
              <StockCard key={stock.symbol} {...stock} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mockMostActive.map((stock) => (
              <StockCard key={stock.symbol} {...stock} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
