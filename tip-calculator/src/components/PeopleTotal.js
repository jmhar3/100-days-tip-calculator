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
      <p>Number of people</p>
      <input type="number" placeholder="0" onChange={onChange} />
    </div>
  );
};
