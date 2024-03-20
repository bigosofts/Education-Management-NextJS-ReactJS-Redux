'use client';
import React from 'react';
import { useRef } from 'react';
import { BiBrush } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {updateData} from "@/apiservices/eventapiservices";
import { useState, useEffect } from 'react';



function updateEventForm(props) {

    const [inputType, setInputType] = useState('text');
    const handleFocus = () => {
        setInputType('date');
      };
    
      const handleBlur = () => {
        setInputType('text');
      };

    const [event, setEvent] = useState({
        eventTitleen: props.payload.eventTitle.en,
        eventTitlebn : props.payload.eventTitle.bn,
        eventImageLink : props.payload.eventImageLink,
        eventId: props.payload.eventId,
        eventUpcomingDateen: props.payload.eventUpcomingDate.en,
        eventUpcomingDatebn : props.payload.eventUpcomingDate.bn,
        eventIcon: props.payload.eventIcon,
        eventLink: props.payload.eventLink,
        activeStatus: props.payload.activeStatus


    });

    useEffect(()=>{
        setEvent({
            eventTitleen: props.payload.eventTitle.en,
            eventTitlebn : props.payload.eventTitle.bn,
            eventImageLink : props.payload.eventImageLink,
            eventId: props.payload.eventId,
            eventUpcomingDateen: props.payload.eventUpcomingDate.en,
            eventUpcomingDatebn : props.payload.eventUpcomingDate.bn,
            eventIcon: props.payload.eventIcon,
            eventLink: props.payload.eventLink,
            activeStatus: props.payload.activeStatus
        })
    },[props.payload.eventTitle.en,props.payload.eventTitle.bn,props.payload.eventImageLink,props.payload.eventId,props.payload.eventUpcomingDate.en,props.payload.eventUpcomingDate.bn,props.payload.eventIcon,props.payload.eventLink,props.payload.activeStatus]);
    
   


    const eventtitleref = useRef();
    const eventtitlebnref = useRef();
    const eventlinkref = useRef();
    const eventimagelinkref = useRef();
    const eventiconref = useRef();
    const eventidref = useRef();
    const eventupcomingdateref = useRef();
    const eventupcomingdatebnref = useRef();
    const eventradio1ref = useRef();
    const eventradio2ref = useRef();

    const clickHandler =async (e)=>{
        e.preventDefault();
        const eventtitle = eventtitleref.current.value;
        const eventtitlebn = eventtitlebnref.current.value;
        const eventlink = eventlinkref.current.value;
        const eventimagelink = eventimagelinkref.current.value;
        const eventicon = eventiconref.current.value;
        const eventid = eventidref.current.value;
        const eventupcomingdate = eventupcomingdateref.current.value;
        const eventupcomingdatebn = eventupcomingdatebnref.current.value;
        const eventradio1 = eventradio1ref.current.checked;
        const eventradio2 = eventradio2ref.current.checked;
        const status = eventradio1 ? "active" : eventradio2 ? "inactive" : "inactive";
        const idValue = props.data;
        

        const res = await updateData(eventtitle,eventtitlebn,eventid,eventupcomingdate,eventupcomingdatebn,eventicon,eventlink,eventimagelink,status,idValue);

        if(res){
            props.statechanger();
            myToast.success("Data was Updated successfully");
        }else{
            myToast.warning("something went wrong");
        }


    }
    const onChangeHandler1 = (e) =>{
        setEvent({
            eventTitleen: e.target.value
        });
    }
    const onChangeHandler2 = (e) =>{
        setEvent({
            eventTitlebn: e.target.value
        });
    }
    const onChangeHandler3 = (e) =>{
        setEvent({
            eventLink: e.target.value
        });
    }
    const onChangeHandler4 = (e) =>{
        setEvent({
            eventImageLink: e.target.value
        });
    }
    const onChangeHandler5 = (e) =>{
        setEvent({
            eventIcon: e.target.value
        });
    }
    const onChangeHandler6 = (e) =>{
        setEvent({
            eventId: e.target.value
        });
    }
    const onChangeHandler7 = (e) =>{
        setEvent({
            eventUpcomingDateen: e.target.value
        });
    }
    const onChangeHandler8 = (e) =>{
        setEvent({
            eventUpcomingDatebn: e.target.value
        });
    }


    return (
        <form className='grid lg:grid-cols-3 w-full gap-5'>
            <div className="input-type">
                <input onChange={onChangeHandler1} ref={eventtitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventtitle' placeholder='Enter Event title' value={event.eventTitleen}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler2} ref={eventtitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventtitlebn' placeholder='ইভেন্ট টাইটেল বাংলায় লিখুন' value={event.eventTitlebn}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler3} ref={eventlinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventlink' placeholder='Enter Event Link Here' value={event.eventLink}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler4} ref={eventimagelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventimagelink' placeholder='Enter event image link' value={event.eventImageLink}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler5} ref={eventiconref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventicon' placeholder='Enter Event Icon' value={event.eventIcon}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler6} ref={eventidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventid' placeholder='Enter Event ID' value={event.eventId}></input>
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler7} ref={eventupcomingdateref} placeholder="Enter Event upcoming Date" className="border w-full px-5 py-3 focus:outline-none" type={inputType} onFocus={handleFocus} onBlur={handleBlur} name="eventupcomingdate" value={event.eventUpcomingDateen} />
            </div>
            <div className="input-type">
                <input onChange={onChangeHandler8} ref={eventupcomingdatebnref} className="border w-full px-5 py-3 focus:outline-none rounded-md" type='text' name='eventupcomindatebn' placeholder='ইভেন্টের আসন্ন তারিখ লিখুন' value={event.eventUpcomingDatebn}></input>
            </div>
            <div className='flex gap-10 items-center'>


                {
                    props.payload.activeStatus == "active"
                        ?
                        <div className='form-check'>
                            <input ref={eventradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={eventradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                            <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                                Active
                            </label>
                        </div>

                }
                {
                    props.payload.activeStatus == "inactive"
                        ?
                        <div className='form-check'>
                            <input ref={eventradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' checked/>
                            <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                                Inactive
                            </label>
                        </div>
                        :
                        <div className='form-check'>
                            <input ref={eventradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
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

export default updateEventForm;