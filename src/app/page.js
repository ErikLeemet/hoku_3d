import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className='main-container w-[1440px] h-[5204px] bg-[#1e1e1e] relative overflow-hidden mx-auto my-0'>
    <div className='w-[1440px] h-[1637px] bg-the-wave bg-no-repeat opacity-30 absolute z-[240] mt-0 mr-0 mb-0 ml-0'></div>
      <div className='w-[1440px] h-[1637px] relative z-[240] mt-0 mr-0 mb-0 ml-0'>
        <div className='w-[1440px] h-[150px] absolute top-0 left-0 overflow-hidden z-[222]'>
          <div className='w-[238.797px] h-[50px] absolute top-[51px] left-[71px] z-[223]'>
            <span className="flex h-full justify-start items-center font-['ainohead'] text-[32px] font-normal leading-[41.6px] text-[#fff] absolute top-0 left-[37.69%] text-left whitespace-nowrap z-[226]">
              HOKU3D
            </span>
            <div className='w-[25.13%] h-[74.07%] absolute top-[12.96%] left-0 z-[224]'>
              <img src="/logo.png" alt="Logo" className='w-full h-full bg-[length:100%_100%] absolute top-0 left-0 z-[225]' />
            </div>
          </div>
          <div className='w-[492px] h-[50px] rounded-[10px] absolute top-[51px] left-[476px] z-[227]'>
            <div className='w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[130px] z-[232]' />
            <div className='w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[370px] z-[233]' />
            <div className='w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[490px] z-[234]' />
            <div className='w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-0 z-[235]' />
            <div className='w-[2px] h-[50px] bg-[#df7026] rounded-[10px] absolute top-0 left-[250px] z-[236]' />
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
        <div className='w-[1440px] h-[808px] absolute top-px left-0 z-[220]' />
        <span className="flex w-[989.222px] h-[31.35%] justify-start items-center font-['audiowide'] text-[77px] font-normal leading-[98.167px] text-[#fff] tracking-[3.85px] absolute top-[7.39%] left-[4.93%] text-left z-[238]">
          START <br />
          3D PRINTING
          <br />
          TODAY
        </span>
        <button className='w-[20.83%] h-[3.05%] bg-[#fff] rounded-[54px] absolute top-[40.86%] left-[4.93%] z-[240] text-[#000] transition ease-in-out duration-200 hover:text-[#fff] hover:bg-[#E07126]'>
          <span className="flex w-4/5 h-2/5 justify-center items-center font-['Aino'] text-[20px] font-normal leading-[19.997px] tracking-[2px] absolute top-[34.24%] left-[10.06%] text-center whitespace-nowrap z-[241]">
            SERVICES
          </span>
        </button>
        </div>
        </div>
    </div>
  );
}
