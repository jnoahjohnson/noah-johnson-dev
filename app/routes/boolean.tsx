import { useEffect, useState } from "react";

export default function BooleanPage() {
  const [isAnd, setIsAnd] = useState(true);
  const [isOn, setIsOn] = useState(true);
  const [firstIsOn, setFirstIsOn] = useState(true);
  const [secondIsOn, setSecondIsOn] = useState(true);

  useEffect(() => {
    if (isAnd) {
      setIsOn(firstIsOn && secondIsOn);
    } else {
      setIsOn(firstIsOn || secondIsOn);
    }
  }, [firstIsOn, secondIsOn, isAnd]);

  return (
    <main className="h-screen">
      <div className="p-6 pb-24 h-full flex flex-col">
        <h1 className="font-extrabold text-4xl mb-2">Boolean Logic</h1>
        <h2 className="max-w-2xl font-light text-gray-600 text-2xl">
          Play around with turning off the bottom elements and changing the
          boolean operator to see what combinations turn the top element on or
          off.
        </h2>
        <div className="flex-1 w-full h-full flex items-center justify-center">
          <div
            className={`w-48 h-48 rounded transition-all duration-200 ${
              isOn ? "bg-yellow-400" : "bg-yellow-50"
            }`}
          />
        </div>
        <div className="mt-auto">
          <div className="flex justify-between max-w-4xl mx-auto mt-auto">
            <div className="flex flex-col items-center">
              <div
                className={`w-48 h-24 rounded transition-all duration-300 ${
                  firstIsOn
                    ? "bg-pink-600 text-white"
                    : "bg-pink-100 text-pink-800"
                } mb-2 flex items-center justify-center font-bold text-2xl`}
              >
                {firstIsOn ? "True" : "False"}
              </div>
              <button
                className="w-24 py-2 rounded hover:shadow-lg bg-purple-700 text-white font-bold"
                onClick={() => setFirstIsOn(!firstIsOn)}
              >
                {firstIsOn ? "Off" : "On"}
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-48 h-24 rounded bg-pink-50 mb-2 flex items-center justify-center">
                <p className="font-extrabold text-center text-gray-900 text-2xl">
                  {isAnd ? "AND" : "OR"}
                </p>
              </div>
              <button
                className="w-24 py-2 rounded hover:shadow-lg bg-purple-700 text-white font-bold"
                onClick={() => setIsAnd(!isAnd)}
              >
                {isAnd ? "OR" : "AND"}
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-48 h-24 rounded transition-all duration-300 ${
                  secondIsOn
                    ? "bg-pink-600 text-white"
                    : "bg-pink-100 text-pink-800"
                } mb-2 flex items-center justify-center font-bold text-2xl`}
              >
                {secondIsOn ? "True" : "False"}
              </div>
              <button
                className="w-24 py-2 rounded hover:shadow-lg bg-purple-700 text-white font-bold"
                onClick={() => setSecondIsOn(!secondIsOn)}
              >
                {secondIsOn ? "Off" : "On"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
