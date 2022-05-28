import { useCallback } from "react";

export const PeopleTotal = ({ setPeople, people }) => {
  const onChange = useCallback(
    (event) => {
      event.target.value === ""
        ? setPeople(0)
        : setPeople(parseInt(event.target.value));
    },
    [setPeople]
  );
  return (
    <div id="people-total">
      <span>
        <p>Number of people</p>
        {!people && <p className="error">Can't be zero</p>}
      </span>
      <input
        type="number"
        value={people}
        placeholder="0"
        onChange={onChange}
        style={{ border: !people && "2px solid hsl(12, 81%, 46%)" }}
      />
    </div>
  );
};
