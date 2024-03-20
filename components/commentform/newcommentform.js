'use client';
import React from 'react';
import { useRef } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/commentapiservice";

function NewCommentForm(props) {
    const commentuserref = useRef();
    const commentuserbnref = useRef();
    const commentdesignationref = useRef();
    const commentdesignationbnref = useRef();
    const commenticonref = useRef();
    const commentidref = useRef();
    const commentbodyref = useRef();
    const commentbodybnref = useRef();
    const commentradio1ref = useRef();
    const commentradio2ref = useRef();

    const clickHandler = async (e)=>{
        e.preventDefault();
        console.log("clicked");
        const commentuser = commentuserref.current.value;
        const commentuserbn = commentuserbnref.current.value;
        const commentdesignation = commentdesignationref.current.value;
        const commentdesignationbn = commentdesignationbnref.current.value;
        const commenticon = commenticonref.current.value;
        const commentid = commentidref.current.value;
        const commentbody = commentbodyref.current.value;
        const commentbodybn = commentbodybnref.current.value;
        const commentradio1 = commentradio1ref.current.checked;
        const commentradio2 = commentradio2ref.current.checked;

        const status = commentradio1 ? "active" : commentradio2 ? "inactive" : "inactive";

        const res = await createData(commentuser,commentuserbn,commentid,commentdesignation,commentdesignationbn,commentbody,commentbodybn,commenticon,status);
        

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
                <input ref={commentuserref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentusername' placeholder='Enter Who Commented this'></input>
            </div>
            <div className="input-type">
                <input ref={commentuserbnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentusernamebn' placeholder='কে কমেন্ট করেছে বাংলায় লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={commentdesignationref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentdesignation' placeholder='Enter Designation of commenter'></input>
            </div>
            <div className="input-type">
                <input ref={commentdesignationbnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentdesignationbn' placeholder='কমেন্টকারীর পদবি লিখুন বাংলায়'></input>
            </div>
            <div className="input-type">
                <input ref={commenticonref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentIcon' placeholder='Enter comment Icon'></input>
            </div>
            <div className="input-type">
                <input ref={commentidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentid' placeholder='Enter comment ID'></input>
            </div>
    
            <div className="input-type">
            <textarea ref={commentbodyref} id="comment" name="comment" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter Comment here'></textarea>
            </div>
            <div className="input-type">
            <textarea ref={commentbodybnref} id="commentbn" name="commentbn" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='বাংলায় কমেন্ট লিখুন'></textarea>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={commentradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={commentradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewCommentForm;