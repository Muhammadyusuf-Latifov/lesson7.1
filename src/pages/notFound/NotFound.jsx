import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <p className="text-[100px] text-center text-red-600 font-bold">404</p>
        <p className="text-[24px] text-center mb-[18px]">
          Ohh! this page is not available
        </p>
        <div className="flex items-center justify-center gap-[12px]">
          <button
            onClick={() => navigate("/")}
            className="border py-[8px] px-[30px] rounded-[12px] bg-[dodgerblue] text-[#fff]"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="border py-[8px] px-[30px] rounded-[12px] bg-[#0ca8cf] text-[#fff]"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
