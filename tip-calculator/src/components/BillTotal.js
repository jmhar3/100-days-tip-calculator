import { useCallback } from "react";

export const BillTotal = ({ setBill, bill }) => {
  const onChange = useCallback(
    (event) => {
      event.target.value === ""
        ? setBill(undefined)
        : setBill(parseInt(event.target.value));
    },
    [setBill]
  );

  return (
    <div id="bill-total">
      <p>Bill</p>
      <input type="number" value={bill} placeholder="0" onChange={onChange} />
    </div>
  );
};
