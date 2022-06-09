import  React, {useMemo, useCallback} from 'react'; 

export default function UseCallbackMemo(){

    const callbackExample = useCallback(
        () =>{
            console.log("Chamada do callback")
        },[]
        
    )

    const memExample = useMemo(
        ()=> {
            console.log("Chamada do Memo")
        },[]
    )

    return (
        <div>
            <button
                onClick={()=> callbackExample()}
            >
                Executar o callback
            </button>
        </div>
    )
}