import React from "react";

const Servicecard = ({title, text, children}) => {
  return (
    <div className="card bg-primary w-[280px] h-[360px] lg:w-[22rem] lg:h-[24rem] shadow-[5px_5px_rgba(255,_113,_120,_0.4),_10px_10px_rgba(255,_113,_120,_0.3),_15px_15px_rgba(255,_113,_120,_0.2),_20px_20px_rgba(255,_113,_120,_0.1),_25px_25px_rgba(255,_113,_120,_0.05)]">
      <div className="card-body">
        <h2 className="card-title text-2xl font-['thedusWLB'] border-b-2 border-neutral pb-2 text-accent">{title}</h2>
        {text && <p className="font-['thedusCLR']">{text}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Servicecard;
