import { useEffect, useState } from "react";

const CountDownFnc = (props) => {

    // let {timeOut} = props
    const [count, setCount] = useState(30);

    useEffect(() =>{
        if(count === 0) {
            // timeOut();
            return;
        }


       let timer = setInterval(()=>{
        setCount(count - 1)
       },1000)

       return () => {
        clearInterval(timer);
       }
    }, [count])
    return (
        <>

            <h2>Count Down Number</h2>
            <h2>{count}</h2>
        </>
    )
}

export default CountDownFnc;