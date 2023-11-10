"use client";
import React from 'react';
import {BiEdit, BiTrashAlt} from "react-icons/bi";
import {selectData, deleteData} from "@/apiservices/menuapiservices";
import { useEffect, useState } from 'react';
import myToast from '@/components/toast/toast';

function MenuCard(props) {

    const[data, setData] = useState();

    useEffect(()=>{
        async function fetchData(){
            const payload = await selectData(null,null);
            setData(payload);
            
        }
        fetchData();
       
        

    },[]);

    const updateHandler = props.updateHandler;

    const deleteHandler =(id) =>{
        deleteData(id);
        myToast.danger(`item ${id} is deleted`);
        const updatedData = data.data.filter(item => item._id !== id);
        const constructeddata = {
            status: "Alhamdulillah",
            data: updatedData
        }
        setData(constructeddata);
    }
    if(props.fromupdateform){
        return (
            <div className='container mx-auto mt-10'>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-5 gap-y-20'>

                    {props.fromupdateform.data.map((item, i)=>(
                        <div key={i} className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                        
                        <a href="#">
                            <img className="rounded-t-lg w-full h-64" src="/images/3.png" alt="" />
                        </a>
                        <div className='flex justify-between absolute top-2 right-2 gap-5'>

                            { 
                            item.activeStatus == "active" ?
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
                            :
                            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Inactive</span>
                            }

                            
                            
                        </div>
                        
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.menuTitle.en}</h5>
                            </a>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.menuTitle.bn}</h5>
                            </a>
                            <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md relative"> Menu icon: {item.menuIcon}<i style={{fontSize:24+"px"}} className={`${item.menuIcon} absolute right-1`}></i></p>

                            <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md"> Menu Link: {item.menuLink}</p>
                            <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md"> Menu Type: {item.menuType}</p>


                            <div className='flex justify-end gap-2'>
                                <button onClick={()=>updateHandler(item._id,props.fromupdateform)} className='w-2 px-5 py-5 allColorFont'><BiEdit size={24}/> </button>
                                <button onClick={()=>props.deleteHandler(item._id)} className='w-2 px-5 py-5 text-red-400'> <BiTrashAlt size={24}/> </button>
                            </div>
                            
                        </div>
                        </div>
                    ))}
                    
                    
                


                </div>
            </div>
        );
    }else if(data){
        return (
            <div className='container mx-auto mt-10'>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-5 gap-y-20'>
                    {data.data.map((item,i)=>(
                        <div key={i} className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                        
                        <a href="#">
                            <img className="rounded-t-lg w-full h-64" src="/images/3.png" alt="" />
                        </a>
                        <div className='flex justify-between absolute top-2 right-2 gap-5'>

                            { 
                            item.activeStatus == "active" ?
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
                            :
                            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Inactive</span>
                            }

                            
                            
                        </div>
                        
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.menuTitle.en}</h5>
                            </a>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.menuTitle.bn}</h5>
                            </a>
                            <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md relative"> Menu icon: {item.menuIcon}<i style={{fontSize:24+"px"}} className={`${item.menuIcon} absolute right-1`}></i></p>

                            <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md"> Menu Link: {item.menuLink}</p>
                            <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md"> Menu Type: {item.menuType}</p>


                            <div className='flex justify-end gap-2'>
                                    <button onClick={()=>updateHandler(item._id,data)} className='w-2 px-5 py-5 allColorFont'><BiEdit size={24}/> </button>
                                    <button onClick={()=>(deleteHandler(item._id))} className='w-2 px-5 py-5 text-red-400'> <BiTrashAlt size={24}/> </button>
                            </div>
                            
                        </div>
                        </div>
                    ))}
                
                </div>
            </div>
        );
    }else{
        return <div>Loading....</div>
    }
}

export default MenuCard;