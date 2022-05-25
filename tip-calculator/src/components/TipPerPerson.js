export const TipPerPerson = ({tipAmount}) => {
  return (
    <div className="per-person">
      <div>
        <h4>Tip Amount</h4>
        <p>/ person</p>
      </div>
      <h1>${tipAmount}</h1>
    </div>
  );
};
