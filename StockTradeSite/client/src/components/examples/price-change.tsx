import { PriceChange } from "../price-change";

export default function PriceChangeExample() {
  return (
    <div className="p-8 space-y-4">
      <PriceChange value={23.45} percentage={5.67} />
      <PriceChange value={-12.34} percentage={-3.42} />
    </div>
  );
}
