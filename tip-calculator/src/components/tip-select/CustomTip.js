import { useMemo, useCallback } from "react";

export const CustomTip = ({ selected, setSelected, customTip, setCustomTip }) => {
  const styles = useMemo(() => {
    return selected === "custom"
      ? { border: "2px solid hsl(172, 67%, 45%)" }
      : {};
  }, [selected]);

  const handleClick = useCallback((event) => {
    setSelected("custom");
    onChange(event);
  });
  
  const onChange = useCallback(
   (event) => {
     event.target.value === ""
       ? setCustomTip(0)
       : setCustomTip(parseInt(event.target.value));
   },
   [setCustomTip]
 );

  return (
    <input
      onClick={handleClick}
      style={styles}
      placeholder="Custom"
      onChange={onChange}
      value={customTip}
    />
  );
};
