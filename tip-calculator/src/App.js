import { useCallback, useMemo, useState } from "react";

import "./App.css";
import splitterLogo from './images/logo.svg'
import { BillTotal } from "./components/BillTotal";
import { TipSelect } from "./components/tip-select/TipSelect";
import { PeopleTotal } from "./components/PeopleTotal";
import { TipPerPerson } from "./components/TipPerPerson";
import { TotalPerPerson } from "./components/TotalPerPerson";
import { ResetButton } from "./components/ResetButton";

function App() {
  const baseValues = {
    bill: "",
    tip: "",
    people: "",
    customTip: "",
  };

  const [calculatorValues, setCalculatorValues] = useState(baseValues);

  const [selected, setSelected] = useState(null);

  const { bill, tip, people, customTip } = calculatorValues;

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

  const setCustomTip = useCallback(
    (value) => {
      setCalculatorValues((calculatorValues) => {
        return { ...calculatorValues, customTip: value };
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
    setSelected(null);
  }, [setCalculatorValues]);

  const tipAmount = useMemo(() => {
   const selectedTip = selected === "custom" ? customTip : tip
    if (bill && selectedTip && people) {
      return ((parseFloat(bill) * (selectedTip / 100)) / people).toFixed(2);
    } else {
      return "0.00";
    }
  }, [bill, tip, people, customTip]);

  const totalAmount = useMemo(() => {
   const selectedTip = selected === "custom" ? customTip : tip
    if (bill && selectedTip && people) {
      return ((bill * ((selectedTip / 100) + 1)) / people).toFixed(2);
    } else {
      return "0.00";
    }
  }, [bill, tip, people, customTip]);

  const isResetDisabled = useMemo(() => {
    return tipAmount === "0.00";
  }, [tipAmount]);

  return (
   <>
   <img src={splitterLogo} id="logo"/>
    <div id="calculator" className="container">
      <div id="inputs" className="container">
        <BillTotal bill={calculatorValues.bill} setBill={setBill} />
        <TipSelect
          setTip={setTip}
          selected={selected}
          setSelected={setSelected}
          tip={calculatorValues.tip}
          customTip={calculatorValues.customTip}
          setCustomTip={setCustomTip}
        />
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
    </>
  );
}

export default App;
