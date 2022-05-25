import { TipButton } from "./TipButton";
import { CustomTip } from "./CustomTip";

export const TipSelect = () => {
  return (
    <div>
      <p>Select Tip %</p>
      <div id="tip-selects">
        <TipButton percentage="5" />
        <TipButton percentage="10" />
        <TipButton percentage="15" />
        <TipButton percentage="25" />
        <TipButton percentage="50" />
        <CustomTip />
      </div>
    </div>
  );
};
