import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

//todo: remove mock functionality
const mockStocks = [
  { symbol: "TECH", name: "TechCorp Industries" },
  { symbol: "FINANCE", name: "FinanceHub Global" },
  { symbol: "ENERGY", name: "EnergyFlow Systems" },
  { symbol: "HEALTH", name: "HealthTech Solutions" },
  { symbol: "RETAIL", name: "RetailMax Corp" },
];

export function StockSearch() {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <>
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search stocks..."
          className="pl-9"
          onClick={() => setOpen(true)}
          data-testid="input-stock-search"
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search stocks..." data-testid="input-search-dialog" />
        <CommandList>
          <CommandEmpty>No stocks found.</CommandEmpty>
          <CommandGroup heading="Stocks">
            {mockStocks.map((stock) => (
              <CommandItem
                key={stock.symbol}
                onSelect={() => {
                  setLocation(`/stock/${stock.symbol}`);
                  setOpen(false);
                }}
                data-testid={`item-stock-${stock.symbol}`}
              >
                <div className="flex flex-col">
                  <span className="font-semibold">{stock.symbol}</span>
                  <span className="text-sm text-muted-foreground">{stock.name}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
