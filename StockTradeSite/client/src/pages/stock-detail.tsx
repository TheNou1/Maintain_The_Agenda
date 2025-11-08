import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceChange } from "@/components/price-change";
import { PriceChart } from "@/components/price-chart";
import { TradeDialog } from "@/components/trade-dialog";
import { Star, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//todo: remove mock functionality
const mockStockData: Record<string, any> = {
  TECH: {
    symbol: "TECH",
    name: "TechCorp Industries",
    price: 105.20,
    change: 6.70,
    changePercent: 6.80,
    marketCap: "12.5B",
    volume: "2.3M",
    peRatio: "24.5",
    high52Week: "120.50",
    low52Week: "78.20",
    description: "TechCorp Industries is a leading technology company specializing in cloud computing, artificial intelligence, and enterprise software solutions. Founded in 2005, the company has grown to become a major player in the tech industry.",
    sector: "Technology",
    ceo: "Sarah Johnson",
    employees: "12,500",
  },
  FINANCE: {
    symbol: "FINANCE",
    name: "FinanceHub Global",
    price: 47.85,
    change: 2.55,
    changePercent: 5.63,
    marketCap: "8.2B",
    volume: "1.8M",
    peRatio: "18.3",
    high52Week: "52.30",
    low52Week: "38.90",
    description: "FinanceHub Global provides comprehensive financial services including banking, investment management, and insurance solutions to clients worldwide.",
    sector: "Finance",
    ceo: "Michael Chen",
    employees: "8,900",
  },
};

export default function StockDetail() {
  const [, params] = useRoute("/stock/:symbol");
  const [tradeDialogOpen, setTradeDialogOpen] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const symbol = params?.symbol || "TECH";
  const stock = mockStockData[symbol] || mockStockData.TECH;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold" data-testid="text-stock-symbol">{stock.symbol}</h1>
          <p className="text-lg text-muted-foreground">{stock.name}</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsWatchlisted(!isWatchlisted)}
            data-testid="button-watchlist"
          >
            <Star className={`h-5 w-5 ${isWatchlisted ? "fill-current text-yellow-500" : ""}`} />
          </Button>
          <Button onClick={() => setTradeDialogOpen(true)} data-testid="button-trade">
            <TrendingUp className="h-5 w-5 mr-2" />
            Trade
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <div>
          <p className="text-5xl font-mono font-bold" data-testid="text-stock-price">
            ${stock.price.toFixed(2)}
          </p>
          <PriceChange value={stock.change} percentage={stock.changePercent} className="mt-2" />
        </div>
      </div>

      <PriceChart />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>About {stock.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="about">
              <TabsList>
                <TabsTrigger value="about" data-testid="tab-about">About</TabsTrigger>
                <TabsTrigger value="stats" data-testid="tab-stats">Statistics</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-4 mt-4">
                <p className="text-muted-foreground">{stock.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">CEO</p>
                    <p className="font-semibold">{stock.ceo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Employees</p>
                    <p className="font-semibold">{stock.employees}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Sector</p>
                    <p className="font-semibold">{stock.sector}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="stats" className="mt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="font-mono font-semibold">{stock.marketCap}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Volume</p>
                    <p className="font-mono font-semibold">{stock.volume}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">P/E Ratio</p>
                    <p className="font-mono font-semibold">{stock.peRatio}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">52 Week High</p>
                    <p className="font-mono font-semibold">${stock.high52Week}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">52 Week Low</p>
                    <p className="font-mono font-semibold">${stock.low52Week}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Trade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Price</p>
              <p className="text-3xl font-mono font-bold">${stock.price.toFixed(2)}</p>
            </div>
            <Button
              className="w-full"
              onClick={() => setTradeDialogOpen(true)}
              data-testid="button-quick-buy"
            >
              Buy Shares
            </Button>
            <Button
              className="w-full"
              variant="destructive"
              onClick={() => setTradeDialogOpen(true)}
              data-testid="button-quick-sell"
            >
              Sell Shares
            </Button>
          </CardContent>
        </Card>
      </div>

      <TradeDialog
        open={tradeDialogOpen}
        onOpenChange={setTradeDialogOpen}
        symbol={stock.symbol}
        currentPrice={stock.price}
        companyName={stock.name}
      />
    </div>
  );
}
