import React from "react";

const ProsConsItem = ({ type, text }) => {
  return (
    <div
      className={`flex items-start gap-3 w-full ${
        type === "pro" ? "text-neutral" : "text-accent"
      }`}
    >
      <div>
        {type === "pro" ? (
          <div className="h-6 w-6 flex items-center justify-center">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className="fill-neutral" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8162 0.207014C12.0701 0.473695 12.0597 0.895677 11.793 1.14954L4.08929 8.48287C3.95774 8.6081 3.78078 8.67424 3.59933 8.66598C3.41789 8.65772 3.24766 8.57579 3.12803 8.43912L0.165063 5.05451C-0.0774581 4.77748 -0.0494802 4.35629 0.227553 4.11377C0.504586 3.87125 0.925768 3.89923 1.16829 4.17626L3.67342 7.0379L10.8737 0.183799C11.1404 -0.070061 11.5624 -0.0596674 11.8162 0.207014Z"/>
            </svg>
          </div>
        ) : (
          <div className="h-6 w-6 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="fill-accent" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.243 12.243C12.5034 11.9827 12.5034 11.5606 12.243 11.3002L8.94367 8.00086L12.244 4.70057C12.5043 4.44022 12.5043 4.01811 12.244 3.75776C11.9836 3.49741 11.5615 3.49741 11.3011 3.75776L8.00086 7.05805L4.70057 3.75776C4.44022 3.49741 4.01811 3.49741 3.75776 3.75776C3.49741 4.01811 3.49741 4.44022 3.75776 4.70057L7.05805 8.00086L3.75867 11.3002C3.49832 11.5606 3.49832 11.9827 3.75867 12.243C4.01902 12.5034 4.44113 12.5034 4.70148 12.243L8.00086 8.94367L11.3002 12.243C11.5606 12.5034 11.9827 12.5034 12.243 12.243Z"/>
            </svg>
          </div>
        )}
      </div>
      <p className="font-thedusCLR flex-1">{text}</p>
    </div>
  );
};

export default ProsConsItem;
