import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockTransactions = [
  {
    id: 1,
    type: "BUY",
    symbol: "TECH",
    name: "TechCorp Industries",
    shares: 50,
    price: 105.20,
    total: 5260,
    date: "2024-11-08",
    time: "14:32:15",
  },
  {
    id: 2,
    type: "SELL",
    symbol: "RETAIL",
    name: "RetailMax Corp",
    shares: 75,
    price: 34.50,
    total: 2587.50,
    date: "2024-11-08",
    time: "10:15:42",
  },
  {
    id: 3,
    type: "BUY",
    symbol: "HEALTH",
    name: "HealthTech Solutions",
    shares: 100,
    price: 89.75,
    total: 8975,
    date: "2024-11-07",
    time: "16:45:30",
  },
  {
    id: 4,
    type: "BUY",
    symbol: "FINANCE",
    name: "FinanceHub Global",
    shares: 150,
    price: 45.30,
    total: 6795,
    date: "2024-11-07",
    time: "11:20:18",
  },
  {
    id: 5,
    type: "SELL",
    symbol: "ENERGY",
    name: "EnergyFlow Systems",
    shares: 50,
    price: 78.90,
    total: 3945,
    date: "2024-11-06",
    time: "13:55:22",
  },
  {
    id: 6,
    type: "BUY",
    symbol: "CYBER",
    name: "CyberSec Corp",
    shares: 25,
    price: 133.33,
    total: 3333.25,
    date: "2024-11-06",
    time: "09:30:00",
  },
];

export default function History() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transaction History</h1>
        <p className="text-muted-foreground">Complete record of your trades</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg border"
                data-testid={`transaction-${transaction.id}`}
              >
                <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                  <Badge
                    variant={transaction.type === "BUY" ? "default" : "destructive"}
                    className="w-16 justify-center"
                    data-testid={`badge-type-${transaction.id}`}
                  >
                    {transaction.type}
                  </Badge>
                  <div>
                    <p className="font-semibold">{transaction.symbol}</p>
                    <p className="text-sm text-muted-foreground">{transaction.name}</p>
                  </div>
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="text-sm text-muted-foreground">Shares</p>
                  <p className="font-mono font-semibold">{transaction.shares}</p>
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-mono font-semibold">${transaction.price.toFixed(2)}</p>
                </div>

                <div className="text-right min-w-[120px]">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="font-mono font-semibold">
                    ${transaction.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="text-right min-w-[140px]">
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-mono text-sm">
                    {transaction.date} {transaction.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
