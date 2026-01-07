import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const [length, setLength] = useState(8);
  const [allowedNumber, setNumber] = useState(false);
  const [allowedCharacter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (allowedNumber) str += "0123456789";
    if (allowedCharacter) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowedCharacter, allowedNumber, setPassword]);

  const passwordRef = useRef(null);
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [length, allowedNumber, allowedCharacter, setPassword, passwordGenerator]);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-6 py-2 text-white shadow-lg rounded-full"
            style={{ background: "red" }}
            onClick={() => changeColor("red")}
          >
            red
          </button>
          <button
            className="outline-none px-6 py-2 text-white shadow-lg rounded-full"
            style={{ background: "green" }}
            onClick={() => changeColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-6 py-2 text-white shadow-lg rounded-full"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-6 py-2 text-white shadow-lg rounded-full"
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-6 py-2 text-white shadow-lg rounded-full"
            style={{ background: "black" }}
            onClick={() => setColor("black")}
          >
            black
          </button>
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg w-full max-w-md text-center mx-auto py-4 text-white my-2 px-8 shadow-md">
        <h1>password generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4 shadow mt-4 text-center">
          <input
            type="text"
            placeholder="password"
            value={password}
            readOnly
            className="outline-none w-full px-3 py-1 bg-white text-black"
            ref={passwordRef}
          />
          <button
            className="outline-none px-3 py-1 shrink-0 bg-blue-600 text-white"
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedNumber}
              id="numberInput"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={allowedCharacter}
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
