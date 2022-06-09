import React, {useEffect, useState} from "react";

export default function UseEffectFunction (){

    const [clicks, setClicks] = useState(0)

    useEffect(
        ()=>{
            document.title = `cliques: ${clicks}`
        }
    )

    return(
        <div>
               <h3>UseEffect em função</h3>
               <p>Clicks: {clicks}</p>
               <button
                    onClick={
                        ()=>setClicks(clicks + 1)
                    }
               >
                   clique aqui
               </button>
            </div>
    )
}