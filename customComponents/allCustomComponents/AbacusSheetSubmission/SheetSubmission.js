"use client";
import { useState, useEffect, useRef } from "react";
import mytoast from "@/components/toast/toast";
import { selectData, updateData } from "@/apiservices/widgetapiservices";
import "./abacusGenerator.css";

function SheetSubmission() {
  const [data, setData] = useState();

  const [friend, setFriend] = useState([]);
  const [formula, setFormula] = useState([]);
  const [row, setRow] = useState([]);
  const [digit, setDigit] = useState([]);
  const [answer, setAnswer] = useState("Enter Answer");
  const [ID, setID] = useState();
  const [serial, setSerial] = useState([]);
  const [buttonText, setButtonText] = useState("Add Math");

  const operatorRef = useRef();
  const friendRef = useRef();
  const formulaRef = useRef();
  const rowRef = useRef();
  const mathRef = useRef();
  const serialRef = useRef();
  const digitRef = useRef();

  function changeFriend(data, operator) {
    const operatorValue = operatorRef.current.value;

    function getFriend(operator) {
      const friend = data[operator].friend.map((item) => {
        return item.friendName;
      });
      return friend;
    }

    operator.forEach((item, i) => {
      if (operatorValue == i) {
        if (i == 2) {
          mytoast.warning("You do not need to input Math for Division");
        } else if (i == 3) {
          mytoast.warning("You do not need to input Math for Multiplication");
        } else {
          setFriend(getFriend(i));
        }
      }
    });
  }
  function changeFormula(data, operator, friend) {
    const operatorValue = operatorRef.current.value;

    const friendValue = friendRef.current.value;

    function getFormula(operator, friend) {
      const formula = data[operator].friend[friend].formula.map((item) => {
        return item.formulaName;
      });
      return formula;
    }

    operator.forEach((item, i) => {
      if (operatorValue == i) {
        if (i == 2) {
          mytoast.warning("Division have no friend");
        } else if (i == 3) {
          mytoast.warning("Multiplication have no friend");
        } else {
          friend.forEach((item, i2) => {
            if (friendValue == i2) {
              setFormula(getFormula(i, i2));
            }
          });
        }
      }
    });
  }
  function changeRow(data, operator, friend, formula) {
    const operatorValue = operatorRef.current.value;

    const friendValue = friendRef.current.value;
    const formulaValue = formulaRef.current.value;

    function getRow(operator, friend, formula) {
      const row = data[operator].friend[friend].formula[formula].row.map(
        (item) => {
          return item.rowName;
        }
      );
      return row;
    }

    operator.forEach((item, i) => {
      if (operatorValue == i) {
        if (i == 2) {
          mytoast.warning("Division have no friend");
        } else if (i == 3) {
          mytoast.warning("Multiplication have no friend");
        } else {
          friend.forEach((item, i2) => {
            if (friendValue == i2) {
              formula.forEach((item, i3) => {
                if (formulaValue == i3) {
                  setRow(getRow(i, i2, i3));
                }
              });
            }
          });
        }
      }
    });
  }
  function changeDigit(data, operator, friend, formula, Row) {
    const operatorValue = operatorRef.current.value;

    const friendValue = friendRef.current.value;
    const formulaValue = formulaRef.current.value;
    const rowValue = rowRef.current.value;

    function getDigit(operator, friend, formula, Row) {
      const digit = data[operator].friend[friend].formula[formula].row[
        Row
      ].digit.map((item) => {
        return item.digitName;
      });
      return digit;
    }

    operator.forEach((item, i) => {
      if (operatorValue == i) {
        if (i == 2) {
          mytoast.warning("Division have no friend");
        } else if (i == 3) {
          mytoast.warning("Multiplication have no friend");
        } else {
          friend.forEach((item, i2) => {
            if (friendValue == i2) {
              formula.forEach((item, i3) => {
                if (formulaValue == i3) {
                  Row.forEach((item, i4) => {
                    if (rowValue == i4) {
                      setDigit(getDigit(i, i2, i3, i4));
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  }
  function changeSerial(data, operator, friend, formula, Row, digit) {
    const operatorValue = operatorRef.current.value;

    const friendValue = friendRef.current.value;
    const formulaValue = formulaRef.current.value;
    const rowValue = rowRef.current.value;
    const digitValue = digitRef.current.value;

    function getSerial(operator, friend, formula, Row, digit) {
      const math = data[operator].friend[friend].formula[formula].row[
        Row
      ].digit[digit].math.map((item) => {
        return item.question;
      });
      return math;
    }

    operator.forEach((item, i) => {
      if (operatorValue == i) {
        if (i == 2) {
          mytoast.warning("Division have no friend");
        } else if (i == 3) {
          mytoast.warning("Multiplication have no friend");
        } else {
          friend.forEach((item, i2) => {
            if (friendValue == i2) {
              formula.forEach((item, i3) => {
                if (formulaValue == i3) {
                  Row.forEach((item, i4) => {
                    if (rowValue == i4) {
                      digit.forEach((item, i5) => {
                        if (digitValue == i5) {
                          setSerial(getSerial(i, i2, i3, i4, i5));
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  }
  function computation() {
    let a = mathRef.current.value;

    const parts = a.split(/([+\-*/])/).filter((part) => part.trim() !== "");

    if (parts.length === 0) {
      return 0; // Return 0 if no valid parts are found
    }

    let result = parseFloat(parts[0]); // Use parseFloat to handle decimal numbers

    for (let i = 1; i < parts.length; i += 2) {
      const operator = parts[i];
      const number = parseFloat(parts[i + 1]); // Use parseFloat to handle decimal numbers

      if (isNaN(number)) {
        // Handle invalid number
        return NaN;
      }

      if (operator === "+") {
        result += number;
      } else if (operator === "-") {
        result -= number;
      } else if (operator === "*") {
        result *= number;
      } else if (operator === "/") {
        if (number === 0) {
          return NaN; // Division by zero
        }
        result /= number;
      }
    }

    // Round the result to 10 decimal places
    result = Number(result.toFixed(10));

    setAnswer(result);
  }

  function addMath(data) {
    const operatorValue = operatorRef.current.value;
    const friendValue = friendRef.current.value;
    const formulaValue = formulaRef.current.value;
    const rowValue = rowRef.current.value;
    const math = mathRef.current.value;
    const serialValue = serialRef.current.value;
    const digitValue = digitRef.current.value;

    if (operatorValue === "none") {
      mytoast.warning("select the operator");
    } else if (friendValue === "none") {
      mytoast.warning("select the Friend");
    } else if (formulaValue === "none") {
      mytoast.warning("select the Formula");
    } else if (rowValue === "none") {
      mytoast.warning("select Row");
    } else if (digitValue === "none") {
      mytoast.warning("select Digit");
    } else if (math === "") {
      mytoast.warning("input Math");
    } else if (serialValue === "none") {
      const newArray = [...data];
      newArray[operatorValue].friend[friendValue].formula[formulaValue].row[
        rowValue
      ].digit[digitValue].math.push({ question: math, answer: answer });

      async function update() {
        const res = await updateData(
          "abacus_math_sheet",
          newArray,
          "active",
          ID
        );
        if (res.status == "Alhamdulillah") {
          mytoast.success("Data has insterted successfully");
          function getOperator() {
            const operator = data.map((item) => {
              return item.name;
            });
            return operator;
          }

          const operator = getOperator();

          changeSerial(data, operator, friend, formula, row, digit);
        } else {
          console.log(res);
        }
      }

      update();
    } else {
      const newArray = [...data];
      newArray[operatorValue].friend[friendValue].formula[formulaValue].row[
        rowValue
      ].digit[digitValue].math[serialValue] = {
        question: math,
        answer: answer,
      };

      async function update() {
        const res = await updateData(
          "abacus_math_sheet",
          newArray,
          "active",
          ID
        );
        if (res.status == "Alhamdulillah") {
          mytoast.warning("Selected Math has been updated");

          function getOperator() {
            const operator = data.map((item) => {
              return item.name;
            });
            return operator;
          }

          const operator = getOperator();

          changeSerial(data, operator, friend, formula, row, digit);
        } else {
          console.log(res);
        }
      }

      update();
    }
  }

  function changeButtonText(e) {
    if (e.target.value == "none") {
      setButtonText("Add Math");
    } else {
      setButtonText("Update Math");
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "abacus_math_sheet",
      });

      if (res.status == "Alhamdulillah") {
        setData(res.data[0].widgetPayload);
        setID(res.data[0]._id);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  if (data && friend && formula && row && serial && ID && digit) {
    function getOperator() {
      const operator = data.map((item) => {
        return item.name;
      });
      return operator;
    }

    const operator = getOperator();

    return (
      <div className="abacusGenerator">
        <div className="style-1">
          <div className="style-2">
            <div className="style-3">
              <form className="style-4">
                <div className="style-5">
                  <div className="style-6">
                    <label htmlFor="inputState" className="style-7">
                      {true ? "Operators:" : "অপারেটর"}
                    </label>

                    <select
                      ref={operatorRef}
                      className="style-8"
                      name="ddSumType"
                      onChange={() => changeFriend(data, operator)}
                    >
                      <option value="none">Select Operator</option>
                      {operator.map((item, i) => (
                        <option key={i} value={i} className="style-9">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="style-13">
                    <label htmlFor="inputState" className="style-14">
                      {true ? "Friend" : "ফ্রেন্ড"}
                    </label>{" "}
                    <select
                      ref={friendRef}
                      onChange={() => changeFormula(data, operator, friend)}
                      className="style-15"
                      name="ddTotalQuestions"
                    >
                      <option value="none">Select Friend</option>
                      {friend.map((item, i) => (
                        <option value={i} key={i} className="style-16">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="style-21">
                    <label htmlFor="inputState" className="style-22">
                      {true ? "Formula" : "ফর্মুলা"}
                    </label>{" "}
                    <select
                      onChange={() =>
                        changeRow(data, operator, friend, formula)
                      }
                      ref={formulaRef}
                      className="style-23"
                      name="ddTotalRows"
                    >
                      <option value="none">Select Formula</option>
                      {formula.map((item, i) => (
                        <option value={i} key={i} className="style-16">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="style-32">
                    <label htmlFor="inputState" className="style-33">
                      {true ? "No. of row:" : "সারি নাম্বার"}
                    </label>{" "}
                    <select
                      onChange={() =>
                        changeDigit(data, operator, friend, formula, row)
                      }
                      ref={rowRef}
                      className="style-34"
                      name="ddSumDigits"
                    >
                      <option value="none">Select Row</option>
                      {row.map((item, i) => (
                        <option value={i} key={i} className="style-16">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="style-32">
                    <label htmlFor="inputState" className="style-33">
                      {true ? "No. of Digit:" : "সারি নাম্বার"}
                    </label>{" "}
                    <select
                      onChange={() =>
                        changeSerial(
                          data,
                          operator,
                          friend,
                          formula,
                          row,
                          digit
                        )
                      }
                      ref={digitRef}
                      className="style-34"
                      name="ddSumDigits"
                    >
                      <option value="none">Select Digit</option>
                      {digit.map((item, i) => (
                        <option value={i} key={i} className="style-16">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="style-68">
                  <div className="style-71">
                    <label htmlFor="inputState" className="style-62">
                      {true ? "Select Math:" : "সারি নাম্বার"}
                    </label>{" "}
                    <select
                      onChange={changeButtonText}
                      ref={serialRef}
                      className="style-34"
                      name="ddSumDigits"
                    >
                      <option value="none">
                        Select Math for Update or keep it Untouched
                      </option>
                      {serial.map((item, i) => (
                        <option value={i} key={i} className="style-16">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="style-71">
                    <label htmlFor="math" className="style-62">
                      {true ? "Input Math:" : "অংক প্রবেশ করুন"}
                    </label>
                    <input
                      onChange={computation}
                      ref={mathRef}
                      type="text"
                      className="style-72"
                      required=""
                      name="math"
                      placeholder="10-20+25-11"
                    />
                  </div>
                  <div className="style-71">
                    <label htmlFor="answer" className="style-62">
                      {true ? "Input Answer:" : "উত্তর যুক্ত করুন"}
                    </label>
                    <input
                      value={answer}
                      type="text"
                      className="style-72"
                      required=""
                      name="answer"
                      placeholder={answer}
                    />
                  </div>
                </div>
                <div className="style-78">
                  <button
                    style={{
                      backgroundColor: `${
                        buttonText == "Add Math" ? "green" : "orange"
                      }`,
                    }}
                    onClick={() => addMath(data)}
                    type="button"
                    className="style-79"
                  >
                    {buttonText}
                  </button>
                </div>
                <div className="style-80">
                  <div className="style-81"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SheetSubmission;
