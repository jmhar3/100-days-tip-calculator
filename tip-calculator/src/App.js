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
    bill: undefined,
    tip: undefined,
    people: undefined,
  };

  const [calculatorValues, setCalculatorValues] = useState(baseValues);

  const [selected, setSelected] = useState(null);

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
    setSelected(null)
  }, [setCalculatorValues]);

  const tipAmount = useMemo(() => {
    if (bill && tip && people) {
      return ((parseFloat(bill) * (tip / 100)) / people).toFixed(2);
    } else {
      return "0.00";
    }
  }, [bill, tip, people]);

  const totalAmount = useMemo(() => {
    if (bill && tip && people) {
      return ((bill * ((tip / 100) + 1)) / people).toFixed(2);
    } else {
      return "0.00";
    }
  }, [bill, tip, people]);

  const isResetDisabled = useMemo(() => {
    return tipAmount === "0.00";
  }, [tipAmount]);

  return (
    <div id="calculator" className="container">
      <div id="inputs" className="container">
        <BillTotal bill={calculatorValues.bill} setBill={setBill} />
        <TipSelect setTip={setTip} selected={selected} setSelected={setSelected} tip={calculatorValues.tip} />
        <PeopleTotal people={calculatorValues.people} setPeople={setPeople} />
      </div>
      <div id="totals" className="container">
        <div>
          <TipPerPerson tipAmount={tipAmount} />
          <TotalPerPerson totalAmount={totalAmount} />
        </div>
        <ResetButton
          onResetClick={onResetClick}
          isResetDisabled={isResetDisabled}
        />
      </div>
    </div>
  );
}

export default App;
