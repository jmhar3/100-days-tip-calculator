import iconPerson from "../images/icon-person.svg";

export const PeopleTotal = () => {
  return (
    <div>
      <p>Number of people</p>
      <div className="input-container">
        <img src={iconPerson} />
        <input type="number" placeholder="0" />
      </div>
    </div>
  );
};
