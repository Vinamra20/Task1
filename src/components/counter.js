import React, { useEffect, useState } from 'react'

const Counter = () =>{
    const [string, setstring] = useState("")
    const [count, setcount] = useState(0);
    const wordcount = () => {
        let words = string;
        if( words === ""){
            console.log("Nothing")
        }
        else{
            let t = words.split(" ");
            console.log(t.length);
            setcount(t.length);
        }
    }
    useEffect(()=>{
        wordcount();
    })
    return(
        <>
            <div> <h1>Response Paragraph Word Counter. </h1> </div>
            <div>
                <form>
                    <div className="mb-3">
                    <label>Enter your text: 
                        <input 
                        type="text" 
                        value={string}
                        onChange={(e) => setstring(e.target.value)}
                        />
                    </label>
                    </div>
                </form>
                <div>
                    <p>Total No. of words are - {count}</p> 
                </div>
            </div>
        </>
    )
}

export default Counter;