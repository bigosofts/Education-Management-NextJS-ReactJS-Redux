'use client';
import React from 'react';
import { useRef, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/courseapiservices";


function NewCourseForm(props) {

    const [inputType, setInputType] = useState('text');
    const handleFocus = () => {
        setInputType('date');
      };
    
      const handleBlur = () => {
        setInputType('text');
      };


    const coursetitleref = useRef();
    const coursetitlebnref = useRef();
    const coursecoderef = useRef();
    const courseimagelinkref = useRef();
    const coursecategoryref = useRef();
    const coursecategorybnref = useRef();
    const coursepopularityref = useRef();
    const coursepopularitybnref = useRef();
    const coursejamatcoderef = useRef();
    const coursedescriptionref = useRef();
    const coursedescriptionbnref = useRef();
    const coursestartingdateenref = useRef();
    const coursestartingdatebnref = useRef();
    const courseradio1ref = useRef();
    const courseradio2ref = useRef();

    
    const clickHandler = async (e)=>{
        e.preventDefault();
        const titleen = coursetitleref.current.value;
        const titlebn = coursetitlebnref.current.value;
        const courseCode = coursecoderef.current.value;
        const imageLink = courseimagelinkref.current.value;
        const categoriesen = coursecategoryref.current.value;
        const categoriesbn = coursecategorybnref.current.value;
        const popularityen = coursepopularityref.current.value;
        const popularitybn = coursepopularitybnref.current.value;
        const jamatName = coursejamatcoderef.current.value;
        const descriptionen = coursedescriptionref.current.value;
        const descriptionbn = coursedescriptionbnref.current.value;
        const startingDateen = coursestartingdateenref.current.value;
        const startingDatebn = coursestartingdatebnref.current.value;
        const courseradio1 = courseradio1ref.current.checked;
        const courseradio2 = courseradio2ref.current.checked;
        const status = courseradio1 ? "active" : courseradio2 ? "inactive" : "inactive";
        
        

        const res = await createData(imageLink,courseCode,titleen,titlebn,descriptionen,descriptionbn,categoriesen, categoriesbn,startingDateen, startingDatebn,popularityen, popularitybn,jamatName,status);

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
                <input ref={coursetitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursetitle' placeholder='Enter course title'></input>
            </div>
            <div className="input-type">
                <input ref={coursetitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursetitlebn' placeholder='কোর্স টাইটেল বাংলায় লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={coursecoderef} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursecode' placeholder='Enter course code'></input>
            </div>
            <div className="input-type">
                <input ref={courseimagelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='imagelink' placeholder='Enter image link'></input>
            </div>
            <div className="input-type">
                <input ref={coursecategoryref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursecategory' placeholder='Enter course category'></input>
            </div>
            <div className="input-type">
                <input ref={coursecategorybnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursecategorybn' placeholder='কোর্সের ধরণ বাংলায় লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={coursepopularityref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursepopularity' placeholder='Enter course popularity'></input>
            </div>
            <div className="input-type">
                <input ref={coursepopularitybnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursepopularitybn' placeholder='কোর্সের জনপ্রিয়তা বাংলায় লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={coursejamatcoderef} className="border w-full px-5 py-3 focus:outline-none" type='text' name='coursejamat' placeholder='Enter jamat code'></input>
            </div>
            <div className="input-type">
            <textarea ref={coursedescriptionref} id="coursedescription" name="coursedescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter Course Description'></textarea>
            </div>
            <div className="input-type">
            <textarea ref={coursedescriptionbnref} id="coursedescriptionbn" name="coursedescriptionbn" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='বাংলায় কোর্সের বিবরণ লিখুন'></textarea>
            </div>
            <div className="input-type">
                <input ref={coursestartingdatebnref} placeholder="বাংলায় কোর্স শুরুর তারিখ লিখুন" className="border w-full px-5 py-3 focus:outline-none" type="text" name="coursestartingdate" />
            </div>
            <div className="input-type">
                <input ref={coursestartingdateenref} placeholder="Enter Starting Date" className="border w-full px-5 py-3 focus:outline-none" type={inputType} onFocus={handleFocus} onBlur={handleBlur} name="coursestartingdate" />
            </div>
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={courseradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={courseradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewCourseForm;