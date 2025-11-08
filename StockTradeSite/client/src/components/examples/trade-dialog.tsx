import { useState } from "react";
import { TradeDialog } from "../trade-dialog";
import { Button } from "@/components/ui/button";

export default function TradeDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Trade Dialog</Button>
      <TradeDialog
        open={open}
        onOpenChange={setOpen}
        symbol="TECH"
        currentPrice={105.20}
        companyName="TechCorp Industries"
      />
    </div>
  );
}
