import iconPerson from "../images/icon-person.svg";
import { useCallback } from "react";

export const PeopleTotal = ({ setPeople }) => {
  const onChange = useCallback(
    (event) => {
      event.target.value === "" ? setPeople(0) : setPeople(parseInt(event.target.value));
    },
    [setPeople]
  );
  return (
    <div>
      <p>Number of people</p>
      <div className="input-container">
        <img src={iconPerson} />
        <input type="number" placeholder="0" onChange={onChange} />
      </div>
    </div>
  );
};
