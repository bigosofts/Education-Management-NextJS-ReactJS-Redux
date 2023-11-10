'use client';
import React from 'react';
import { useRef,useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import myToast from "@/components/toast/toast";
import {createData} from "@/apiservices/eventapiservices";


function NewEventForm(props) {


    const [inputType, setInputType] = useState('text');
    const handleFocus = () => {
        setInputType('date');
      };
    
      const handleBlur = () => {
        setInputType('text');
      };


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
  
      const clickHandler = async (e)=>{
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

          const res = await createData(eventtitle,eventtitlebn,eventid,eventupcomingdate,eventupcomingdatebn,eventicon,eventlink,eventimagelink,status)
          
          if(res){
            console.log(res);
            props.statechanger();
            myToast.success("Data was created successfully");
          }else{
            myToast.warning("something went wrong");
          }
  
  
      }


      return (
        <form className='grid lg:grid-cols-3 w-full gap-5'>
            <div className="input-type">
                <input ref={eventtitleref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventtitle' placeholder='Enter Event title'></input>
            </div>
            <div className="input-type">
                <input ref={eventtitlebnref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventtitlebn' placeholder='ইভেন্ট টাইটেল বাংলায় লিখুন'></input>
            </div>
            <div className="input-type">
                <input ref={eventlinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventlink' placeholder='Enter Event Link Here'></input>
            </div>
            <div className="input-type">
                <input ref={eventimagelinkref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventimagelink' placeholder='Enter event image link'></input>
            </div>
            <div className="input-type">
                <input ref={eventiconref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventicon' placeholder='Enter Event Icon'></input>
            </div>
            <div className="input-type">
                <input ref={eventidref} className="border w-full px-5 py-3 focus:outline-none" type='text' name='eventid' placeholder='Enter Event ID'></input>
            </div>
            <div className="input-type">
                <input ref={eventupcomingdateref} placeholder="Enter Event upcoming Date" className="border w-full px-5 py-3 focus:outline-none" type={inputType} onFocus={handleFocus} onBlur={handleBlur} name="eventupcomingdate" />
            </div>
            <div className="input-type">
                <input ref={eventupcomingdatebnref} className="border w-full px-5 py-3 focus:outline-none rounded-md" type='text' name='eventupcomindatebn' placeholder='ইভেন্টের আসন্ন তারিখ লিখুন'></input>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input ref={eventradio1ref} type="radio" value="Active" id="radioDefault1" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault1' className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className='form-check'>
                    <input ref={eventradio2ref} type="radio" value="Inactive" id="radioDefault2" name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
                    <label htmlFor='radioDefault2' className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button onClick={clickHandler} className='flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add Data <span className='px-1'><BiPlus size={23}/></span></button>

        </form>
    );
}

export default NewEventForm;