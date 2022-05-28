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
      <span>
        <p>Bill</p>
        {!bill && <p className="error">Can't be zero</p>}
      </span>
      <input
        type="number"
        value={bill}
        placeholder="0"
        onChange={onChange}
        style={{ border: bill === 0 && "2px solid hsl(12, 81%, 46%)" }}
      />
    </div>
  );
};
