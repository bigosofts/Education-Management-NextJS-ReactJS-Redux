'use client';
import React from 'react';
import { useRef } from 'react';
import { BiBrush } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {updateData} from "@/apiservices/commentapiservice";
import { useState, useEffect } from 'react';



function UpdateCommentForm(props) {

    const [comment, setComment] = useState({
        commentid: props.payload.commentId,
        commentuser: props.payload.userName.en,
        commentuserbn: props.payload.userName.bn,
        commentdesignation: props.payload.designation.en,
        commentdesignationbn: props.payload.designation.bn,
        commentbody: props.payload.comment.en,
        commentbodybn: props.payload.comment.bn,
        commenticon: props.payload.commentIcon,
        activeStatus: props.payload.activeStatus,

    });

    useEffect(()=>{
        setComment({
            commentid: props.payload.commentId,
            commentuser: props.payload.userName.en,
            commentuserbn: props.payload.userName.bn,
            commentdesignation: props.payload.designation.en,
            commentdesignationbn: props.payload.designation.bn,
            commentbody: props.payload.comment.en,
            commentbodybn: props.payload.comment.bn,
            commenticon: props.payload.commentIcon,
            activeStatus: props.payload.activeStatus,
        })
    },[props.payload.commentId,props.payload.userName.en,props.payload.userName.bn,props.payload.designation.en,props.payload.designation.bn,props.payload.comment.en,props.payload.comment.bn,props.payload.commentIcon, props.payload.activeStatus]);


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

    const clickHandler = async (e) => {
        e.preventDefault();
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

        const idValue = props.data;

        const res = await updateData(commentuser,commentuserbn,commentid,commentdesignation,commentdesignationbn,commentbody,commentbodybn,commenticon,status,idValue);

        if(res){
            props.statechanger();
            myToast.success("Data was Updated successfully");
        }else{
            myToast.warning("something went wrong");
        }

    }
    const onChangeHandler1 = (e) =>{
        setComment({
            commentuser: e.target.value
        });
    }
    const onChangeHandler2 = (e) =>{
        setComment({
            commentuserbn: e.target.value
        });
    }
    const onChangeHandler3 = (e) =>{
        setComment({
            commentdesignation: e.target.value
        });
    }
    const onChangeHandler4 = (e) =>{
        setComment({
            commentdesignationbn: e.target.value
        });
    }
    const onChangeHandler5 = (e) =>{
        setComment({
            commenticon: e.target.value
        });
    }
    const onChangeHandler6 = (e) =>{
        setComment({
            commentid: e.target.value
        });
    }
    const onChangeHandler7 = (e) =>{
        setComment({
            commentbody: e.target.value
        });
    }
    const onChangeHandler8 = (e) =>{
        setComment({
            commentbodybn: e.target.value
        });
    }
    


    return (
        <form className='grid lg:grid-cols-3 w-full gap-5'>
            <div className="input-type">
                <input onChange={onChangeHandler1} ref={commentuserref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentusername' placeholder='Enter Who Commented this' value={comment.commentuser}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler2} ref={commentuserbnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentusernamebn' placeholder='কে কমেন্ট করেছে বাংলায় লিখুন' value={comment.commentuserbn}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler3} ref={commentdesignationref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentdesignation' placeholder='Enter Designation of commenter' value={comment.commentdesignation}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler4} ref={commentdesignationbnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentdesignationbn' placeholder='কমেন্টকারীর পদবি লিখুন বাংলায়' value={comment.commentdesignationbn}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler5} ref={commenticonref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentIcon' placeholder='Enter comment Icon' value={comment.commenticon}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler6} ref={commentidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='commentid' placeholder='Enter comment ID' value={comment.commentid}></input>
            </div>
    
            <div className="input-type">
            <textarea onChange={onChangeHandler7} ref={commentbodyref} id="comment" name="comment" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter Comment here' value={comment.commentbody}></textarea>
            </div>
            <div className="input-type">
            <textarea onChange={onChangeHandler8} ref={commentbodybnref} id="commentbn" name="commentbn" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='বাংলায় কমেন্ট লিখুন' value={comment.commentbodybn}></textarea>
            </div>
            <div className='flex gap-10 items-center'>

                {
                    props.payload.activeStatus == "active"
                    ?
                    <div className='form-check'>
                        <input ref={commentradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                        <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                            Active
                        </label>
                    </div>
                    :
                    <div className='form-check'>
                        <input ref={commentradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                        <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                            Active
                        </label>
                    </div>
                }

                {
                    props.payload.activeStatus == "inactive"
                    ?
                    <div className='form-check'>
                        <input ref={commentradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                        <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                            Inactive
                        </label>
                    </div>
                    :
                    <div className='form-check'>
                        <input ref={commentradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                        <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                            Inactive
                        </label>
                    </div>
                }
  
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>
                Update Data <span className='px-1'><BiBrush size={23}/></span>
            </button>

        </form>
    );
}


export default UpdateCommentForm;