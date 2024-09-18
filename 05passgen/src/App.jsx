import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv";
    if (number) str += "123456789";
    if (char) str += "*&%$#@!~)(*";
    for (let i = 1; i < length; i++) {
      let s = Math.floor(Math.random() * str.length + 1);
      pwd += str.charAt(s);
    }
    setPass(pwd);
  }, [length, number, char, setPass]);

  const copyPass = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(pass)

  },[pass])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])

  return (
    <>
      <h1 className="font-mono">Password Generator </h1>
      <div className=" bg-gray-600 w-1full max-w-screen-md min-h-10 shadow-lg text-orange-400 rounded-lg p-4 flex flex-col flex-1">
        <div className="flex justify-between   mb-5">
          <input className="bg-white w-full rounded-lg px-5" ref={passwordRef} value={pass} readOnly placeholder="Password"></input>
          <button className="btn bg-blue-700 text-white" onClick={copyPass}>Copy Text</button>
        </div>
        <div className="flex justify-around">
        <div>
            <input className="bg-blue-500 cursor-pointer" type="range" id="range" min={6} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input><br />
            <label htmlFor="range" className="text-orange-500">
              Length : {length}
            </label>
          </div>
          <div>
            <input type="checkbox" id="numbers" defaultChecked={number} onClick={(e)=>{setNumber((prev)=>!prev)}}></input>
            <label htmlFor="numbers" className=" mx-2 text-orange-500">
              Numbers
            </label>
          </div>
          <div>
            <input className="bg-white" defaultChecked={char} type="checkbox" id="characters" onClick={(e)=>setChar(e.target.value)}></input>
            <label htmlFor="characters" className="mx-2 text-orange-500">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
