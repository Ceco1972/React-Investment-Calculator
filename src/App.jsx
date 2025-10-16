import Header from "./components/Header"
import UserInputLabel from "./components/UserInputLabel"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [investObject, setInvestObject] = useState({
    initialInvestment: 10000, 
    annualInvestment: 1000, 
    expectedReturn: 7, 
    duration: 8 
  });

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
      <Result investData={investObject}/>
    </div>
  )
}

export default App
