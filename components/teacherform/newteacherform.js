
'use client';
import React from 'react';
import { useRef, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/teacherapiservices";


function NewTeacherForm(props) {

    const [inputType, setInputType] = useState('text');
    const handleFocus = () => {
        setInputType('date');
      };
    
      const handleBlur = () => {
        setInputType('text');
      };

      const teacherfirstnameref = useRef();
      const teacherlastnameref = useRef();
      const teacherfirstnamebnref = useRef();
      const teacherlastnamebnref = useRef();
      const fathernameref = useRef();
      const fathernamebnref = useRef();
      const teachernidref = useRef();
      const tacherbirthregref = useRef();
      const tacheremailref = useRef();
      const tacherroleref = useRef();
      const resetpassref = useRef();
      const teachermobileref = useRef();
      const teachereducationref = useRef();
      const teachercoursecoderef = useRef();
      const teacherjamatcoderef = useRef();
      const teachergenderref = useRef();
      const teacherbirthdateref = useRef();
      const teacherpresentaddressref = useRef();
      const teacherparmanentaddressref = useRef();
      const teachercountryref = useRef();
      const designationref = useRef();
      
      const teacherradio1ref = useRef();
      const teacherradio2ref = useRef();

    const clickHandler = async (e)=>{
        e.preventDefault();
          const teacherfirstname = teacherfirstnameref.current.value;
          const teacherlastname = teacherlastnameref.current.value;
          const teacherfirstnamebn = teacherfirstnamebnref.current.value;
          const teacherlastnamebn = teacherlastnamebnref.current.value;
          const fathername = fathernameref.current.value;
          const fathernamebn = fathernamebnref.current.value;
          const teachernid = teachernidref.current.value;
          const tacherbirthreg = tacherbirthregref.current.value;
          const tacheremail = tacheremailref.current.value;
          const tacherrole = tacherroleref.current.value;
          const resetpass = resetpassref.current.value;
          const teachermobile = teachermobileref.current.value;
          const teachereducation = teachereducationref.current.value;
          const teachercoursecode = teachercoursecoderef.current.value;
          const teacherjamatcode = teacherjamatcoderef.current.value;
          const teachergender = teachergenderref.current.value;
          const teacherbirthdate = teacherbirthdateref.current.value;
          const teacherpresentaddress = teacherpresentaddressref.current.value;
          const teacherparmanentaddress = teacherparmanentaddressref.current.value;
          const teachercountry = teachercountryref.current.value;
          const designation = designationref.current.value;
        
          const teacherradio1 = teacherradio1ref.current.checked;
          const teacherradio2 = teacherradio2ref.current.checked;
        const status = teacherradio1 ? "active" : teacherradio2 ? "inactive" : "inactive";

        const res = await createData(teacherfirstname, teacherfirstnamebn, teacherlastname, teacherlastnamebn, teachernid, tacherbirthreg, fathername, fathernamebn, tacheremail, resetpass, teachermobile, teachercoursecode, teacherjamatcode, teachergender, teacherbirthdate, teachercountry, teacherpresentaddress, teacherparmanentaddress, teachereducation, tacherrole, status,designation);

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
                <input ref={teacherfirstnameref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherfirstname' placeholder='Enter First Name'></input>
            </div>
            <div className="input-type">
                <input ref={teacherlastnameref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherlastname' placeholder='Enter Last Name'></input>
            </div>
            <div className="input-type">
                <input ref={teacherfirstnamebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherfirstnamebn' placeholder='নামের প্রথম অংশ লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={teacherlastnamebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherlastnamebn' placeholder='নামের শেষের অংশ লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={designationref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='designationref' placeholder='Enter Current Designation'></input>
            </div>
            <div className="input-type">
                <input ref={fathernameref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherfathername' placeholder='Enter Fathers Name'></input>
            </div>
            <div className="input-type">
                <input ref={fathernamebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherfathernamebn' placeholder='বাবার নাম বাংলায় লিখুন'></input>
            </div>
            
            <div className="input-type">
                <input ref={teachernidref} className="border w-full px-5 py-3 focus:outline-none" type='number' name='teacheridcard' placeholder='Enter NID Number'></input>
            </div>
            <div className="input-type">
                <input ref={tacherbirthregref} className="border w-full px-5 py-3 focus:outline-none" type='number' name='teacherbirthcard' placeholder='Enter Birth Registration Number'></input>
            </div>
            <div className="input-type">
                <input ref={tacheremailref} className="border w-full px-5 py-3 focus:outline-none" type='email' name='teacheremail' placeholder='Enter Email Address'></input>
            </div>
            <div className="input-type">
                <input ref={tacherroleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teachertole' placeholder='Enter Role'></input>
            </div>
            <div className="input-type">
                <input ref={resetpassref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherpass' placeholder='Reset Password or keep blank'></input>
            </div>
            <div className="input-type">
                <input ref={teachermobileref} className="border w-full px-5 py-3 focus:outline-none" type='number' name='teachermobile' placeholder='Enter Mobile Number'></input>
            </div>
            <div className="input-type">
                <input ref={teachereducationref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teachereducation' placeholder='Enter Teacher Education'></input>
            </div>
            <div className="input-type">
                <input ref={teachercoursecoderef} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teachercoursecode' placeholder='Enter Teacher Course Code'></input>
            </div>
            <div className="input-type">
                <input ref={teacherjamatcoderef} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teacherjamatcode' placeholder='Enter teacher jamat Code'></input>
            </div>
            <div className="input-type">
                <input ref={teachergenderref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teachergender' placeholder='Enter teacher gender'></input>
            </div>
            <div className="input-type">
                <input ref={teacherbirthdateref} placeholder="Enter Birth Date" className="border w-full px-5 py-3 focus:outline-none" type={inputType} onFocus={handleFocus} onBlur={handleBlur} name="teacherbirthdate" />
            </div>
            <div>
                <textarea ref={teacherpresentaddressref} id="presentaddress" name="presentaddress" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter present address'></textarea>
            </div>
            <div>
                <textarea ref={teacherparmanentaddressref} id="permanentaddress" name="permanentaddress" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter Permanent address'></textarea>
            </div>
            <div className="input-type">
                <input ref={teachercountryref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='teachercountry' placeholder='Enter teacher country'></input>
            </div>
            
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={teacherradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={teacherradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewTeacherForm;