import { useState } from "react";
import "./App.css";

const initialMoney = "0";
const initialPeople = "2";
const initialTip = "0";

export const App = () => {
  const [money, setMoney] = useState(initialMoney);
  const [people, setPeople] = useState(initialPeople);
  const [tip, setTip] = useState(initialTip);

  const handleReset = () => {
    setPeople(initialPeople);
    setMoney(initialMoney);
    setTip(initialTip);
  };

  const finalTip = tip.at(-1) === "%" ? parseFloat(tip) / 100 : parseFloat(tip);
  const moneyValue = parseFloat(money) || parseFloat(initialMoney);
  const tipValue = finalTip || parseFloat(initialTip);
  const peopleValue = parseInt(people) || parseInt(initialPeople);
  const handleTip = (e) => {
    setTip(e.target.value);
  };

  const timAmountPerPerson = (moneyValue * tipValue) / peopleValue;
  const billAmountPerPerson =
    (moneyValue + moneyValue * tipValue) / peopleValue;

  return (
    <div className="App">
      <section>
        <div className="bill">
          <div className="bill-left">
            <div>
              <h2>Bill</h2>
              <div className="bill-leftInput">
                <i className="fas fa-dollar-sign"></i>
                <input
                  value={money}
                  onChange={(event) => {
                    setMoney(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <h2>Select Tip %</h2>
              <div className="bill-leftButtons">
                <button
                  onClick={() => {
                    setTip(0.05);
                  }}
                  className="tipPercentage"
                >
                  5%
                </button>
                <button
                  onClick={() => {
                    setTip(0.1);
                  }}
                  className="tipPercentage"
                >
                  10%
                </button>
                <button
                  onClick={() => {
                    setTip(0.15);
                  }}
                  className="tipPercentage"
                >
                  15%
                </button>
                <button
                  onClick={() => {
                    setTip(0.25);
                  }}
                  className="tipPercentage"
                >
                  25%
                </button>
                <button
                  onClick={() => {
                    setTip(0.5);
                  }}
                  className="tipPercentage"
                >
                  50%
                </button>
                <input
                  onBlur={handleTip}
                  type="tel"
                  id="tipPercentageCustom"
                  placeholder="Custom"
                />
              </div>
            </div>

            <div>
              <h2>Number Of People</h2>

              <div className="bill-leftInput">
                <i className="fas fa-user"></i>
                <input
                  type="number"
                  value={people}
                  onChange={(event) => {
                    setPeople(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bill-right">
            <div>
              <div className="bill-splitter">
                <h2>
                  Tip Amount <br />
                  <span>/ person</span>
                </h2>
                <h1 id="billTipAmount">${timAmountPerPerson.toFixed(2)}</h1>
              </div>

              <div className="bill-splitter">
                <h2>
                  Total <br />
                  <span>/ person</span>
                </h2>
                <h1 id="billTotalPerPerson">
                  ${billAmountPerPerson.toFixed(2)}
                </h1>
              </div>
            </div>
            <div>
              <button onClick={handleReset} type="reset" id="resetButton">
                RESET
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
