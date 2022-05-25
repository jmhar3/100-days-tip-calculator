import iconDollar from "../images/icon-dollar.svg";
import { useCallback } from "react";

export const BillTotal = ({ setBill }) => {
  const onChange = useCallback(
    (event) => {
     event.target.value === "" ? setBill(0) : setBill(parseInt(event.target.value));
    },
    [setBill]
  );

  return (
    <div>
      <p>Bill</p>
      <div className="input-container">
        <img src={iconDollar} />
        <input type="number" placeholder="0" onChange={onChange} />
      </div>
    </div>
  );
};
