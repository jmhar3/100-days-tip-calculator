import { useCallback } from "react";

export const TipButton = ({ percentage, setTip }) => {
  const onClick = useCallback(() => {
    setTip(percentage / 100);
  }, [setTip]);

  return <button onClick={onClick}>{percentage}%</button>;
};
