import React from "react";

import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="bg-black fixed flex justify-center items-center min-h-screen min-w-full z-[1000] opacity-60 top-0 right-0 left-0">
      <TailSpin
        height="80"
        width="80"
        color="#17D5FF"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
