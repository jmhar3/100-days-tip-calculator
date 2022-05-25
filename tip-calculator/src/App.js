import "./App.css";
import { BillTotal } from "./components/BillTotal";
import { TipSelect } from "./components/tip-select/TipSelect";
import { PeopleTotal } from "./components/PeopleTotal";
import { TipPerPerson } from "./components/TipPerPerson";
import { TotalPerPerson } from "./components/TotalPerPerson";
import { ResetButton } from "./components/ResetButton";

function App() {
  return (
    <div id="calculator" className="container">
      <div id="inputs" className="container">
        <BillTotal />
        <TipSelect />
        <PeopleTotal />
      </div>
      <div id="totals" className="container">
        <TipPerPerson />
        <TotalPerPerson />
        <ResetButton />
      </div>
    </div>
  );
}

export default App;
