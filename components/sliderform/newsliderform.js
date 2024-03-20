
'use client';
import React from 'react';
import { useRef } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/sliderapiservices";


function NewSliderForm(props) {
    const slidertitleref = useRef();
    const slidertitlebnref = useRef();
    const slideridref = useRef();
    const sliderNameref = useRef();
    const sliderbuttontitleref = useRef();
    const sliderbuttontitlebnref = useRef();
    const buttonlinkref = useRef();
    const imagelinkref = useRef();
    const sliderdescriptionref = useRef();
    const sliderdescriptionbnref = useRef();
    const sliderradio1ref = useRef();
    const sliderradio2ref = useRef();

    const clickHandler = async (e)=>{
        e.preventDefault();
        const slidertitle = slidertitleref.current.value;
        const slidertitlebn = slidertitlebnref.current.value;
        const sliderid = slideridref.current.value;
        const sliderName = sliderNameref.current.value;
        const sliderbuttontitle = sliderbuttontitleref.current.value;
        const sliderbuttontitlebn = sliderbuttontitlebnref.current.value;
        const buttonlink = buttonlinkref.current.value;
        const imagelink = imagelinkref.current.value;
        const sliderdescription = sliderdescriptionref.current.value;
        const sliderdescriptionbn = sliderdescriptionbnref.current.value;
        const sliderradio1 = sliderradio1ref.current.checked;
        const sliderradio2 = sliderradio2ref.current.checked;
        const status = sliderradio1 ? "active" : sliderradio2 ? "inactive" : "inactive";

        const res = await createData(imagelink,sliderid,slidertitle,slidertitlebn,sliderdescription,sliderdescriptionbn,sliderbuttontitle,sliderbuttontitlebn,buttonlink,status, sliderName);

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
                <input ref={slidertitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='slidertitle' placeholder='Enter Slider title'></input>
            </div>
            <div className="input-type">
                <input ref={slidertitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='slidertitlebn' placeholder='স্লাইডার টাইটেল লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={slideridref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='sliderid' placeholder='Enter slider id'></input>
            </div>
            <div className="input-type">
                <input ref={sliderNameref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='sliderName' placeholder='Enter slider Name'></input>
            </div>
            <div className="input-type">
                <input ref={sliderbuttontitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='buttontitle' placeholder='Enter button title'></input>
            </div>
            <div className="input-type">
                <input ref={sliderbuttontitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='buttontitlebn' placeholder='বাংলায় বাটন টাইটেল'></input>
            </div>
            <div className="input-type">
                <input ref={buttonlinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='buttonlink' placeholder='Enter Button Link'></input>
            </div>
            <div className="input-type">
                <input ref={imagelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='imagelink' placeholder='Enter image link'></input>
            </div>

            <div className="input-type">
            <textarea ref={sliderdescriptionref} id="sliderdescription" name="sliderdescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter slider Description'></textarea>
            </div>
            <div className="input-type">
            <textarea ref={sliderdescriptionbnref} id="sliderdescriptionbn" name="sliderdescriptionbn" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='স্লাইডারের বর্ননা লিখুন '></textarea>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={sliderradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={sliderradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewSliderForm;