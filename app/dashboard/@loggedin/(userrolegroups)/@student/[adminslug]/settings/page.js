"use client";

import { useSelector } from "react-redux";



function BookPage() {
    const data = useSelector((state) => state.isAdmin.value);
    if(data){
        return ( 
            <div>{JSON.stringify(data)}</div>
         );
    }
   
}

export default BookPage;