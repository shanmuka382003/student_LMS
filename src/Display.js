import React from "react";



const Display = ({days,hours,minutes,seconds})=>{
    return(
        <div>
             <h3>Ends In - {days} Days:{hours} hrs:{minutes} min:{seconds}</h3>
        </div>
    )


}

export default Display;