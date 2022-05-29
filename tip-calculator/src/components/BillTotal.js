import { useCallback } from "react";

export const BillTotal = ({ setBill, bill }) => {
  const onChange = useCallback(
    (event) => {
     if (!isNaN(event.target.value)) {
      event.target.value === ""
        ? setBill(0)
        : setBill(parseInt(event.target.value));
     }
    },
    [setBill]
  );

  return (
    <div id="bill-total">
      <span>
        <p>Bill</p>
        {bill === 0 && <p className="error">Can't be zero</p>}
      </span>
      <input
        value={bill}
        placeholder="0"
        onChange={onChange}
        style={{ border: bill === 0 && "2px solid hsl(12, 81%, 46%)" }}
      />
    </div>
  );
};
