import { StockCard } from "../stock-card";

export default function StockCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <StockCard
        symbol="TECH"
        name="TechCorp Industries"
        price={105.20}
        change={6.70}
        changePercent={6.80}
      />
    </div>
  );
}
