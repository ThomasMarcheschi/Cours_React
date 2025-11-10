import React from "react";

function LedPanel({ active }) {
  const leds = [
    { color: "red", bgClass: "bg-red-500" },
    { color: "yellow", bgClass: "bg-yellow-400" },
    { color: "green", bgClass: "bg-green-500" },
  ];

  return (
    <div className="flex gap-4 justify-center items-center">
      {leds.map((led) => (
        <div
          key={led.color}
          className={`
            w-20 h-20 rounded-full transition-all duration-300
            ${led.bgClass}
            ${
              led.color === active
                ? "scale-110 opacity-100 shadow-lg"
                : "scale-75 opacity-50"
            }`}
        />
      ))}
    </div>
  );
}

export default LedPanel;
