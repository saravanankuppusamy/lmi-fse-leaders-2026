// PremiumDisplay.tsx
// A small presentational component. It receives data through PROPS and just
// displays it — it has no state of its own. This is the most common kind of
// React component.
import { formatCurrency } from "../premium";

// TODO 1: Define the props interface for this component.
//   It needs:
//     premium: number | null   (null when the input is invalid)
//     error: string            (empty string when there is no error)
//
// interface PremiumDisplayProps {
//   ...
// }

function PremiumDisplay(/* TODO 2: type the props parameter with your interface */ props) {
  // TODO 3: read `premium` and `error` from props.
  return (
    <div className="estimate" aria-live="polite">
      <span className="estimate-label">Estimated monthly premium</span>
      {/* TODO 4: if premium is null, show "—". Otherwise show formatCurrency(premium). */}
      <span className="estimate-amount">—</span>
    </div>
  );
}

export default PremiumDisplay;
