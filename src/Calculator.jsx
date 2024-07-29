import React, { useState } from 'react'

function Calculator() {
    const [data, setData] = useState('')
    const handleclick = (input) => {
        setData(data + input)
    }
    const calculate = () => {
        try {
            let result = data;
            result = eval (data)
            setData(result)

            
        } catch (error) {
            setData(error)
        }
      
     
    }
  return (
    <>
    <div>
        <input type='text' placeholder='0' value={data}/>
    </div>
    <div>
        <input type='button' value="AC" onClick={() => setData('')}/>
        <input type='button' value="DE" onClick={() => setData(data.slice(0,-1))}/>
        <input type='button' value="/" onClick={() => handleclick("/")}/>
        <input type='button' value="*" onClick={() => handleclick("*")}/>
    </div>
    <div>
        <input type='button' value="7" onClick={() => handleclick("7")}/>
        <input type='button' value="8" onClick={() => handleclick("8")}/>
        <input type='button' value="9" onClick={() => handleclick("9")}/>
        <input type='button' value="+" onClick={() => handleclick("+")}/>
    </div>
    <div>
        <input type='button' value="4" onClick={() => handleclick("4")}/>
        <input type='button' value="5" onClick={() => handleclick("5")}/>
        <input type='button' value="6" onClick={() => handleclick("6")}/>
        <input type='button' value="-" onClick={() => handleclick("-")}/>
    </div>
    <div>
        <input type='button' value="1" onClick={() => handleclick("1")}/>
        <input type='button' value="2" onClick={() => handleclick("2")}/>
        <input type='button' value="3" onClick={() => handleclick("3")}/>
        <input type='button' value="%" onClick={() => handleclick("%")}/>
    </div>
    <div>
        <input type='button' value="0" onClick={() => handleclick("0")}/>
        <input type='button' value="00" onClick={() => handleclick("00")}/>
        <input type='button' value="." onClick={() => handleclick(".")}/>
        <input type='button' value="=" onClick={calculate}/>
    </div>
    </>
  )
}

export default Calculator