"use client";
import { useRouter } from "next/navigation";
import "../../assets/css/bootstrap.css";
import "./signuppage.css";

function StudentSignupForm(props) {
  const router = useRouter();
  const clickHandlerSignin = (e) => {
    e.preventDefault();
    router.push("/dashboard/login");
  };
  return (
    <div class="container signup-universal">
      <div class="jumbotron">
        <h1>Registration Form</h1>

        <p>
          Dear All Please fill up the below required field to register as a
          student of this madrasa
        </p>

        <p>
          নিদের্শনাঃ নিজের নাম, অভিভাবকের নাম, মোবাইল নাম্বার, ইমেইল এড্রেস,
          বর্তমান ঠিকানা এবং স্থায়ী ঠিকানা আপনার পূর্ববর্তী Certificate বা
          National ID অনুযায়ী হতে হবে। যদি কারো প্রকৃত নাম, ঠিকানা ইত্যাদি দিতে
          আপত্তি থাকে, তাহলে ফরম পূরণ করবেন না। আর কোন কিছু না বুঝলে বিশেষ করে
          Student ID না জানলে এবং কোন Session নির্বাচন করবেন সেটা না বুঝলে,
          আমাদের সাথে যোগাযোগ করবেন। ফরম এর নীচে আমাদের সাথে যোগাযোগ করার
          বিস্তারিত তথ্য দেওয়া আছে।
        </p>

        <br />

        <h3>
          ফর্মটি পূরন করার পূর্বে অবশ্যই ফর্ম পূরনের নিয়মের ভিডিওটি দেখে নিন।{" "}
        </h3>

        <a
          class="btn btn-success btn-sm"
          href="https://youtu.be/kxIl_dIsmWQ"
          target="_blank"
        >
          Click Here For Video
        </a>
      </div>

      <div class="row">
        <div class="col-md-12 well">
          <form
            class="needs-validation"
            action="registration.php#"
            method="post"
            novalidate
          >
            <h3>Payment Information</h3>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="Hadia">হাদিয়া:</label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="i_will_donate"
                    value="1"
                    name="optradio"
                    onclick="show();"
                    required
                  />

                  <label class="form-check-label" for="i_will_donate">
                    আমি নিজেই হাদীয়া দিব।
                  </label>

                  <div class="invalid-feedback">This Field is required</div>

                  <div id="hadia_amount" class="hide">
                    <div class="jumbotron">
                      <h3>
                        যে ভাবে Bkash করবেন (আর অবশ্যই ১০০০ এ ২০ টাকা সহ
                        পাঠাবেন)
                      </h3>

                      <div>
                        <p>01. Go to your bKash Mobile Menu by dialing *247#</p>

                        <p>02. Choose “Send Money”</p>

                        <p>
                          03. Enter the bKash Account Number (01674040502) you
                          want to send money to
                        </p>

                        <p>04. Enter the amount (1020) you want to send</p>

                        <p>
                          05. Enter a reference about the transaction. (Do not
                          use more than one word, avoid space or special
                          characters)
                        </p>

                        <p>
                          06. Now enter your bKash Mobile Menu PIN to confirm
                          the transaction
                        </p>

                        <p>
                          07. Don't forget to save 2 information. 1. TrxId 2.
                          The Phone Number Last 4 Digit (if the bkash is done
                          from the shop)
                        </p>
                      </div>
                    </div>

                    <div>
                      <label for="bkamount">Registration Fee:</label>

                      <input
                        class="form-control"
                        type="number"
                        name="bkamount"
                        placeholder="For Example: 1000 TK (IF $ THEN $20 )"
                        onkeydown="message();"
                        value=""
                        required
                      />

                      <div class="valid-feedback">Looks good!</div>

                      <div class="invalid-feedback">
                        Registration Fee Amount is required
                      </div>

                      <span id="amount_span"></span>
                    </div>

                    <div>
                      <label for="bknumber">
                        Bkash / Nagad Number: (Last 4 Digit)
                      </label>

                      <input
                        class="form-control"
                        type="text"
                        maxlength="4"
                        name="bknumber"
                        placeholder="For Example: 0405"
                        value=""
                        required
                      />

                      <div class="valid-feedback">Looks good!</div>

                      <div class="invalid-feedback">
                        Bkash / Nagad Number is required
                      </div>
                    </div>

                    <div>
                      <label for="trxid">
                        Bkash / Nagad Transaction Id : (TOTAL 10 DIGIT)
                      </label>

                      <input
                        class="form-control"
                        type="text"
                        maxlength="10"
                        name="trxid"
                        placeholder="For Example: 7ER56WE6Q"
                        value=""
                        required
                      />

                      <div class="valid-feedback">Looks good!</div>

                      <div class="invalid-feedback">
                        Bkash / Nagad Transaction Id is required
                      </div>
                    </div>

                    <div>
                      <label for="hadia_amount">Monthly Hadia Amount:</label>

                      <input
                        class="form-control"
                        type="number"
                        name="hadia_amount"
                        placeholder="For Example: 1000"
                        onkeydown="message();"
                        value=""
                        required
                      />

                      <div class="valid-feedback">Looks good!</div>

                      <div class="invalid-feedback">
                        Monthly Hadia Amount is required
                      </div>

                      <span id="amount_span"></span>
                    </div>
                  </div>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="i_need_help"
                    value="2"
                    name="optradio"
                    onclick="hide();"
                  />

                  <label for="i_need_help">আমার সামর্থ নেই।</label>
                </div>

                <div class="valid-feedback">Looks good!</div>

                <div class="form-group hide" id="help">
                  <div class="jumbotron">
                    <h4>
                      গুরাবা ফান্ডের জন্য যারা আবেদন করবেন তাদের কে অবশ্যই নিচের
                      রুলস গুলো মেনে চলতে হবে। যদি আপনি মানতে পারেন তবে ই
                      শুধুমাত্র আবেদন করবেন।
                    </h4>

                    <div>
                      <p>
                        ১. রেগুলার দারস এ উপস্থিত থাকতে হবে। কারণ ব্যতীত একটানা
                        তিনদিন অনুপস্থিত থাকলে তার ফান্ড বাতিল করা হবে।
                      </p>

                      <p>
                        ২. এই প্রতিষ্ঠান ছাড়া কোন কোন প্রতিষ্ঠানে যুক্ত থাকা
                        যাবেনা৷ যেহেতু এটা আলেমা কোর্স এখানে ই সব করানো হবে৷
                        অন্য কোন কোর্স করার প্রয়োজন হবেনা।
                      </p>

                      <p>৩. কোর্স শেষ করা পর্যন্ত থাকার জন্য আগ্রহী হতে হবে।</p>

                      <p>
                        ৪. রেগুলার পড়া কমপ্লিট করতে হবে। পরীক্ষায় আশানুরূপ ফলাফল
                        না আসলে ফান্ড বাতিল করে দেয়া হবে।
                      </p>

                      <p>
                        ৫. যদি কোন কারণে গুরাবা ফান্ড নেয়ার পর উক্ত সেমিস্টার এ
                        কেও পরীক্ষা না দিয়ে আগের সেমিস্টারে পড়ার জন্য আবার
                        গুরাবা ফান্ডের আবেদন করে তাহলে তার আবেদন বাতিল করা হবে৷
                        এই সুযোগ শুধু নিয়মিত ছাত্র-ছাত্রীদের দেয়া হবে।
                      </p>

                      <p>৬. মাদ্রাসার সকল নিয়ম কানুন মেনে চলতে হবে।</p>

                      <p>
                        ৭. আল্লাহ সাক্ষী যদি আপনি সামর্থবান হন কিন্তু এরপরও
                        গুরাবা ফান্ডের জন্য আবেদন করেন। তবে আপনি আল্লাহর কাছে
                        মিথ্যার আশ্রয় নেয়ার জন্য দায়ী থাকবেন।
                      </p>

                      <p>
                        ৮. রেজিন্সট্রেশন ফী ১০২০ টাকা দিতে হবে। গুরাবা ফান্ডে
                        শুধুমাত্র মাসিক ফী দেওয়া লাগে না।
                      </p>

                      <br />

                      <p>
                        যদি আপনি উক্ত শর্ত গুলো মানতে পারেন তবে ই ফান্ড দেয়া
                        হবে। আর কোন কারণে এই শর্ত গুলোর কোনটি না মানতে পারলে তা
                        আমাদের অবগত হলে গুরাবা ফান্ড বাতিল করে দেয়া হবে।
                      </p>
                    </div>
                  </div>

                  <div class="jumbotron">
                    <h3>
                      যে ভাবে Bkash করবেন (আর অবশ্যই ১০০০ এ ২০ টাকা সহ পাঠাবেন)
                    </h3>

                    <div>
                      <p>01. Go to your bKash Mobile Menu by dialing *247#</p>

                      <p>02. Choose “Send Money”</p>

                      <p>
                        03. Enter the bKash Account Number (01674040502) you
                        want to send money to
                      </p>

                      <p>04. Enter the amount (700) you want to send</p>

                      <p>
                        05. Enter a reference about the transaction. (Do not use
                        more than one word, avoid space or special characters)
                      </p>

                      <p>
                        06. Now enter your bKash Mobile Menu PIN to confirm the
                        transaction
                      </p>
                    </div>
                  </div>

                  <div>
                    <label for="bkamount">Registration Fee:</label>

                    <input
                      class="form-control"
                      type="number"
                      name="bkamount"
                      placeholder="For Example: 1000 TO 100000 TK (IF $ THEN $20 - $10000)"
                      onkeydown="message();"
                      required
                    />

                    <div class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                      Registration Fee Amount is required
                    </div>

                    <span id="amount_span"></span>
                  </div>

                  <div>
                    <label for="bknumber">
                      Bkash / Nagad Number: (Last 4 Digit)
                    </label>

                    <input
                      class="form-control"
                      type="text"
                      maxlength="4"
                      name="bknumber"
                      placeholder="For Example: 0405"
                      required
                    />

                    <div class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                      Bkash / Nagad Number is required
                    </div>
                  </div>

                  <div>
                    <label for="trxid">
                      Bkash / Nagad Transaction Id : (TOTAL 10 DIGIT)
                    </label>

                    <input
                      class="form-control"
                      type="text"
                      maxlength="10"
                      name="trxid"
                      placeholder="For Example: 7ER56WE6QW"
                      required
                    />

                    <div class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                      Monthly Hadia Amount is required
                    </div>
                  </div>

                  <div>
                    <label for="reason_for_help">সম্ভাব্য কারণটি লিখুনঃ</label>

                    <input
                      type="text"
                      class="form-control"
                      id="reason_for_help"
                      name="reason_for_help"
                      placeholder="সম্ভাব্য কারণটি লিখুনঃ"
                      required
                    />

                    <div class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">This Field is required</div>

                    <span>
                      আপনার নাম পরিচয় গোপন রেখে আপনার অপারগতার কারন ওয়েবসাইটে
                      প্রকাশ করা হবে যাতে আপনার হাদীয়া কেও দিয়ে সাহায্য করে।
                    </span>
                  </div>

                  <div>
                    <label for="guraba_code">
                      <b>Guraba Fund Code</b>:
                    </label>

                    <input
                      type="text"
                      class="form-control"
                      id="guraba_code"
                      name="guraba_code"
                      placeholder="Enter Guraba Code"
                      required
                    />

                    <div class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">This Field is required</div>

                    <span class="text-danger"></span>
                    <br />

                    <span>
                      এই Code ইন্টারনেত মাদ্রাসার বড় উস্তাদ থেকে সংগ্রহ করুন
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            Payment Information
            <hr />
            <h3>Personal Information</h3>
            <div class="form-row">
              <div class="col-md-6 mb-3 ">
                <label for="first_name">First Name:</label>

                <input
                  type="text"
                  class="form-control"
                  id="first_name"
                  name="first_name"
                  pattern="^[a-zA-Z_ ]*$"
                  placeholder="Enter First Name"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">
                  This Field only Accept Letter and Space. (.) or Spacial
                  Character is not Allowed
                </div>

                <span class="text-danger"></span>
              </div>

              <div class="col-md-6 mb-3 ">
                <label for="last_name">Last Name:</label>

                <input
                  type="text"
                  class="form-control"
                  id="last_name"
                  name="last_name"
                  pattern="^[a-zA-Z_ ]*$"
                  placeholder="Enter Last Name"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">
                  This Field only Accept Letter and Space. (.) or Spacial
                  Character is not Allowed
                </div>

                <span class="text-danger"></span>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3 ">
                <label for="email">Email address:</label>

                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                  placeholder="example@email.com"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Email is required</div>

                <span class="text-danger"></span>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3 ">
                <label for="confirm_password">Retype Password:</label>

                <input
                  type="password"
                  minlength="8"
                  class="form-control"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Enter password at least 8 characters"
                  value=""
                  required
                />

                <div class="invalid-feedback">
                  Password Doesn't Match With the above password OR password
                  Length is less than 8 Characters
                </div>

                <span class="text-danger"></span>
              </div>

              <div class="col-md-6 mb-3 ">
                <label for="password">Password:</label>

                <input
                  type="password"
                  minlength="8"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password at least 8 characters"
                  value=""
                  required
                />

                <div class="invalid-feedback">
                  Password Length Must be More Than 8 Characters
                </div>

                <span class="text-danger"></span>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="phone_number">
                  Phone Number (with Country Code):
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="phone_number"
                  name="phone_number"
                  placeholder="+8801710000000"
                  pattern="^\+[1-9]{1}[0-9]{3,12}$"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">
                  Country Code is Required (No Space, No - , No _ ) Only Digit
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="gender_id">Select Gender:</label>

                <select
                  class="form-control"
                  id="gender_id"
                  name="gender_id"
                  placeholder="Select Gender"
                  value=""
                  required
                >
                  <option value="">Select Gender:</option>

                  <option value="M">Male</option>

                  <option value="F">Female</option>
                </select>

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Gender is required</div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="skype_id">Skype Name:</label>

                <input
                  type="text"
                  class="form-control"
                  id="skype_id"
                  name="skype_id"
                  placeholder="Skype Name"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Skype id is required</div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="dob">Date of Birth:</label>

                <input
                  type="date"
                  class="form-control"
                  id="dob"
                  name="dob"
                  placeholder="Birth Date"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Date of Birth is required</div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="country">Country Name:</label>

                <select
                  class="form-control"
                  id="country"
                  name="country"
                  placeholder="Select Country Name"
                  value=""
                  required
                >
                  <option value="">Select Country:</option>

                  <option>Afghanistan</option>

                  <option>Albania</option>

                  <option>Algeria</option>

                  <option>Andorra</option>

                  <option>Angola</option>

                  <option>Antigua and Barbuda</option>

                  <option>Argentina</option>

                  <option>Armenia</option>

                  <option>Australia</option>

                  <option>Austria</option>

                  <option>Austrian Empire</option>

                  <option>Azerbaijan</option>

                  <option>Baden*</option>

                  <option>Bahamas, The</option>

                  <option>Bahrain</option>

                  <option>Bangladesh</option>

                  <option>Barbados</option>

                  <option>Bavaria*</option>

                  <option>Belarus</option>

                  <option>Belgium</option>

                  <option>Belize</option>

                  <option>Benin (Dahomey)</option>

                  <option>Bolivia</option>

                  <option>Bosnia and Herzegovina</option>

                  <option>Botswana</option>

                  <option>Brazil</option>

                  <option>Brunei</option>

                  <option>Brunswick and Lüneburg</option>

                  <option>Bulgaria</option>

                  <option>Burkina Faso (Upper Volta)</option>

                  <option>Burma</option>

                  <option>Burundi</option>

                  <option>Cabo Verde</option>

                  <option>Cambodia</option>

                  <option>Cameroon</option>

                  <option>Canada</option>

                  <option>Cayman Islands, The</option>

                  <option>Central African Republic</option>

                  <option>Central American Federation*</option>

                  <option>Chad</option>

                  <option>Chile</option>

                  <option>China</option>

                  <option>Colombia</option>

                  <option>Comoros</option>

                  <option>Congo Free State, The</option>

                  <option>Costa Rica</option>

                  <option>Cote d’Ivoire (Ivory Coast)</option>

                  <option>Croatia</option>

                  <option>Cuba</option>

                  <option>Cyprus</option>

                  <option>Czechia</option>

                  <option>Czechoslovakia</option>

                  <option>Democratic Republic of the Congo</option>

                  <option>Denmark</option>

                  <option>Djibouti</option>

                  <option>Dominica</option>

                  <option>Dominican Republic</option>

                  <option>Duchy of Parma, The*</option>

                  <option>East Germany (German Democratic Republic)</option>

                  <option>Ecuador</option>

                  <option>Egypt</option>

                  <option>El Salvador</option>

                  <option>Equatorial Guinea</option>

                  <option>Eritrea</option>

                  <option>Estonia</option>

                  <option>Eswatini</option>

                  <option>Ethiopia</option>

                  <option>Federal Government of Germany (1848-49)*</option>

                  <option>Fiji</option>

                  <option>Finland</option>

                  <option>France</option>

                  <option>Gabon</option>

                  <option>Gambia, The</option>

                  <option>Georgia</option>

                  <option>Germany</option>

                  <option>Ghana</option>

                  <option>Grand Duchy of Tuscany, The*</option>

                  <option>Greece</option>

                  <option>Grenada</option>

                  <option>Guatemala</option>

                  <option>Guinea</option>

                  <option>Guinea-Bissau</option>

                  <option>Guyana</option>

                  <option>Haiti</option>

                  <option>Hanover*</option>

                  <option>Hanseatic Republics*</option>

                  <option>Hawaii*</option>

                  <option>Hesse*</option>

                  <option>Holy See</option>

                  <option>Honduras</option>

                  <option>Hungary</option>

                  <option>Iceland</option>

                  <option>India</option>

                  <option>Indonesia</option>

                  <option>Iran</option>

                  <option>Iraq</option>

                  <option>Ireland</option>

                  <option>Israel</option>

                  <option>Italy</option>

                  <option>Jamaica</option>

                  <option>Japan</option>

                  <option>Jordan</option>

                  <option>Kazakhstan</option>

                  <option>Kenya</option>

                  <option>Kingdom of Saudi Arabia</option>

                  <option>Kingdom of Serbia/Yugoslavia*</option>

                  <option>Kiribati</option>

                  <option>Korea</option>

                  <option>Kosovo</option>

                  <option>Kuwait</option>

                  <option>Kyrgyzstan</option>

                  <option>Laos</option>

                  <option>Latvia</option>

                  <option>Lebanon</option>

                  <option>Lesotho</option>

                  <option>Lew Chew (Loochoo)*</option>

                  <option>Liberia</option>

                  <option>Libya</option>

                  <option>Liechtenstein</option>

                  <option>Lithuania</option>

                  <option>Luxembourg</option>

                  <option>Malaysia</option>
                </select>

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">
                  Country is required Only Letter And Space is Accepted
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="permanent_address">Full Permanent Address:</label>

                <input
                  type="text"
                  class="form-control"
                  id="permanent_address"
                  name="permanent_address"
                  placeholder="Full Permanent Address"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">
                  Permanent Address is required
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="present_address">Full Present Address:</label>

                <input
                  type="text"
                  class="form-control"
                  id="present_address"
                  name="present_address"
                  placeholder="Full Present Address"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Present Address is required</div>
              </div>
            </div>
            END OF Personal Information
            <hr />
            <h3>Academic Information</h3>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="admission_date">Admission Date:</label>

                <input
                  type="date"
                  class="form-control"
                  id="admission_date"
                  name="admission_date"
                  placeholder="Addmission Date"
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">
                  Admission Date is not required
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="semester_id">Select Session:</label>

                <select
                  class="form-control"
                  id="semester_id"
                  name="semester_id"
                  placeholder="Select Semester"
                  value=""
                  required
                >
                  <option value="">Select Session:</option>

                  <option value="A">(Shawwāl - Muḥarram) (MAY - AUGUST)</option>

                  <option value="B">
                    (Muḥarram - Rabī‘ ath-thānī) (AUGUST - NOVEMBER)
                  </option>

                  <option value="C">
                    (Rabī‘ ath-thānī - Sha‘bān) (NOVEMBER - MARCH)
                  </option>
                </select>

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Session is required</div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="course_id">Select Course:</label>

                <select
                  class="form-control"
                  id="course_id"
                  name="course_id"
                  placeholder="Select Course"
                  value=""
                  required
                >
                  <option value="">Select Course:</option>

                  <option value="AG">BASIC ARABIC GRAMMAR COURSE</option>

                  <option value="MN">MIZAN-NAHWIMIR</option>

                  <option value="QD">ALIM & ALIMAH PROGRAM (QUDURI)</option>

                  <option value="SQ">
                    ALIM & ALIMAH PROGRAM (SHORHE WYQAYA)
                  </option>

                  <option value="SF">SHORHE WYQAYA FON</option>

                  <option value="UF">USUL-E-FIQH FON</option>

                  <option value="MS">ALIM & ALIMAH PROGRAM (MASHKAT)</option>

                  <option value="DW">DAWRAH HADITH</option>

                  <option value="SB">SAMAYAT AL BUKHARI</option>

                  <option value="SS">SAMAYAT AS SHAMAIAL</option>

                  <option value="NF">NAHU FON</option>

                  <option value="FF">FIQH FON</option>

                  <option value="QF">QURAN TARJUMA FON</option>

                  <option value="EP">EZARA PROGRAM</option>

                  <option value="FN">FARZ-E A'EEN NAZARA</option>

                  <option value="FM">FARZ-E A'EEN MAKTAB</option>

                  <option value="AP">FARZ-E A'EEN AMMA PARA</option>

                  <option value="CM">CHILDREN MAKTAB</option>

                  <option value="CN">CHILDREN NAZARA</option>

                  <option value="AL">ARABIC LANGUAGE COURSE</option>

                  <option value="HQ">HIFZUL QURAN</option>

                  <option value="UL">URDU LANGUAGE COURSE</option>
                </select>

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Course is required</div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="session_id">Select Year:</label>

                <select
                  class="form-control"
                  id="session_id"
                  name="session_id"
                  placeholder="Select Session"
                  value=""
                  required
                >
                  <option value="">Select Year:</option>

                  <option value="202223">Year 2022-23</option>

                  <option value="202324">Year 2023-24</option>
                </select>

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Year is required</div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="jamat_id">Select Jamat:</label>

                <select
                  class="form-control"
                  id="jamat_id"
                  name="jamat_id"
                  placeholder="Select Jamat"
                  value=""
                  required
                >
                  <option value="">Select Jamat:</option>
                  <option value="25">Basic Arabic Grammer Jamat - 1</option>
                  <option value="1">Mizan-Nahbemir Jamat - 1</option>
                  <option value="2">Mizan-Nahbemir Jamat - 2</option>
                  <option value="3">Mizan-Nahbemir Jamat - 3</option>
                  <option value="4">Quduri Jamat - 1</option>
                  <option value="5">Quduri Jamat - 2</option>
                  <option value="6">Quduri Jamat - 3</option>
                  <option value="7">Shorhe Wyqaya Jamat - 1</option>
                  <option value="8">Shorhe Wyqaya Jamat - 2</option>
                  <option value="9">Shorhe Wyqaya Jamat - 3</option>
                  <option value="10">Mashkat Jamat - 1</option>
                  <option value="11">Mashkat Jamat - 2</option>
                  <option value="12">Mashkat Jamat - 3</option>
                  <option value="13">Dawrah Jamat - 1</option>
                  <option value="14">Dawrah Jamat - 2</option>
                  <option value="15">Dawrah Jamat - 3</option>
                  <option value="16">Ezara Jamat 1</option>
                  <option value="17">Ezara Jamat 2</option>
                  <option value="18">Urdu Jamat</option>
                  <option value="19">Forze Aine Moktob Jamat</option>
                  <option value="20">Children Moktob Jamat</option>
                  <option value="21">Hifz Jamat</option>
                  <option value="22">Children Nazara Jamat</option>
                  <option value="23">Forze Aine Nazara Jamat</option>
                  <option value="24">Forze Aine Amma Para Jamat</option>
                  <option value="25">Fon Jamat - 1</option>
                  <option value="26">Fon Jamat - 2</option>
                  <option value="27">Fon Jamat - 3 (QF)</option>
                  <option value="28">SHORHE WYQAYA Fon Jamat</option>
                  <option value="29">SAMAYAT AL BUKHARI Jamat</option>
                  <option value="30">SAMAYAT AS SHAMAIAL Jamat</option>
                </select>

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">Jamat is required</div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="intention_to_learn_arabic">
                  আরবী শিক্ষার উদ্দেশ্য সংক্ষেপে লিখুন....
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="intention_to_learn_arabic"
                  name="intention_to_learn_arabic"
                  placeholder="আরবী শিক্ষার উদ্দেশ্য সংক্ষেপে লিখুন...."
                  value=""
                  required
                />

                <div class="valid-feedback">Looks good!</div>

                <div class="invalid-feedback">This Field is required</div>
              </div>
            </div>
            <div class="jumbotron">
              <h2>অঙ্গীকার (COMMITMENT):</h2>

              <p>
                আমি এই মর্মে অঙ্গীকার করিতেছি যে, আমি অত্র প্রতিষ্ঠানের একজন
                ছাত্র/ছাত্রী হিসাবে প্রতিষ্ঠানের সকল নিয়ম-কানুন মেনে চলতে বাধ্য
                থাকিব এবং প্রতিষ্ঠানের নিয়ম-শৃঙ্খলা পরিপন্থী কোন কাজ করব না। আমি
                নিশ্চয়তা প্রদান করিতেছি যে, উপরে বর্ণিত সকল তথ্যাদি সঠিক এবং
                নির্ভূল।
              </p>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="invalidCheck"
                  name="agreement_value"
                  value="1"
                  required
                />

                <label class="form-check-label" for="invalidCheck">
                  আমি উপরের অঙ্গীকার গুলো মেনে নিলাম। এবং আমার দেওয়া তথ্যগুলো
                  নির্ভুল।
                </label>

                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <input
              type="hidden"
              value="3"
              id="user_type_id"
              name="user_type_id"
            />
            <button class="btn btn-primary" type="submit" name="reg_user">
              Submit form
            </button>
            <input type="reset" class="btn btn-default" value="Reset" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentSignupForm;
