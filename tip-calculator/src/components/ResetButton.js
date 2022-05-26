export const ResetButton = ({onResetClick, isResetDisabled}) => {
 return (
   <button disabled={!!isResetDisabled} onClick={onResetClick}>RESET</button>
 );
};
