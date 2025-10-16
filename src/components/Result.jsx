import { calculateInvestmentResults } from "../util/investment";

export default function Result({ investData }) {
  const results = calculateInvestmentResults({
    initialInvestment: investData.initialInvestment,
    annualInvestment: investData.annualInvestment,
    expectedReturn: investData.expectedReturn / 100,
    duration: investData.duration
  });

  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => {
          totalInterest += data.interest;
          const investedCapital = 
            investData.initialInvestment + 
            (data.year * investData.annualInvestment);
          
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.valueEndOfYear.toFixed(2)}</td>
              <td>{data.interest.toFixed(2)}</td>
              <td>{totalInterest.toFixed(2)}</td>
              <td>{investedCapital.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
