'use client';
import React from 'react';
import { useRef } from 'react';
import { BiBrush } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {updateData} from "@/apiservices/postapiservices";
import { useState, useEffect } from 'react';



function updatePostForm(props) {

    const [post, setPost] = useState({
        postImageLink: props.payload.postImageLink,
        postId : props.payload.postId,
        postTitleen : props.payload.postTitle.en,
        postTitlebn : props.payload.postTitle.bn,
        postDescriptionen : props.payload.postDescription.en,
        postDescriptionbn : props.payload.postDescription.bn,
        postCategoryen: props.payload.postCategory.en,
        postCategorybn: props.payload.postCategory.bn,
        postPopularityen: props.payload.postPopularity.en,
        postPopularitybn: props.payload.postPopularity.bn,
        postUser: props.payload.postUser,
        activeStatus: props.payload.activeStatus

    });

    useEffect(()=>{
        setPost({
            postImageLink: props.payload.postImageLink,
            postId : props.payload.postId,
            postTitleen : props.payload.postTitle.en,
            postTitlebn : props.payload.postTitle.bn,
            postDescriptionen : props.payload.postDescription.en,
            postDescriptionbn : props.payload.postDescription.bn,
            postCategoryen: props.payload.postCategory.en,
            postCategorybn: props.payload.postCategory.bn,
            postPopularityen: props.payload.postPopularity.en,
            postPopularitybn: props.payload.postPopularity.bn,
            postUser: props.payload.postUser,
            activeStatus: props.payload.activeStatus
        })
    },[props.payload.postUser,props.payload.postImageLink,props.payload.postId,props.payload.postTitle.en,props.payload.postTitle.bn,props.payload.postDescription.en,props.payload.postDescription.bn,props.payload.postCategory.en,props.payload.postCategory.bn,props.payload.postPopularity.en,props.payload.postPopularity.bn,props.payload.postUser,props.payload.activeStatus]);
    
   


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

    const clickHandler =async (e)=>{
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
        const idValue = props.data;
        

        const res = await updateData(postuser,postimagelink,postid,posttitle,posttitlebn,postdescription,postdescriptionbn,postcategory,postcategorybn,postpopularity,postpopularitybn,status,idValue);

        if(res){
            props.statechanger();
            myToast.success("Data was Updated successfully");
        }else{
            myToast.warning("something went wrong");
        }


    }
    const onChangeHandler1 = (e) =>{
        setPost({
            postUser: e.target.value
        });
    }
    const onChangeHandler2 = (e) =>{
        setPost({
            postImageLink: e.target.value
        });
    }
    const onChangeHandler3 = (e) =>{
        setPost({
            postId: e.target.value
        });
    }
    const onChangeHandler4 = (e) =>{
        setPost({
            postTitleen: e.target.value
        });
    }
    const onChangeHandler5 = (e) =>{
        setPost({
            postTitlebn: e.target.value
        });
    }
    const onChangeHandler6 = (e) =>{
        setPost({
            postDescriptionen: e.target.value
        });
    }
    const onChangeHandler7 = (e) =>{
        setPost({
            postDescriptionbn: e.target.value
        });
    }
    const onChangeHandler8 = (e) =>{
        setPost({
            postCategoryen: e.target.value
        });
    }
    const onChangeHandler9 = (e) =>{
        setPost({
            postCategorybn: e.target.value
        });
    }
    const onChangeHandler10 = (e) =>{
        setPost({
            postPopularityen: e.target.value
        });
    }
    const onChangeHandler11 = (e) =>{
        setPost({
            postPopularitybn: e.target.value
        });
    }


    return (
        <form className='grid lg:grid-cols-3 w-full gap-5'>
            <div className="input-type">
                <input onChange={onChangeHandler4} ref={posttitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='posttitle' placeholder='Enter Post title' value={post.postTitleen}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler5} ref={posttitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='posttitlebn' placeholder='বাংলায় পোস্ট টাইটেল' value={post.postTitlebn}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler1} ref={postuserref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postuser' placeholder='Enter post user' value={post.postUser}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler2} ref={postimagelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postimagelink' placeholder='Enter post image link' value={post.postImageLink}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler3} ref={postidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postid' placeholder='Enter post ID' value={post.postId}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler8} ref={postcategoryref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postcategory' placeholder='Enter post category' value={post.postCategoryen}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler9} ref={postcategorybnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postcategorybn' placeholder='পোস্ট ক্যাটাগরি লিখুন বাংলায়' value={post.postCategorybn}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler10} ref={postpopularityref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postpopularity' placeholder='Enter post popularity' value={post.postPopularityen}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler11} ref={postpopularitybnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='postpopularitybn' placeholder='জনপ্রিয়তার ধরণ লিখুন' value={post.postPopularitybn}></input>
            </div>
            <div className="input-type">
            <textarea onChange={onChangeHandler6} ref={postdescriptionref} id="postdescription" name="postdescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter post Description' value={post.postDescriptionen}></textarea>
            </div>
            <div className="input-type">
            <textarea onChange={onChangeHandler7} ref={postdescriptionbnref} id="postdescriptionbn" name="postdescriptionbn" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='পোস্টের বিবরণ লিখুন বাংলায়' value={post.postDescriptionbn}></textarea>
            </div>
            <div className='flex gap-10 items-center'>
            {
                    props.payload.activeStatus == "active"
                        ?
                        <div className='form-check'>
                            <input ref={postradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={postradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>

                }

                {
                    props.payload.activeStatus == "inactive"
                        ?
                        <div className='form-check'>
                            <input ref={postradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                                Inactive
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={postradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
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

export default updatePostForm;