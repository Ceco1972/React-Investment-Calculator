import { useState } from "react"

export default function UserInputLabel({ investData, onValueChange }) {
    // const [initialInvestment, setInitialInvestment] = useState(initialInvestment);
    // function handleInitialIvestmentChange(event) {  
    //     setInitialInvestment(event.target.value);
    // } 
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number"
            value={investData.initialInvestment}
            onChange={(e) => onValueChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type="number"
            value={investData.annualInvestment}
            onChange={(e) => onValueChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input 
            type="number"
            value={investData.expectedReturn}
            onChange={(e) => onValueChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number"
            value={investData.duration}
            onChange={(e) => onValueChange('duration', e.target.value)}
          />
        </p>
      </div>
    </div>
  );
}