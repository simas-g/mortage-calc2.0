import { useState } from "react";
import "./App.css";
import styles from "./Mortgage.module.css";
import Label from "./components/Label";

function App() {
  const [type, setType] = useState("interest-only");
  let content = (
    <div className={styles.cardContent}>
      <div className={styles.rowInputs}>
        <div className={styles.inputBox}>
          <Label textForTooltip="Your total loan $" htmlFor="io-home-price">Total mortgage</Label>
          <input
            id="io-home-price"
            name="io-home-price"
            min={0}
            type="number"
          />
        </div>
        <div className={styles.inputBox}>
          <Label textForTooltip="Initial payment $" htmlFor="io-down-payment">Down payment</Label>
          <input
            id="io-down-payment"
            name="io-down-payment"
            min={0}
            type="number"
          />
        </div>
      </div>
      <div className={styles.rowInputs}>
        <div className={styles.inputBox}>
          <Label htmlFor="io-total-years" textForTooltip="In years">
            {type === "interest-only" ? "Total mortgage period" : "Loan term"}{" "}
          </Label>
          <input
            id="io-total-years"
            name="io-total-years"
            min={1}
            type="number"
          />
        </div>

        <div className={styles.inputBox}>
          <Label htmlFor="io-interest-rate" textForTooltip="Annual %">Interest rate</Label>
          <input
            id="io-interest-rate"
            name="io-interest-rate"
            min={0}
            step={0.01}
            type="number"
          />
        </div>
      </div>
      {type === "interest-only" && (
        <div className={styles.inputBox}>
          <Label htmlFor="io-interest-years" textForTooltip="Interest of the loan">Interest-only years</Label>
          <input
            id="io-interest-years"
            name="io-interest-years"
            min={0}
            type="number"
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="App" style={{
      width: '100vw',
      padding: '5px'

    }}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <button
            onClick={() => setType('interest-only')}
            style={{
              backgroundColor: type === "interest-only" ? "black" : "",
              color: type === "interest-only" ? "white" : "",
            }}
          >
            Interest-only
          </button>
          <button
            onClick={() => setType('traditional')}
            style={{
              backgroundColor: type === "traditional" ? "black" : "",
              color: type === "traditional" ? "white" : "",
            }}
          >
            Traditional
          </button>
        </div>
        {content}
        <div className={styles.calculate}>
          <button>Calculate</button>
        </div>
        <div className={styles.results}>results</div>
      </div>
    </div>
  );
}

export default App;
