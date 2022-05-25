export const TotalPerPerson = ({totalAmount}) => {
 return (
   <div className="per-person">
     <div>
       <h4>Total</h4>
       <p>/ person</p>
     </div>
     <h1>${totalAmount}</h1>
   </div>
 );
};
