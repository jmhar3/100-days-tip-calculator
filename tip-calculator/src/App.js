import "./App.css";
import { BillTotal } from "./components/BillTotal";
import { TipSelect } from "./components/tip-select/TipSelect";
import { PeopleTotal } from "./components/PeopleTotal";
import { TipPerPerson } from "./components/TipPerPerson";
import { TotalPerPerson } from "./components/TotalPerPerson";
import { ResetButton } from "./components/ResetButton";
import { useCallback, useMemo, useState } from "react";

function App() {
  const baseValues = {
    bill: 0,
    tip: 0.0,
    people: 0,
  };

  const [calculatorValues, setCalculatorValues] = useState(baseValues);

  const { bill, tip, people } = calculatorValues;

  const setBill = useCallback(
    (value) => {
      setCalculatorValues((calculatorValues) => {
        return { ...calculatorValues, bill: value };
      });
    },
    [setCalculatorValues]
  );

  const setTip = useCallback(
    (value) => {
      setCalculatorValues((calculatorValues) => {
        return { ...calculatorValues, tip: value };
      });
    },
    [setCalculatorValues]
  );

  const setPeople = useCallback(
    (value) => {
      setCalculatorValues((calculatorValues) => {
        return { ...calculatorValues, people: value };
      });
    },
    [setCalculatorValues]
  );

  const onResetClick = useCallback(() => {
    setCalculatorValues(baseValues);
  }, [setCalculatorValues]);

  const tipAmount = useMemo(() => {
    return (parseFloat(bill) * tip) / people;
  }, [bill, tip, people]);

  const totalAmount = useMemo(() => {
    return (bill * (tip + 1)) / people;
  }, [bill, tip, people]);

  return (
    <div id="calculator" className="container">
      <div id="inputs" className="container">
        <BillTotal setBill={setBill} />
        <TipSelect setTip={setTip} />
        <PeopleTotal setPeople={setPeople} />
      </div>
      <div id="totals" className="container">
        <TipPerPerson tipAmount={tipAmount} />
        <TotalPerPerson totalAmount={totalAmount} />
        <ResetButton onResetClick={onResetClick} />
      </div>
    </div>
  );
}

export default App;
