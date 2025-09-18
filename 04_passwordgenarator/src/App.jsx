import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, SetLength] = useState('6');
  const [numberAllowed, SetNumberAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, SetPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword =useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)

    }
    SetPassword(pass)


  },[length, numberAllowed, charAllowed]
)

const coypPassword =()=>{ 
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
}

useEffect(()=>{
  generatePassword()
},[length, numberAllowed, charAllowed,])

  return (
    <div className="bg-gray-700 min-h-screen flex">
      <div className="max-w-md w-full mx-auto rounded-2xl text-white mt-15 ">
        <h1 className="text-2xl font-bold text-center mb-3">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white text-orange-500"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={coypPassword}
          className="bg-blue-600 px-4 text-white font-semibold hover:bg-blue-700 cursor-pointer">
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-6 mt-5 text-sm">

          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => SetLength(e.target.value)}
          />

          <label htmlFor="length" className="text-orange-500">
            Length: {length}
          </label>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => SetNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number" className="text-orange-500">Numbers</label>
          </div>
           <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => SetCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput" className="text-orange-500">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
