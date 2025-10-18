/* Quick git commit & push steps:
1) Open terminal at project root:
   cd "c:\Coding Exercises\InvestmentCalculator"
2) Review changes:
   git status
3) Stage files:
   git add .
4) Commit:
   git commit -m "Your commit message"
5) If no remote yet, create and push:
   # using GitHub CLI (recommended)
   gh repo create investment-calculator --public --source=. --remote=origin --push
   # or manually:
   git remote add origin https://github.com/YOUR_USERNAME/investment-calculator.git
   git branch -M main
   git push -u origin main
6) Authenticate when prompted (use PAT or gh login).
*/

import Header from "./components/Header"
import UserInputLabel from "./components/UserInputLabel"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [investObject, setInvestObject] = useState({
    initialInvestment: '', 
    annualInvestment: '', 
    expectedReturn: '', 
    duration: ''
  });

  const isValidInput = investObject.duration >= 1;
  const handleInputChange = (identifier, value) => {
    setInvestObject(prevState => ({
      ...prevState,
      [identifier]: Number(value)
    }));
  };

  return (
    <div className='center'>
      <Header/>
      <UserInputLabel 
        investData={investObject}
        onValueChange={handleInputChange}
      />
      {!isValidInput && <p>Please enter a duration of at least 1 year to see results.</p> }
      {isValidInput && <Result investData={investObject}/>}
    </div>
  )
}

export default App
