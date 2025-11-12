import React, { useReducer } from "react";
import LedPanel from "./components/LedPanel.jsx";
import { useState } from "react";
import BlueLed from "./components/BlueLed.jsx";
import { useEffect } from "react";

const initialState = { active: "red" };

function reducer(state, action) {
  switch (action.type) {
    case "next":
      //   if (state.active === "red") return { ...state, active: "yellow" };
      //   if (state.active === "yellow") return { ...state, active: "green" };
      //   if (state.active === "green") return { ...state, active: "red" };
      //   break;
      return {
        ...state,
        active:
          state.active == "red"
            ? "yellow"
            : state.active == "yellow"
            ? "green"
            : "red",
      };
    case "reset":
      if (state.activate !== "red") return { ...state, active: "red" };
      return;

    case "prev":
      if (state.active === "red") return { ...state, active: "green" };
      if (state.active === "green") return { ...state, active: "yellow" };
      if (state.active === "yellow") return { ...state, active: "red" };
      break;

    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(-1);
  const [status, setStatus] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePrev = () => {
    dispatch({ type: "prev" });
    // setCount(count + 1);
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    // setCount(count + 1);
  };

  const handleNext = () => {
    dispatch({ type: "next" });
    // setCount(count + 1);
  };

  const handleMount = () => {
    setStatus(!status);
  };

  useEffect(() => {
    setCount(count + 1);

    return () => {};
  }, [state]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        {status && <BlueLed />}
        {!status && (
          <div className="flex gap-4 justify-center items-center bg-gray-800 p-4 rounded-lg w-16 mx-auto text-center text-lg font-medium">
            {count}
          </div>
        )}
        <button
          onClick={handleMount}
          className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium flex justify-center mx-auto"
        >
          {status ? "demontage" : "montage"}
        </button>
        <LedPanel active={state.active} />

        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={handlePrev}
          >
            PREV
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={handleReset}
          >
            RESET
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
