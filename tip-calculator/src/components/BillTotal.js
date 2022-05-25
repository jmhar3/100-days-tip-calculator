import iconDollar from "../images/icon-dollar.svg";

export const BillTotal = () => {
  return (
    <div>
      <p>Bill</p>
      <div className="input-container">
        <img src={iconDollar} />
        <input type="decimal" placeholder="0" />
      </div>
    </div>
  );
};
