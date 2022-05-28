import { useCallback, useMemo } from "react";

export const TipButton = ({ percentage, setTip, selected, setSelected }) => {
  const onClick = useCallback(() => {
    setTip(percentage);
    setSelected(percentage)
  }, [setTip]);

  const styles = useMemo(() => {
   return selected === percentage ? {background: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)", border:" 2px solid hsl(172, 67%, 45%)"} : {}
   }, [selected, percentage])

  return (
    <button
      style={styles}
      placeholder="Custom"
      onClick={onClick}
    >
      {percentage}%
    </button>
  );
};
