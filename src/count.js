import { useEffect, useState } from "react";
import Display from "./Display";

const Count=()=>{
    const endTime= new Date('february 16,2024 00:00:00').getTime();
    const [currentTime,setcurrentTime]=useState(new Date().getTime());
    const gap = endTime-currentTime;

    const seconds=1000;
    const minutes =seconds*60;
    const hours = minutes*60;
    const days = hours*24;

    const rDays=Math.floor(gap/days);
    const rhours=Math.floor((gap%days)/hours);
    const rmin=Math.floor((gap%hours)/minutes);
    const rseconds=Math.floor((gap%minutes)/seconds);
   

    useEffect(()=>{
        setTimeout(()=>setcurrentTime(new Date().getTime()),1000)},[currentTime])

        return(
            <div className="Countbox">
           
            <Display days={rDays}
            hours={rhours} minutes={rmin}
            seconds={rseconds}/>

            
            
            </div>
        )
}

export default Count