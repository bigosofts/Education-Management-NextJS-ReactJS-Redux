'use client';
import React from 'react';
import { useRef } from 'react';
import { BiBrush } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {updateData} from "@/apiservices/noticeapiservices";
import { useState, useEffect } from 'react';



function updateNoticeForm(props) {

    const [notice, setNotice] = useState({
        noticeId: props.payload.noticeId,
        noticeTitleen : props.payload.noticeTitle.en,
        noticeTitlebn : props.payload.noticeTitle.bn,
        noticeIcon : props.payload.noticeIcon,
        noticeLink : props.payload.noticeLink,
        activeStatus: props.payload.activeStatus


    });

    useEffect(()=>{
        setNotice({
            noticeId: props.payload.noticeId,
            noticeTitleen : props.payload.noticeTitle.en,
            noticeTitlebn : props.payload.noticeTitle.bn,
            noticeIcon : props.payload.noticeIcon,
            noticeLink : props.payload.noticeLink,
            activeStatus: props.payload.activeStatus
        })
    },[props.payload.noticeId,props.payload.noticeTitle.en,props.payload.noticeTitle.bn,props.payload.noticeIcon,props.payload.noticeLink,props.payload.activeStatus]);
    
   


    const noticetitleref = useRef();
    const noticetitlebnref = useRef();
    const noticeiconref = useRef();
    const noticelinkref = useRef();
    const noticeidref = useRef();
    const noticeradio1ref = useRef();
    const noticeradio2ref = useRef();

    const clickHandler =async (e)=>{
        e.preventDefault();
        const noticetitle = noticetitleref.current.value;
        const noticetitlebn = noticetitlebnref.current.value;
        const noticeicon = noticeiconref.current.value;
        const noticelink = noticelinkref.current.value;
        const noticeid = noticeidref.current.value;
        const noticeradio1 = noticeradio1ref.current.checked;
        const noticeradio2 = noticeradio2ref.current.checked;
        const status = noticeradio1 ? "active" : noticeradio2 ? "inactive" : "inactive";
        const idValue = props.data;
        

        const res = await updateData(noticeid,noticetitle,noticetitlebn,noticeicon,noticelink,status,idValue);

        if(res){
            props.statechanger();
            myToast.success("Data was Updated successfully");
        }else{
            myToast.warning("something went wrong");
        }


    }
    const onChangeHandler1 = (e) =>{
        setNotice({
            noticeTitleen: e.target.value
        });
    }
    const onChangeHandler2 = (e) =>{
        setNotice({
            noticeTitlebn: e.target.value
        });
    }
    const onChangeHandler3 = (e) =>{
        setNotice({
            noticeIcon: e.target.value
        });
    }
    const onChangeHandler4 = (e) =>{
        setNotice({
            noticeLink: e.target.value
        });
    }
    const onChangeHandler5 = (e) =>{
        setNotice({
            noticeId: e.target.value
        });
    }
    


    return (
        <form className='grid lg:grid-cols-3 w-full gap-5'>
        <div className="input-type">
            <input onChange={onChangeHandler1} ref={noticetitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='noticetitle' placeholder='Enter Notice title' value={notice.noticeTitleen}></input>
        </div>
        <div className="input-type">
            <input onChange={onChangeHandler2} ref={noticetitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='noticetitlebn' placeholder='বাংলায় নোটিশ টাইটেল' value={notice.noticeTitlebn}></input>
        </div>
        <div className="input-type">
            <input onChange={onChangeHandler3} ref={noticeiconref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='noticeicon' placeholder='Enter notice icon' value={notice.noticeIcon}></input>
        </div>
        <div className="input-type">
            <input onChange={onChangeHandler4} ref={noticelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='noticelink' placeholder='Enter notice link' value={notice.noticeLink}></input>
        </div>
        <div className="input-type">
            <input onChange={onChangeHandler5} ref={noticeidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='notceid' placeholder='Enter notice id' value={notice.noticeId}></input>
        </div>
        <div className='flex gap-10 items-center'>
        {
                    props.payload.activeStatus == "active"
                        ?
                        <div className='form-check'>
                            <input ref={noticeradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={noticeradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>

                }

                {
                    props.payload.activeStatus == "inactive"
                        ?
                        <div className='form-check'>
                            <input ref={noticeradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                                Inactive
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={noticeradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
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

export default updateNoticeForm;