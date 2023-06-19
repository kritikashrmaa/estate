import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

export default function List({text,route}) {

    const location=useLocation();
    const navigate=useNavigate();

    function pathMathRoute(r){
        
      if(r === location.pathname)
         return true;
    }  

    
  return (
    <>
       <li className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute(route) && "text-black border-b-red-500"} `} 
            onClick={()=>navigate(route)} >
        {text}
       </li>
    </>
  )
}
