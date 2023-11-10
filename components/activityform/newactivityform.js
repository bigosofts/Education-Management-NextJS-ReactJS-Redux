
'use client';
import React from 'react';
import { useRef } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/activityapiservices";


function NewActivityForm(props) {
    const activitytitleref = useRef();
    const activitytitlebnref = useRef();
    const activityidref = useRef();
    const activityimagelinkref = useRef();
    const activityiconref = useRef();
    const activitydescriptionref = useRef();
    const activitydescriptionbnref = useRef();
    const activityradio1ref = useRef();
    const activityradio2ref = useRef();

    const clickHandler = async (e)=>{
        e.preventDefault();
        const activityttle = activitytitleref.current.value;
        const activitytitlebn = activitytitlebnref.current.value;
        const activityid = activityidref.current.value;
        const activityimagelink = activityimagelinkref.current.value;
        const activityicon = activityiconref.current.value;
        const activitydescription = activitydescriptionref.current.value;
        const activitydescriptionbn = activitydescriptionbnref.current.value;
        const activityradio1 = activityradio1ref.current.checked;
        const activityradio2 = activityradio2ref.current.checked;
        const status = activityradio1 ? "active" : activityradio2 ? "inactive" : "inactive";

        const res = await createData(activityimagelink,activityid,activityttle,activitytitlebn,activitydescription,activitydescriptionbn,activityicon,status);

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
                <input ref={activitytitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activitytitle' placeholder='Enter activity title'></input>
            </div>
            <div className="input-type">
                <input ref={activitytitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activitytitlebn' placeholder='এক্টিভিটি টাইটেল বাংলায়'></input>
            </div>
            <div className="input-type">
                <input ref={activityidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activityid' placeholder='Enter Activity ID'></input>
            </div>
            <div className="input-type">
                <input ref={activityimagelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='imagelink' placeholder='Enter image link'></input>
            </div>
            <div className="input-type">
                <input ref={activityiconref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activityicon' placeholder='Enter activity icon'></input>
            </div>
            <div className="input-type">
                <textarea ref={activitydescriptionref} id="activitydescription" name="activitydescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter Activity Description'></textarea>
            </div>
            <div className="input-type">
                <textarea ref={activitydescriptionbnref} id="activitydescription" name="activitydescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='এক্টিভিটির বর্নণা লিখুন বাংলায়'></textarea>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={activityradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={activityradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewActivityForm;