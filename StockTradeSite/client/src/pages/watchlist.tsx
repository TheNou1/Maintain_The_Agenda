import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { PriceChange } from "@/components/price-change";
import { Link } from "wouter";
import { TradeDialog } from "@/components/trade-dialog";

//todo: remove mock functionality
const mockWatchlist = [
  { symbol: "TECH", name: "TechCorp Industries", price: 105.20, change: 6.70, changePercent: 6.80 },
  { symbol: "FINANCE", name: "FinanceHub Global", price: 47.85, change: 2.55, changePercent: 5.63 },
  { symbol: "CYBER", name: "CyberSec Corp", price: 156.78, change: 23.45, changePercent: 17.59 },
  { symbol: "BIOTECH", name: "BioTech Innovations", price: 89.34, change: 12.67, changePercent: 16.52 },
];

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState(mockWatchlist);
  const [tradeDialogOpen, setTradeDialogOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(mockWatchlist[0]);

  const removeFromWatchlist = (symbol: string) => {
    setWatchlist(watchlist.filter((stock) => stock.symbol !== symbol));
  };

  const handleTrade = (stock: typeof mockWatchlist[0]) => {
    setSelectedStock(stock);
    setTradeDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Watchlist</h1>
          <p className="text-muted-foreground">Track your favorite stocks</p>
        </div>
        <Button data-testid="button-add-to-watchlist">
          <Plus className="h-5 w-5 mr-2" />
          Add Stock
        </Button>
      </div>

      {watchlist.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">Your watchlist is empty</p>
            <Button data-testid="button-browse-markets">Browse Markets</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {watchlist.map((stock) => (
            <Card key={stock.symbol} className="hover-elevate" data-testid={`card-watchlist-${stock.symbol}`}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Link href={`/stock/${stock.symbol}`}>
                      <CardTitle className="hover:text-primary cursor-pointer">
                        {stock.symbol}
                      </CardTitle>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{stock.name}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromWatchlist(stock.symbol)}
                    data-testid={`button-remove-${stock.symbol}`}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-3xl font-mono font-bold">${stock.price.toFixed(2)}</p>
                  <PriceChange value={stock.change} percentage={stock.changePercent} className="mt-2" />
                </div>
                <Button
                  className="w-full"
                  onClick={() => handleTrade(stock)}
                  data-testid={`button-trade-${stock.symbol}`}
                >
                  Trade
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <TradeDialog
        open={tradeDialogOpen}
        onOpenChange={setTradeDialogOpen}
        symbol={selectedStock.symbol}
        currentPrice={selectedStock.price}
        companyName={selectedStock.name}
      />
    </div>
  );
}
