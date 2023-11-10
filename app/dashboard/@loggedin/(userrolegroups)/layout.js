"use client";
import { useState, useEffect } from 'react';
import {isAdmin} from "@/apiservices/checklogin";




import React from 'react';

import { useRouter } from 'next/navigation';

function layout({admin, student, teacher}) {
    const router =useRouter();
   
    const[data, setData] = useState();
    
    useEffect(()=>{
        async function fetchData(){
            const payload = await isAdmin();
            setData(payload);
        }
        fetchData();
        
            
    },[]);

    if(data){
        
        if(data.data.isAdmin == true){
            return (
                <>
                {admin}
                </>
            );
        }else if(data.data.userRole
            == "teacher"){
            return (
                <>
                {teacher}
                </>
            );
        }else if(data.data.userRole
            == "student"){
            return (
                <>
                {student}
                </>
            );
        }
    }



    
}

export default layout;