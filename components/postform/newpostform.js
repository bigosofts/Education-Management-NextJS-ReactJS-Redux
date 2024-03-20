
'use client';
import React from 'react';
import { useRef } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/postapiservices";


function NewPostForm(props) {
    const posttitleref = useRef();
    const posttitlebnref = useRef();
    const postuserref = useRef();
    const postimagelinkref = useRef();
    const postidref = useRef();
    const postcategoryref = useRef();
    const postcategorybnref = useRef();
    const postpopularityref = useRef();
    const postpopularitybnref = useRef();
    const postdescriptionref = useRef();
    const postdescriptionbnref = useRef();
    const postradio1ref = useRef();
    const postradio2ref = useRef();

    const clickHandler = async (e)=>{
        e.preventDefault();
        const posttitle = posttitleref.current.value;
        const posttitlebn = posttitlebnref.current.value;
        const postuser = postuserref.current.value;
        const postimagelink = postimagelinkref.current.value;
        const postid = postidref.current.value;
        const postcategory = postcategoryref.current.value;
        const postcategorybn = postcategorybnref.current.value;
        const postpopularity = postpopularityref.current.value;
        const postpopularitybn = postpopularitybnref.current.value;
        const postdescription = postdescriptionref.current.value;
        const postdescriptionbn = postdescriptionbnref.current.value;
        const postradio1 = postradio1ref.current.checked;
        const postradio2 = postradio2ref.current.checked;
        const status = postradio1 ? "active" : postradio2 ? "inactive" : "inactive";

        const res = await createData(postuser,postimagelink,postid,posttitle,posttitlebn,postdescription,postdescriptionbn,postcategory,postcategorybn,postpopularity,postpopularitybn,status);

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
                <input ref={posttitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='posttitle' placeholder='Enter Post title'></input>
            </div>
            <div className="input-type">
                <input ref={posttitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='posttitlebn' placeholder='বাংলায় পোস্ট টাইটেল'></input>
            </div>
            <div className="input-type">
                <input ref={postuserref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postuser' placeholder='Enter post user'></input>
            </div>
            <div className="input-type">
                <input ref={postimagelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postimagelink' placeholder='Enter post image link'></input>
            </div>
            <div className="input-type">
                <input ref={postidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postid' placeholder='Enter post ID'></input>
            </div>
            <div className="input-type">
                <input ref={postcategoryref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postcategory' placeholder='Enter post category'></input>
            </div>
            <div className="input-type">
                <input ref={postcategorybnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postcategorybn' placeholder='পোস্ট ক্যাটাগরি লিখুন বাংলায়'></input>
            </div>
            <div className="input-type">
                <input ref={postpopularityref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postpopularity' placeholder='Enter post popularity'></input>
            </div>
            <div className="input-type">
                <input ref={postpopularitybnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postpopularitybn' placeholder='জনপ্রিয়তার ধরণ লিখুন'></input>
            </div>
            <div className="input-type">
            <textarea ref={postdescriptionref} id="postdescription" name="postdescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter post Description'></textarea>
            </div>
            <div className="input-type">
            <textarea ref={postdescriptionbnref} id="postdescriptionbn" name="postdescriptionbn" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='পোস্টের বিবরণ লিখুন বাংলায়'></textarea>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={postradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={postradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewPostForm;