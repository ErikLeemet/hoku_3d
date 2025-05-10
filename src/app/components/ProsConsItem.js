import React from "react";

const ProsConsItem = ({ type, text }) => {
  return (
    <div
      className={`flex items-start gap-3 w-full ${
        type === "pro" ? "text-scondary" : "text-accent"
      }`}
    >
      <div className="text-2xl mt-0.5">
        {type === "pro" ? (
          <div className="h-6 w-6">
            <svg
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.666016"
                y="0.5"
                width="32"
                height="32"
                rx="16"
                className="fill-secondary"
              />
              <path
                className="fill-primary"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.4822 12.707C22.7361 12.9737 22.7257 13.3957 22.459 13.6495L14.7553 20.9829C14.6238 21.1081 14.4468 21.1742 14.2653 21.166C14.0839 21.1577 13.9137 21.0758 13.794 20.9391L10.8311 17.5545C10.5886 17.2775 10.6165 16.8563 10.8936 16.6138C11.1706 16.3713 11.5918 16.3992 11.8343 16.6763L14.3394 19.5379L21.5397 12.6838C21.8064 12.4299 22.2284 12.4403 22.4822 12.707Z"
              />
            </svg>
          </div>
        ) : (
          <div className="h-6 w-6">
            <svg
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="fill-accent"
                y="0.5"
                width="32"
                height="32"
                rx="16"
              />
              <path
                className="fill-primary"
                d="M20.243 20.743C20.5034 20.4827 20.5034 20.0606 20.243 19.8002L16.9437 16.5009L20.244 13.2006C20.5043 12.9402 20.5043 12.5181 20.244 12.2578C19.9836 11.9974 19.5615 11.9974 19.3011 12.2578L16.0009 15.558L12.7006 12.2578C12.4402 11.9974 12.0181 11.9974 11.7578 12.2578C11.4974 12.5181 11.4974 12.9402 11.7578 13.2006L15.058 16.5009L11.7587 19.8002C11.4983 20.0606 11.4983 20.4827 11.7587 20.743C12.019 21.0034 12.4411 21.0034 12.7015 20.743L16.0009 17.4437L19.3002 20.743C19.5606 21.0034 19.9827 21.0034 20.243 20.743Z"
              />
            </svg>
          </div>
        )}
      </div>
      <p className="font-['aino'] flex-1">{text}</p>
    </div>
  );
};

export default ProsConsItem;
