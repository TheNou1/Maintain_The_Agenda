import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface TradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  symbol: string;
  currentPrice: number;
  companyName: string;
}

export function TradeDialog({
  open,
  onOpenChange,
  symbol,
  currentPrice,
  companyName,
}: TradeDialogProps) {
  const [quantity, setQuantity] = useState("1");
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy");
  const { toast } = useToast();

  const total = parseFloat(quantity || "0") * currentPrice;

  const handleTrade = () => {
    toast({
      title: `${orderType === "buy" ? "Buy" : "Sell"} Order Placed`,
      description: `${orderType === "buy" ? "Bought" : "Sold"} ${quantity} shares of ${symbol} at $${currentPrice.toFixed(2)}`,
    });
    onOpenChange(false);
    setQuantity("1");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-trade">
        <DialogHeader>
          <DialogTitle>Trade {symbol}</DialogTitle>
          <DialogDescription>{companyName}</DialogDescription>
        </DialogHeader>
        <Tabs value={orderType} onValueChange={(v) => setOrderType(v as "buy" | "sell")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
            <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value={orderType} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                data-testid="input-quantity"
              />
            </div>
            <div className="space-y-2">
              <Label>Current Price</Label>
              <p className="text-2xl font-mono font-bold" data-testid="text-current-price">
                ${currentPrice.toFixed(2)}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Estimated Total</Label>
              <p className="text-2xl font-mono font-bold text-primary" data-testid="text-total">
                ${total.toFixed(2)}
              </p>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button
            onClick={handleTrade}
            className="w-full"
            variant={orderType === "buy" ? "default" : "destructive"}
            data-testid="button-confirm-trade"
          >
            {orderType === "buy" ? "Buy" : "Sell"} {quantity} Shares
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
