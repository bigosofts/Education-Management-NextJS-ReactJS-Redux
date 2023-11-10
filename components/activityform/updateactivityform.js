'use client';
import React from 'react';
import { useRef } from 'react';
import { BiBrush } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {updateData} from "@/apiservices/activityapiservices";
import { useState, useEffect } from 'react';



function updateActivityForm(props) {

    const [activity, setactivity] = useState({
        activityId: props.payload.activityId,
        activityImageLink : props.payload.activityImageLink,
        activityTitle : props.payload.activityTitle.en,
        activityTitlebn : props.payload.activityTitle.bn,
        activityDescription : props.payload.activityDescription.en,
        activityDescriptionbn : props.payload.activityDescription.bn,
        activityIcon: props.payload.activityIcon,
        activeStatus: props.payload.activeStatus


    });

    useEffect(()=>{
        setactivity({
            activityId: props.payload.activityId,
            activityImageLink : props.payload.activityImageLink,
            activityTitle : props.payload.activityTitle.en,
            activityTitlebn : props.payload.activityTitle.bn,
            activityDescription : props.payload.activityDescription.en,
            activityDescriptionbn : props.payload.activityDescription.bn,
            activityIcon: props.payload.activityIcon,
            activeStatus: props.payload.activeStatus
        })
    },[props.payload.activityId,props.payload.activityImageLink,props.payload.activityTitle.en,props.payload.activityTitle.bn,props.payload.activityDescription.en,props.payload.activityDescription.bn,props.payload.activityIcon,props.payload.activeStatus]);
    
   


    const activitytitleref = useRef();
    const activitytitlebnref = useRef();
    const activityidref = useRef();
    const activityimagelinkref = useRef();
    const activityiconref = useRef();
    const activitydescriptionref = useRef();
    const activitydescriptionbnref = useRef();
    const activityradio1ref = useRef();
    const activityradio2ref = useRef();

    const clickHandler =async (e)=>{
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
        const idValue = props.data;
        

        const res = await updateData(activityid,activityimagelink,activityttle,activitytitlebn,activitydescription,activitydescriptionbn,activityicon,status,idValue);

        if(res){
            props.statechanger();
            myToast.success("Data was Updated successfully");
        }else{
            myToast.warning("something went wrong");
        }


    }
    const onChangeHandler1 = (e) =>{
        setactivity({
            activityTitle: e.target.value
        });
    }
    const onChangeHandler2 = (e) =>{
        setactivity({
            activityTitlebn: e.target.value
        });
    }
    const onChangeHandler3 = (e) =>{
        setactivity({
            activityId: e.target.value
        });
    }
    const onChangeHandler4 = (e) =>{
        setactivity({
            activityImageLink: e.target.value
        });
    }
    const onChangeHandler5 = (e) =>{
        setactivity({
            activityIcon: e.target.value
        });
    }
    const onChangeHandler6 = (e) =>{
        setactivity({
            activityDescription: e.target.value
        });
    }
    const onChangeHandler7 = (e) =>{
        setactivity({
            activityDescriptionbn: e.target.value
        });
    }


    return (
        <form className='grid lg:grid-cols-3 w-full gap-5'>
            <div className="input-type">
                <input ref={activitytitleref} onChange={onChangeHandler1} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activitytitle' placeholder='Enter activity title' value={activity.activityTitle}></input>
            </div>
            <div className="input-type">
                <input ref={activitytitlebnref} onChange={onChangeHandler2} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activitytitlebn' placeholder='এক্টিভিটি টাইটেল বাংলায়' value={activity.activityTitlebn}></input>
            </div>
            <div className="input-type">
                <input ref={activityidref} onChange={onChangeHandler3} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activityid' placeholder='Enter Activity ID' value={activity.activityId}></input>
            </div>
            <div className="input-type">
                <input ref={activityimagelinkref} onChange={onChangeHandler4} className="border w-full px-5 py-3 focus:outline-none" type='text' name='imagelink' placeholder='Enter image link' value={activity.activityImageLink}></input>
            </div>
            <div className="input-type">
                <input ref={activityiconref} onChange={onChangeHandler5} className="border w-full px-5 py-3 focus:outline-none" type='text' name='activityicon' placeholder='Enter activity icon' value={activity.activityIcon}></input>
            </div>
            <div className="input-type">
                <textarea ref={activitydescriptionref} onChange={onChangeHandler6} id="activitydescription" name="activitydescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='Enter Activity Description' value={activity.activityDescription}></textarea>
            </div>
            <div className="input-type">
                <textarea ref={activitydescriptionbnref} onChange={onChangeHandler7} id="activitydescription" name="activitydescription" rows="1" className="border w-full px-5 py-3 focus:outline-none" placeholder='এক্টিভিটির বর্নণা লিখুন বাংলায়' value={activity.activityDescriptionbn}></textarea>
            </div>
            <div className='flex gap-10 items-center'>
                {
                    props.payload.activeStatus == "active"
                        ?
                        <div className='form-check'>
                            <input ref={activityradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={activityradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>

                }

                {
                    props.payload.activeStatus == "inactive"
                        ?
                        <div className='form-check'>
                            <input ref={activityradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                                Inactive
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={activityradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
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

export default updateActivityForm;