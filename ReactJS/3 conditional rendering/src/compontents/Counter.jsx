import React,{useState} from 'react'

function Counter() {
    // var count = 0;
    // function increment(){
    //      count = count + 1;
    //     console.log('increment',count);
    // }

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Click</button>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    <br />
    <h1>{name}</h1>
    <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
    </>
  )
}

export default Counter