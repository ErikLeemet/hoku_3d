import React from "react";

const Servicecard = ({title, text, children}) => {
  return (
    <div className="card bg-base-100 w-[20rem] h-[20rem] lg:w-[22rem] lg:h-[24rem] shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-[audiowide] border-b pb-2">{title}</h2>
        {text && <p>{text}</p>}
        {children && <div className="mt-4">{children}</div>}
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
