
'use client';
import React from 'react';
import { useRef,useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/studentapiservices";


function NewStudentForm(props) {


    const [inputType, setInputType] = useState('text');
    const handleFocus = () => {
        setInputType('date');
      };
    
      const handleBlur = () => {
        setInputType('text');
      };

      const firstnameref = useRef();
      const lastnameref = useRef();
      const firstnamebnref = useRef();
      const lastnamebnref = useRef();
      const studentnidref = useRef();
      
      const studentbirthregref = useRef();
      const studentemailref = useRef();
      const studentroleref = useRef();
      const resetpassref = useRef();
      const mobilenoref = useRef();
      const occupationref = useRef();
      const fathernameref = useRef();
      const fathernamebnref = useRef();
      const studentcoursecoderef = useRef();
      const studentjamatref = useRef();
      const studentgenderref = useRef();
      const birthdateref = useRef();
      const presentaddressref = useRef();
      const parmanetaddressref  = useRef();
      const studentcountryref  = useRef();
      const admissionsessionref  = useRef();
      const studentmotiveref  = useRef();
      const studentpaymentstatusref  = useRef();
      
      const studentradio1ref = useRef();
      const studentradio2ref = useRef();

    const clickHandler = async (e)=>{
        e.preventDefault();
          const firstname = firstnameref.current.value;
          const lastname = lastnameref.current.value;
          const firstnamebn = firstnamebnref.current.value;
          const lastnamebn = lastnamebnref.current.value;
          const studentnid = studentnidref.current.value;
          const birthreg = studentbirthregref.current.value;
          const studentemail = studentemailref.current.value;
          const studentrole = studentroleref.current.value;
          const resetpass = resetpassref.current.value;
          const mobileno = mobilenoref.current.value;
          const occupation = occupationref.current.value;
          const fathername = fathernameref.current.value;
          const fathernamebn = fathernamebnref.current.value;
          const studentcoursecode = studentcoursecoderef.current.value;
          const studentjamatcode = studentjamatref.current.value;
          const studentgender = studentgenderref.current.value;
          const birthdate = birthdateref.current.value;
          const presentaddress = presentaddressref.current.value;
          const parmanentaddress = parmanetaddressref.current.value;
          const studentcountry = studentcountryref.current.value;
          const admissionsession = admissionsessionref.current.value;
          const studentmotive = studentmotiveref.current.value;
          const studentpaymentstatus = studentpaymentstatusref.current.value;
        
          const studentradio1 = studentradio1ref.current.checked;
          const studentradio2 = studentradio2ref.current.checked;
        const status = studentradio1 ? "active" : studentradio2 ? "inactive" : "inactive";

        const res = await createData(firstname,firstnamebn,lastname,lastnamebn,studentnid,birthreg,fathername,fathernamebn,studentemail,resetpass,mobileno,occupation,studentcoursecode,studentjamatcode,studentgender,birthdate,studentcountry,presentaddress,parmanentaddress,admissionsession,studentmotive,studentpaymentstatus,studentrole,status);

        if(res){
            props.statechanger();
            myToast.success("Data was created successfully");
        }else{
            myToast.warning("something went wrong");
        }


    }


    return (
        <form className='grid lg:grid-cols-3 w-full gap-5'>
            <div className="input-type">
                <input ref={firstnameref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentfirstname' placeholder='Enter First Name'></input>
            </div>
            <div className="input-type">
                <input ref={lastnameref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentlastname' placeholder='Enter Last Name'></input>
            </div>
            <div className="input-type">
                <input ref={firstnamebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentfirstnamebn' placeholder='নামের প্রথম অংশ লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={lastnamebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentlastnamebn' placeholder='নামের শেষের অংশ লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={studentnidref} className="border w-full px-5 py-3 focus:outline-none" type='number' name='studentidcard' placeholder='Enter NID Number'></input>
            </div>
            <div className="input-type">
                <input ref={studentbirthregref} className="border w-full px-5 py-3 focus:outline-none" type='number' name='studentbirthcard' placeholder='Enter Birth Registration Number'></input>
            </div>
            <div className="input-type">
                <input ref={studentemailref} className="border w-full px-5 py-3 focus:outline-none" type='email' name='studentemail' placeholder='Enter Email Address'></input>
            </div>
            <div className="input-type">
                <input ref={studentroleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentrole' placeholder='Enter Role'></input>
            </div>
            <div className="input-type">
                <input ref={resetpassref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentpass' placeholder='Reset Password or keep blank'></input>
            </div>
            <div className="input-type">
                <input ref={mobilenoref} className="border w-full px-5 py-3 focus:outline-none" type='number' name='studentmobile' placeholder='Enter Mobile Number'></input>
            </div>
            <div className="input-type">
                <input ref={occupationref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentoccupation' placeholder='Enter Student Occupation'></input>
            </div>
            <div className="input-type">
                <input ref={fathernameref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentfathername' placeholder='Enter Student Father Name'></input>
            </div>
            <div className="input-type">
                <input ref={fathernamebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentfathernamebn' placeholder='বাবার নাম লিখুন বাংলায়'></input>
            </div>
            <div className="input-type">
                <input ref={studentcoursecoderef} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentcoursecode' placeholder='Enter Student Course Code'></input>
            </div>
            <div className="input-type">
                <input ref={studentjamatref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentjamatcode' placeholder='Enter Student Jamat Code'></input>
            </div>
            <div className="input-type">
                <input ref={studentgenderref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentgender' placeholder='Enter Student gender'></input>
            </div>
            <div className="input-type">
                <input ref={birthdateref} placeholder="Enter Birth Date" className="border w-full px-5 py-3 focus:outline-none" type={inputType} onFocus={handleFocus} onBlur={handleBlur} name="studentbirthdate" />
            </div>
            <div>
                <textarea ref={presentaddressref} id="presentaddress" name="presentaddress" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter present address'></textarea>
            </div>
            <div>
                <textarea ref={parmanetaddressref} id="permanentaddress" name="permanentaddress" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter Permanent address'></textarea>
            </div>
            <div className="input-type">
                <input ref={studentcountryref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentcountry' placeholder='Enter Student country'></input>
            </div>
            <div className="input-type">
                <input ref={admissionsessionref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='admissionsession' placeholder='Enter Student admission session'></input>
            </div>
            <div className="input-type">
                <input ref={studentmotiveref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='studentmotive' placeholder='Enter Student Motive'></input>
            </div>
            <div className="input-type">
                <input ref={studentpaymentstatusref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='paymentstatus' placeholder='Enter Student Payment Status'></input>
            </div>
            
            
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={studentradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={studentradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewStudentForm;