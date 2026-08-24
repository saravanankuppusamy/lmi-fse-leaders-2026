// PremiumDisplay.tsx (Solution)
import { formatCurrency } from "../premium";

interface PremiumDisplayProps {
  premium: number | null;
  error: string;
}

function PremiumDisplay({ premium, error }: PremiumDisplayProps) {
  return (
    <div className="estimate" aria-live="polite">
      <span className="estimate-label">Estimated monthly premium</span>
      <span className="estimate-amount">
        {premium === null ? "—" : formatCurrency(premium)}
      </span>
      {error && <span className="sr-only">{error}</span>}
    </div>
  );
}

export default PremiumDisplay;
