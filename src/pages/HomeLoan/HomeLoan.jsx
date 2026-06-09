import { useState, useEffect } from "react";
import "./HomeLoan.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function HomeLoan() {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState(20);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [income, setIncome] = useState("");

  const [emi, setEmi] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [price, downPayment, rate, tenure, income]);

  const calculateLoan = () => {
    if (!price || !income) {
      setLoanAmount(0);
      setEmi(0);
      return;
    }

    const propertyPrice = Number(price);

    const loan =
      propertyPrice -
      (propertyPrice * downPayment) / 100;

    const r = rate / 12 / 100;
    const n = tenure * 12;

    const emiValue =
      (loan * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setLoanAmount(Math.round(loan));
    setEmi(Math.round(emiValue));
  };

  const monthlyIncome = Number(income || 0);

  const emiRatio =
    monthlyIncome > 0
      ? (emi / monthlyIncome) * 100
      : 0;

  const totalRepayment = emi * tenure * 12;
  const totalInterest = totalRepayment - loanAmount;

  const maxSafeEMI = monthlyIncome * 0.3;
  const maxLoan = maxSafeEMI * 12 * tenure;
  const maxProperty = maxLoan / 0.8;

  const remainingIncome = monthlyIncome - emi;

  const maxAffordableProperty =
    (monthlyIncome * 0.3 * 12 * tenure) / 0.8;

    return (
  <>
    <Navbar />
    
    <div className="hl-container">
      <h1 className="hl-heading">Home Loan Support</h1>
     <span className="hl-span">GET REAL-TIME EMI CALCULATIONS, AFFORDABILITY INSIGHTS AND PERSONALIZED LOAN RECOMMENDATIONS</span>
      
      <div className="hl-shell">
        {/* LEFT SIDE */}
        <div className="hl-left">

          <p className="hl-kicker">
            LOAN ASSISTANCE CENTER
          </p>

          <h2>Smart Loan Analysis</h2>

          <p className="hl-intro">
            Get real-time insights into affordability,
            repayment capacity and loan health before
            purchasing a property.
          </p>

          <div className="hl-item">
            <h4>Loan Amount</h4>
            <p>₹{loanAmount.toLocaleString()}</p>
          </div>

          <div className="hl-item">
            <h4>Monthly EMI</h4>
            <p>₹{emi.toLocaleString()}</p>
          </div>

          <div className="hl-item">
            <h4>Total Interest</h4>
            <p>₹{totalInterest.toLocaleString()}</p>
          </div>

          <div className="hl-item">
            <h4>Remaining Income</h4>
            <p>₹{remainingIncome.toLocaleString()}</p>
          </div>

          <div className="hl-item">
            <h4>Max Affordable Property</h4>
            <p>
              ₹
              {Math.round(
                maxAffordableProperty
              ).toLocaleString()}
            </p>
          </div>

          <div className="hl-item">
            <h4>Max Safe EMI</h4>
            <p>
              ₹
              {Math.round(
                maxSafeEMI
              ).toLocaleString()}
            </p>
          </div>

          <div className="hl-item">
            <h4>Total Repayment</h4>
            <p>
              ₹
              {totalRepayment.toLocaleString()}
            </p>
          </div>

          <div className="hl-item">
            <h4>EMI-to-Income Ratio</h4>
            <p>{emiRatio.toFixed(1)}%</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hl-form">
          <label>Property Price (₹)</label>
          <input
  type="text"
  inputMode="numeric"
  value={price}
  onChange={(e) => setPrice(e.target.value.replace(/\D/g, ""))}
/>

          <label>
            Down Payment ({downPayment}%)
          </label>

          <input
            type="range"
            min="10"
            max="50"
            value={downPayment}
            onChange={(e) =>
              setDownPayment(
                Number(e.target.value)
              )
            }
          />

          <label>Interest Rate (%)</label>

          <select
            value={rate}
            onChange={(e) =>
              setRate(Number(e.target.value))
            }
          >
            <option value={7}>7.0%</option>
            <option value={7.5}>7.5%</option>
            <option value={8}>8.0%</option>
            <option value={8.5}>8.5%</option>
            <option value={9}>9.0%</option>
            <option value={9.5}>9.5%</option>
            <option value={10}>10.0%</option>
            <option value={10.5}>10.5%</option>
            <option value={11}>11.0%</option>
          </select>

          <label>Loan Tenure</label>

          <select
            value={tenure}
            onChange={(e) =>
              setTenure(Number(e.target.value))
            }
          >
            <option value={10}>10 Years</option>
            <option value={15}>15 Years</option>
            <option value={20}>20 Years</option>
            <option value={30}>30 Years</option>
          </select>

          <label>Monthly Income (₹)</label>

          <input
  type="text"
  inputMode="numeric"
  value={income}
  onChange={(e) => setIncome(e.target.value.replace(/\D/g, ""))}
/>
<div className="hl-item">
  {emiRatio > 50 && (
    <>
      <h4>⚠ Risk Status</h4>
      <p className="hl-risk">
        High Risk: Your EMI consumes a large portion of your monthly income.
      </p>
    </>
  )}

  {emiRatio >= 30 && emiRatio <= 50 && (
    <>
      <h4>⚠ Risk Status</h4>
      <p className="hl-moderate-text">
        Moderate Risk: Consider reducing the loan amount or increasing your down payment.
      </p>
    </>
  )}

  {emiRatio < 30 && monthlyIncome > 0 && (
    <>
      <h4>✅ Risk Status</h4>
      <p className="hl-safe-text">
        Healthy Loan Profile: Your EMI is within a comfortable range.
      </p>
    </>
  )}
</div>

<div className="hl-item">
   <h3>Recommendations</h3>
  <p>Keep your monthly EMI below 30% of your total income to
    maintain a healthy financial balance and avoid excessive
    repayment pressure over the loan tenure. </p>
</div>

<div className="hl-item">

  <p>A higher down payment can significantly reduce your loan
    amount, resulting in lower monthly EMI obligations and
    substantial savings on total interest paid over time.</p>
</div>

<div className="hl-item">
 
  <p>Compare interest rates from multiple lenders before
    applying for a loan, as even a small reduction in rate
    can lead to considerable long-term savings.</p>
</div>

<div className="hl-item">
 
  <p>Ensure that you retain sufficient emergency savings after
    paying your EMI so that unexpected expenses do not affect
    your financial stability..</p>
</div>

<div className="hl-item">

  <p>Maintain an emergency fund before taking a home loan.</p>
</div>
        </div>

            </div>
    </div>

    <Footer />
  </>
);
}
export default HomeLoan;