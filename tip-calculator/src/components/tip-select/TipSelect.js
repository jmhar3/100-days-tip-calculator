import { TipButton } from "./TipButton";
import { CustomTip } from "./CustomTip";
import { useCallback } from "react";

export const TipSelect = ({ setTip }) => {
  const onChange = useCallback(
    (event) => {
      event.target.value === ""
        ? setTip(0.0)
        : setTip(parseInt(event.target.value) / 100);
    },
    [setTip]
  );

  return (
    <div>
      <p>Select Tip %</p>
      <div id="tip-selects">
        <TipButton percentage="5" setTip={setTip} />
        <TipButton percentage="10" setTip={setTip} />
        <TipButton percentage="15" setTip={setTip} />
        <TipButton percentage="25" setTip={setTip} />
        <TipButton percentage="50" setTip={setTip} />
        <CustomTip onChange={onChange} />
      </div>
    </div>
  );
};
