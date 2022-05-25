import "./App.css";
import { BillTotal } from "./components/BillTotal";
import { TipSelect } from "./components/tip-select/TipSelect";
import { PeopleTotal } from "./components/PeopleTotal";
import { TipPerPerson } from "./components/TipPerPerson";

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
      </div>
    </div>
  );
}

export default App;
