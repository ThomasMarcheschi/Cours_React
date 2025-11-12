import { useMachineStore } from "../stores/useMachineStore.js";

function Cell() {
  const tape = useMachineStore((state) => state.tape);

  return (
    <div className="flex gap-2">
      {tape.map((cell, index) => (
        <div
          key={index}
          className={
            "w-12 h-12 rounded-md flex items-center justify-center border border-gray-800 bg-gray-900 text-lg font-mono"
          }
        >
          {cell}
        </div>
      ))}
    </div>
  );
}

export default Cell;
