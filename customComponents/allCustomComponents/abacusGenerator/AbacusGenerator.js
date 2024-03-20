import "./abacusGenerator.css";

function AbacusGenerator() {
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
                  </label>{" "}
                  <select className="style-8" name="ddSumType">
                    <option value="1" className="style-9">
                      Addition Only
                    </option>
                    <option value="2" className="style-10">
                      Addition & Substraction
                    </option>
                    <option value="3" className="style-11">
                      Multiplication
                    </option>
                    <option value="4" className="style-12">
                      Division
                    </option>
                  </select>
                </div>
                <div className="style-13">
                  <label htmlFor="inputState" className="style-14">
                    {true ? "Formula:" : "অপারেটর"}
                  </label>{" "}
                  <select className="style-15" name="ddTotalQuestions">
                    <option value="+1=(10-9)" className="style-16">
                      +1=(10-9)
                    </option>
                    <option value="50" className="style-17">
                      50
                    </option>
                    <option value="100" className="style-18">
                      100
                    </option>
                    <option value="150" className="style-19">
                      150
                    </option>
                    <option value="200" className="style-20">
                      200
                    </option>

                    <option value="300">300</option>
                    <option value="350">350</option>
                    <option value="400">400</option>
                    <option value="450">450</option>
                    <option value="500">500</option>
                  </select>
                </div>
                <div className="style-21">
                  <label htmlFor="inputState" className="style-22">
                    {true ? "No. of Rows:" : "অপারেটর"}
                  </label>{" "}
                  <select className="style-23" name="ddTotalRows">
                    <option value="2" className="style-24">
                      2
                    </option>
                    <option value="3" className="style-25">
                      3
                    </option>
                    <option value="4" className="style-26">
                      4
                    </option>
                    <option value="5" className="style-27">
                      5
                    </option>
                    <option value="10" className="style-28">
                      10
                    </option>
                    <option value="15" className="style-29">
                      15
                    </option>
                    <option value="20" className="style-30">
                      20
                    </option>
                    <option value="25" className="style-31">
                      25
                    </option>
                  </select>
                </div>
                <div className="style-32">
                  <label htmlFor="inputState" className="style-33">
                    {true ? "No. of Digits:" : "অপারেটর"}
                  </label>{" "}
                  <select className="style-34" name="ddSumDigits">
                    <option value="1" className="style-35">
                      1
                    </option>
                    <option value="2" className="style-36">
                      2
                    </option>
                    <option value="3" className="style-37">
                      3
                    </option>
                    <option value="4" className="style-38">
                      4
                    </option>
                    <option value="5" className="style-39">
                      5
                    </option>
                  </select>
                </div>
                <div className="style-40">
                  <label htmlFor="inputState" className="style-41">
                    {true ? "Multiplicand digits:" : "অপারেটর"}
                  </label>{" "}
                  <select className="style-42" name="ddMultiplicand">
                    <option value="1" className="style-43">
                      1
                    </option>
                    <option value="2" className="style-44">
                      2
                    </option>
                    <option value="3" className="style-45">
                      3
                    </option>
                    <option value="4" className="style-46">
                      4
                    </option>
                    <option value="5" className="style-47">
                      5
                    </option>
                  </select>
                </div>
                <div className="style-48">
                  <label htmlFor="inputState" className="style-49">
                    {true ? "Multiplier digits:" : "অপারেটর"}
                  </label>{" "}
                  <select className="style-50" name="ddMultiplier">
                    <option value="1" className="style-51">
                      1
                    </option>
                    <option value="2" className="style-52">
                      2
                    </option>
                    <option value="3" className="style-53">
                      3
                    </option>
                  </select>
                </div>
                <div className="style-54">
                  <label htmlFor="inputState" className="style-55">
                    {true ? "Dividend digits:" : "অপারেটর"}
                  </label>{" "}
                  <select className="style-56" name="ddDividend">
                    <option value="2" className="style-57">
                      2
                    </option>
                    <option value="3" className="style-58">
                      3
                    </option>
                    <option value="4" className="style-59">
                      4
                    </option>
                    <option value="5" className="style-60">
                      5
                    </option>
                  </select>
                </div>
                <div className="style-61">
                  <label htmlFor="inputState" className="style-62">
                    {true ? "Divisor digits:" : "অপারেটর"}
                  </label>{" "}
                  <select className="style-63" name="ddDivisor">
                    <option value="1" className="style-64">
                      1
                    </option>
                    <option value="2" className="style-65">
                      2
                    </option>
                    <option value="3" className="style-66">
                      3
                    </option>
                  </select>
                </div>
                <div className="style-67"></div>
              </div>
              <div className="style-68">
                <div className="style-69">
                  <input
                    type="text"
                    className="style-70"
                    required=""
                    name="user_name"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="style-71">
                  <input
                    type="text"
                    className="style-72"
                    required=""
                    name="user_email"
                    placeholder="Enter Email Id"
                  />
                </div>
                <div className="style-73">
                  <select className="style-74" required="" name="user_type">
                    <option value="" className="style-75">
                      Select User Type
                    </option>
                    <option value="1" className="style-76">
                      Teacher
                    </option>
                    <option value="2" className="style-77">
                      Student
                    </option>
                  </select>
                </div>
              </div>
              <div className="style-78">
                <button
                  type="button"
                  className="style-79"
                  onClick="LoadGenerateQuestion1();"
                >
                  {true ? "Generate Worksheet" : "অপারেটর"}
                </button>
              </div>
              <div className="style-80">
                <div className="style-81"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="blur_system">
        <p style={{ textAlign: "center" }}>Coming soon ...</p>
      </div>
    </div>
  );
}

export default AbacusGenerator;
