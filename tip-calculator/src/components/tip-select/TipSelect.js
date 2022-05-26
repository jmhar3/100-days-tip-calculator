import { TipButton } from "./TipButton";
import { CustomTip } from "./CustomTip";
import { useCallback } from "react";

export const TipSelect = (props) => {
 const { setTip } = props;

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
        <TipButton percentage="5" {...props} />
        <TipButton percentage="10" {...props} />
        <TipButton percentage="15" {...props} />
        <TipButton percentage="25" {...props} />
        <TipButton percentage="50" {...props} />
        <CustomTip onChange={onChange} {...props} />
      </div>
    </div>
  );
};
