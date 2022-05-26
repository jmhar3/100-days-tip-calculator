import { useCallback } from "react";

export const BillTotal = ({ setBill, bill }) => {
  const onChange = useCallback(
    (event) => {
      event.target.value === ""
        ? setBill(0)
        : setBill(parseInt(event.target.value));
    },
    [setBill]
  );

  return (
    <div id="bill-total">
      <p>Bill</p>
      <input type="number" placeholder="0" onChange={onChange} />
    </div>
  );
};
