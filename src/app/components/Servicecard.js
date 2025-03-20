import React from "react";

const Servicecard = ({title, text, children}) => {
  return (
    <div className="card bg-primary w-[280px] h-[360px] lg:w-[22rem] lg:h-[24rem]]">
      <div className="card-body">
        <h2 className="card-title text-2xl font-['thedusWLB'] border-b-2 border-neutral pb-2 text-accent">{title}</h2>
        {text && <p className="font-['thedusCLR']">{text}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Servicecard;
