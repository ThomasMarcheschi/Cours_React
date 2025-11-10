import React from "react";

function BlueLed() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div
        className={`
              w-10 h-10 rounded-full transition-all duration-300
              bg-blue-500  'scale-110 opacity-100 shadow-lg'
            `}
      />
    </div>
  );
}

export default BlueLed;
