import { useState } from "react"


function App() {
    const [ email, setEmail] = useState('');

function submit(){
    if(email ==  ' '){
       alert ('Enter Email Adress')
    } else {
        alert ('Submitted')
    }
}
return (
    <>
    {/* <input
     value={email}
     onChange=(e) => setEmail(e.target.value)}
    />
    <button onClick={submit}>Submit</button> */}

     <h2 className="pink">Hello world</h2>



     <p style={{
        color
     }}></p>
     </>
)
}
export default App