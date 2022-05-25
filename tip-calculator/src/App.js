import "./App.css";
import { BillTotal } from "./components/BillTotal";
import { TipSelect } from "./components/tip-select/TipSelect";
import { PeopleTotal } from "./components/PeopleTotal";

function App() {
  return (
    <div id="calculator" className="container">
      <div id="inputs" className="container">
        <BillTotal />
        <TipSelect />
        <PeopleTotal />
      </div>
      <div id="totals" className="container"></div>
    </div>
  );
}

export default App;
