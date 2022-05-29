import { useCallback } from "react";

export const PeopleTotal = ({ setPeople, people }) => {
  const onChange = useCallback(
    (event) => {
     if (!isNaN(event.target.value)) {
      event.target.value === ""
        ? setPeople(0)
        : setPeople(parseInt(event.target.value));
     }
    },
    [setPeople]
  );
  return (
    <div id="people-total">
      <span>
        <p>Number of people</p>
        {people === 0 && <p className="error">Can't be zero</p>}
      </span>
      <input
        value={people}
        placeholder="0"
        onChange={onChange}
        style={{ border: people === 0 && "2px solid hsl(12, 81%, 46%)" }}
      />
    </div>
  );
};
