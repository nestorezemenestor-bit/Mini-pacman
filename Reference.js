import { useState } from "react"


function App () {
    const [count, setCount] = useState({
        name: 'Gab' ,
        age: 23,
        course: 'Computer Science'
    })

    function changeCourse() {
        setCount({
            ...count,
            course:'Graphic design'
        })
    }
     return  (
        <>
        <div>{count}</div>
        <button onClick={() => setCount('Ds')}> Increase</button>
        <button onClick={() => setCount(count - 1)}> decrease</button>
        </>
     )
}

export default App