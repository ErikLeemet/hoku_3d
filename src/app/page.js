import Image from "next/image";
import Service from "./service/page.js";

export default function Home() {
  return (
    <div>
      <div className="main-container w-[1440px] h-[5204px] bg-[#1e1e1e] relative overflow-hidden mx-auto my-0">
        <div className="w-[1440px] min-h-[808px] bg-the-wave-dark bg-no-repeat relative z-[240] mt-0 mr-0 mb-0 ml-0 shadow-[0px_50px_35px_0px_rgba(194,_83,_8,_0.75)]">
          <div className="w-[1440px] h-[150px] absolute top-0 left-0 overflow-hidden z-[222]">
            <div className="w-[238.797px] h-[50px] absolute top-[51px] left-[71px] z-[223]">
              <span className="flex h-full justify-start items-center font-['ainohead'] text-[32px] font-normal leading-[41.6px] text-[#fff] absolute top-0 left-[37.69%] text-left whitespace-nowrap z-[226]">
                HOKU3D
              </span>
              <div className="w-[25.13%] h-[74.07%] absolute top-[12.96%] left-0 z-[224]">
                <svg
                  width="60"
                  height="38"
                  viewBox="0 0 60 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.961 16.1797C59.3856 14.4732 58.644 12.8703 57.7545 11.4106C56.9879 10.0945 56.104 8.90187 55.1213 7.85772C53.1337 5.80194 50.8239 4.33997 48.3552 3.57511C47.5552 3.3145 46.7442 3.10603 45.922 2.94967C45.522 2.67748 45.1132 2.43134 44.6954 2.21127C42.8705 1.26075 40.9384 0.706151 38.9758 0.569475C37.0826 0.395738 35.1561 0.456533 33.2962 0.986429C30.9747 1.63866 28.869 3.22486 27.2767 5.52096C27.2545 5.4341 27.1923 5.37617 27.09 5.34721C26.3622 5.16411 25.6121 5.19711 24.8954 5.44375C24.1787 5.69039 23.5139 6.14435 22.9503 6.77187C21.9253 8.02304 21.2934 9.72569 21.1771 11.5496C20.8772 15.1286 22.2837 19.0724 24.8169 20.6881C25.5746 21.1678 26.4014 21.4342 27.2434 21.4699C26.2523 21.7769 25.2435 21.774 24.2169 21.4613C22.9303 21.0704 21.4438 20.0801 20.9041 18.4209C20.755 17.8971 20.6881 17.3396 20.7075 16.7815C20.727 16.2234 20.8322 15.676 21.0172 15.172C21.2305 14.5205 20.5572 14.5987 20.3905 15.0591C19.6306 17.1005 19.6973 19.4025 20.9838 21.053C22.2171 22.6427 24.0969 23.2247 25.7901 23.1726C26.7858 23.1778 27.7627 22.8197 28.6102 22.1388C28.8102 21.9651 29.0366 21.6784 29.0232 21.331C29.5565 21.2093 30.0831 20.9922 30.5165 20.6447C30.7564 20.4536 31.0164 20.08 31.0034 19.6805L30.9898 19.5588C31.132 19.3504 31.2297 19.0956 31.2831 18.7944C31.2367 19.055 31.3097 18.7075 31.3097 18.6728C31.3453 18.5338 31.3743 18.3832 31.3967 18.2211L31.4697 17.6825L31.5031 17.4566L31.5233 17.3785C31.5631 17.2047 31.6076 17.0339 31.6567 16.8659C31.703 16.7356 31.863 16.3621 31.7233 16.6835C31.7765 16.5445 31.8364 16.4113 31.903 16.2839C31.9697 16.1565 32.0408 16.0349 32.1163 15.9191L32.2497 15.7453C32.3386 15.6353 32.4274 15.5368 32.5163 15.45L32.5496 15.4152L32.6096 15.3457L32.6363 15.3284L32.683 15.2849L32.6496 15.3197C32.8585 15.1633 33.0718 15.0185 33.2896 14.8853L33.3563 14.8506L33.4229 14.8245L33.7695 14.7029L34.1162 14.6161L34.3295 14.5726H34.3498C34.5962 14.5726 34.8362 14.5466 35.0831 14.5726L35.4428 14.6074H35.4631L35.4761 14.6161L35.6964 14.6682C35.9362 14.7435 36.1716 14.8332 36.4027 14.9375L36.656 15.0678C36.9862 15.2771 37.299 15.5304 37.5893 15.8235C37.6293 15.867 37.8095 16.0841 37.6226 15.8583L37.7293 15.9886C37.8359 16.1276 37.9404 16.2723 38.0426 16.4229L38.2826 16.8051L38.3426 16.918L38.3959 17.0397C38.5427 17.3756 38.6672 17.723 38.7692 18.0821L38.8092 18.2384L38.8425 18.4122C38.8825 18.5975 38.9136 18.7857 38.9358 18.9768C38.9981 19.4633 39.0247 19.9527 39.0158 20.4449C39.0069 21.2036 38.9381 21.9275 38.8092 22.6166C37.113 24.3377 35.1355 25.5267 33.0299 26.0913C30.8164 26.6994 28.5766 26.821 26.3234 26.8558C20.9372 26.9426 15.5575 26.4909 10.1779 26.3085C6.93817 26.2043 3.65841 26.1521 0.431977 26.6386C-0.161313 26.7255 -0.141311 28.0285 0.478643 28.0198C3.39843 27.9156 6.31156 27.8808 9.23163 28.0372C12.1648 28.1848 15.0776 28.4107 18.004 28.5584C20.6038 28.6916 23.2059 28.7495 25.8101 28.7321C26.7967 28.7205 27.7878 28.6742 28.7832 28.5931C24.2369 29.8614 19.5839 30.5216 14.9443 31.0602C13.371 31.2513 11.7934 31.4308 10.2113 31.5988C9.7713 31.6422 9.47799 32.6412 10.0579 32.6412C13.9021 32.6412 17.7329 32.3516 21.5504 31.7725C24.3502 31.3555 27.15 30.817 29.8965 30.0091C32.3097 29.2968 34.7561 28.4194 36.9493 26.8992L37.016 26.8558C36.7005 27.3075 36.3627 27.736 36.0027 28.1414C33.9362 30.4695 31.3964 31.8941 28.8166 33.1277C27.2967 33.8573 25.6235 34.5175 23.9969 35.0127C23.3103 35.2212 22.484 35.4297 21.8638 35.5078C21.5349 35.5542 21.2084 35.5744 20.8841 35.5686C20.6505 35.5686 20.4372 35.5252 20.2175 35.6642L19.9106 35.8814C19.6306 36.0551 19.5106 36.5589 19.7173 36.8804C19.9572 37.2452 20.1839 37.445 20.5638 37.4884C20.8794 37.5174 21.1949 37.5261 21.5104 37.5145C22.2705 37.4723 23.0277 37.3649 23.7769 37.1931C25.4376 36.8051 27.0733 36.2533 28.6699 35.5426C31.6497 34.2743 34.5695 32.7628 37.0093 30.1307C38.4573 28.6312 39.6016 26.6926 40.3424 24.4843C41.0388 22.308 41.195 19.9021 40.7891 17.6043C40.4398 15.9595 39.6872 14.5088 38.646 13.4736C37.6049 12.4384 36.3324 11.8756 35.0228 11.871C34.1562 11.845 33.2763 12.0447 32.4763 12.4791C32.543 12.3922 32.6185 12.3111 32.703 12.2359L32.7696 12.1664C33.2308 11.7641 33.7169 11.4125 34.2229 11.1153C36.1267 10.115 38.2079 9.83206 40.2291 10.2987C41.2476 10.5305 42.214 11.0535 43.0589 11.83C43.9039 12.6066 44.6063 13.6174 45.1157 14.7898C46.252 17.4655 46.5414 20.6138 45.922 23.5635C45.1154 27.681 42.8489 31.0168 40.1291 33.2319C39.8024 33.4925 39.9025 34.1788 40.3091 33.8747C43.0625 31.8159 45.422 28.7408 46.5753 24.8404C47.5152 21.6437 47.6685 18.0213 46.6753 14.8158C46.2447 13.3474 45.5627 12.0264 44.6814 10.9531C43.8 9.87984 42.7424 9.08264 41.589 8.62215C39.1692 7.75347 36.5893 7.9272 34.2562 9.14336C32.8563 9.85567 31.5897 10.9241 30.6101 12.4096C29.6898 13.8169 28.9566 15.754 29.1299 17.6304C29.1521 17.862 29.2121 18.0184 29.3099 18.0995C29.3099 18.2674 29.3166 18.4296 29.3302 18.5859C28.2785 17.9076 27.4278 16.7962 26.91 15.4239C26.2034 13.5128 26.2434 11.428 26.9767 9.52557C27.5507 7.97731 28.3752 6.60951 29.3937 5.51629C30.4121 4.42307 31.6002 3.63042 32.8763 3.19289C34.4888 2.67685 36.1515 2.47775 37.8093 2.60219C39.5958 2.68906 41.3626 2.99309 43.0622 3.75753C46.1687 5.11832 48.8184 7.83758 50.5617 11.4541C51.4711 13.3772 52.0298 15.5467 52.1949 17.7954C52.2615 18.8958 52.226 19.9874 52.0882 21.0703C51.9282 22.2778 51.6082 23.4071 51.3483 24.5711C51.2416 25.0402 51.2949 25.5527 51.6816 25.7699C52.0416 25.9523 52.5082 25.7699 52.7148 25.3356C53.7281 23.2073 54.0481 20.5405 53.9814 18.0734C53.9135 15.8199 53.4724 13.6122 52.6882 11.6017C51.7523 9.2071 50.4394 7.09662 48.8351 5.40803C49.4484 5.69759 50.0528 6.02769 50.6483 6.39833C52.8237 7.74447 54.7378 9.71319 56.2479 12.1577C57.2079 13.7126 57.9145 15.4239 58.668 17.1526C59.0544 18.0213 60.2276 16.9962 59.961 16.1797ZM31.4964 17.5001C31.4964 17.5522 31.4964 17.5522 31.4964 17.5001V17.5001ZM25.8435 8.14438C24.8035 10.568 24.3836 13.4433 25.3235 16.0494C25.9009 17.6206 26.8526 18.9064 28.0366 19.7152C27.4172 19.7236 26.8014 19.5913 26.2168 19.3243C25.0567 18.7453 24.0799 17.6743 23.4436 16.2839C22.8299 14.9602 22.49 13.4517 22.4571 11.9058C22.4068 10.8706 22.5605 9.83598 22.9037 8.90013C23.2437 7.97926 23.822 7.24411 24.5369 6.82398C25.2572 6.44643 26.027 6.25466 26.8034 6.25934C26.4523 6.85004 26.1323 7.47839 25.8435 8.14438Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[492px] h-[50px] rounded-[10px] absolute top-[51px] left-[476px] z-[227]">
              <div className="w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[130px] z-[232]" />
              <div className="w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[370px] z-[233]" />
              <div className="w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[490px] z-[234]" />
              <div className="w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-0 z-[235]" />
              <div className="w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[250px] z-[236]" />
              <button className="flex h-[23px] justify-start items-start font-['Aino'] text-[20px] font-normal leading-[23px] text-[#fff] tracking-[2px] absolute top-[14px] left-[389px] text-left whitespace-nowrap z-[228]">
                contact
              </button>
              <button className="flex w-[100px] h-[23px] justify-center items-start font-['Aino'] text-[20px] font-normal leading-[23px] text-[#fff] tracking-[2px] absolute top-[14px] left-[13px] text-center whitespace-nowrap z-[229]">
                home
              </button>
              <button className="flex w-[100px] h-[23px] justify-center items-start font-['Aino'] text-[20px] font-normal leading-[23px] text-[#fff] tracking-[2px] absolute top-[14px] left-[143px] text-center whitespace-nowrap z-[230]">
                about
              </button>
              <button className="flex w-[75px] h-[23px] justify-center items-start font-['Aino'] text-[20px] font-normal leading-[23px] text-[#fff] tracking-[2px] absolute top-[14px] left-[273px] text-center whitespace-nowrap z-[231]">
                gallery
              </button>
            </div>
          </div>
          <div className="w-[1440px] h-[808px] absolute top-px left-0 z-[220]" />
          <span className="flex w-[989.222px] h-[31.35%] justify-start items-center font-['audiowide'] text-[77px] font-normal leading-[98.167px] text-[#fff] tracking-[3.85px] absolute top-[7.39%] left-[4.93%] text-left z-[238]">
            START <br />
            3D PRINTING
            <br />
            TODAY
          </span>
          <button className="w-[20.83%] h-[3.05%] bg-[#fff] rounded-[54px] absolute top-[40.86%] left-[4.93%] z-[240] text-[#000] shadow-[-6px_8px_0px_0px_rgba(30,_30,_30,_1)] transition ease-in-out duration-200 hover:text-[#fff] hover:bg-[#E07126] hover:translate-y-1 hover:shadow-[0px_0px_20px_5px_rgba(56,_67,_76,_0.6)]">
            <span className="flex w-4/5 h-2/5 justify-center items-center font-['Aino'] text-[20px] font-normal leading-[19.997px] tracking-[2px] absolute top-[34.24%] left-[10.06%] text-center whitespace-nowrap z-[241]">
              SERVICES
            </span>
          </button>
        </div>
        <Service/>
      </div>
    </div>
  );
}
