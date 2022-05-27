import { useMemo, useCallback } from "react";

export const CustomTip = ({ onChange, selected, setSelected, tip }) => {
  const styles = useMemo(() => {
    return selected === "custom"
      ? { border: "2px solid hsl(172, 67%, 45%)" }
      : {};
  }, [selected]);

  const handleClick = useCallback((event) => {
    setSelected("custom");
    onChange(event);
  });

  return (
    <input
      onClick={handleClick}
      style={styles}
      placeholder="Custom"
      onChange={onChange}
      value={tip}
    />
  );
};
