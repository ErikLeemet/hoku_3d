import ProsConsItem from "../components/ProsConsItem.js";
import React from "react";

const Plastic = () => {
  return (
    <div id="plastic" className="w-full min-h-screen flex flex-col justify-between items-center">
       <div className="w-full h-[90px] flex justify-center items-center bg-accent ">
          <h1 className="text-4xl font-thedusCLB text-neutral">Plastics</h1>
        </div>
      <div className="grid grid-cols-2 h-[700px] my-auto px-[24px] pt-[24px] w-[1200px]">
        {/* INFO SECTION */}
        <div className="flex justify-center items-center flex-col h-full bg-secondary w-full gap-[24px] p-[16px]">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="fill-accent" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.4735 24.8421H59.5352C59.1326 23.0891 58.6911 21.4357 58.2107 19.8991C55.96 12.6966 53.0471 8.23828 50 8.23828C46.9529 8.23828 44.0443 12.6966 41.7893 19.8991C41.3089 21.4313 40.8674 23.0891 40.4648 24.8421H40.4735Z"/>
            <path d="M39.8893 72.3808H60.1239C61.3055 66.256 62.0154 59.0881 62.0933 51.3965H37.9199C37.9978 59.0881 38.7077 66.256 39.8893 72.3808Z"/>
            <path d="M29.6884 20.2823C28.6886 21.7021 27.7624 23.2257 26.9141 24.8402H37.6265C38.081 22.7799 38.5874 20.8495 39.1457 19.0748C40.4442 14.9195 42.0369 11.5476 43.8461 9.19727C38.4055 10.9113 33.5233 14.8328 29.6928 20.2867L29.6884 20.2823Z"/>
            <path d="M21.0703 51.3965C21.2478 59.1011 22.8708 66.2777 25.5717 72.3808H37.0589C35.9032 66.1997 35.2107 59.0405 35.1371 51.3965H21.0746H21.0703Z"/>
            <path d="M25.5717 27.625C22.8708 33.7281 21.2478 40.9047 21.0703 48.6093H35.1328C35.2064 40.9653 35.8989 33.806 37.0545 27.625H25.5673H25.5717Z"/>
            <path d="M60.1239 27.625H39.8893C38.7077 33.7497 37.9978 40.9176 37.9199 48.6093H62.0933C62.0154 40.9176 61.3055 33.7497 60.1239 27.625Z"/>
            <path d="M62.3877 24.8426H73.1002C72.2518 23.2281 71.3256 21.7088 70.3258 20.2847C66.4909 14.8352 61.6086 10.9094 56.168 9.19531C57.9772 11.5457 59.57 14.9175 60.8685 19.0728C61.4225 20.8518 61.9333 22.7822 62.3877 24.8383V24.8426Z"/>
            <path d="M81.7203 48.6093H91.7403C91.4892 40.9047 89.1476 33.7238 85.2694 27.625H77.457C80.0194 33.8277 81.5558 40.9782 81.7203 48.6093Z"/>
            <path d="M62.9512 72.3808H74.4384C77.1392 66.2777 78.7623 59.1011 78.9397 51.3965H64.8772C64.8036 59.0405 64.1111 66.1997 62.9555 72.3808H62.9512Z"/>
            <path d="M72.5975 18.6865C73.9263 20.578 75.1338 22.6383 76.2072 24.8415H83.3358C82.1672 23.2963 80.899 21.8376 79.5356 20.4698C75.6402 16.5742 70.9743 13.4491 65.7891 11.3281C68.2951 13.3452 70.5805 15.8254 72.5975 18.6865Z"/>
            <path d="M74.4384 27.625H62.9512C64.1068 33.8103 64.7993 40.9653 64.8729 48.6093H78.9354C78.7579 40.9003 77.1349 33.7281 74.434 27.625H74.4384Z"/>
            <path d="M70.3258 79.7176C71.3213 78.2979 72.2518 76.7742 73.1002 75.1641H62.3877C61.9333 77.2244 61.4268 79.1549 60.8685 80.9296C59.57 85.0849 57.9772 88.4568 56.168 90.8071C61.6086 89.093 66.4909 85.1714 70.3258 79.7176Z"/>
            <path d="M72.5975 81.3187C70.5849 84.1841 68.2951 86.6643 65.7891 88.677C70.9743 86.5604 75.6358 83.431 79.5356 79.5354C80.899 78.1676 82.1715 76.7089 83.3358 75.168H76.2072C75.1338 77.3711 73.9263 79.4315 72.5975 81.323V81.3187Z"/>
            <path d="M59.5363 75.1641H40.4746C40.8771 76.9171 41.3186 78.5706 41.7991 80.1029C44.0498 87.3097 46.9627 91.7637 50.0098 91.7637C53.0569 91.7637 55.9654 87.3054 58.2204 80.1029C58.7009 78.5706 59.1424 76.9171 59.5449 75.1641H59.5363Z"/>
            <path d="M77.457 72.3808H85.2694C89.1476 66.2777 91.4892 59.1011 91.7403 51.3965H81.7203C81.5515 59.0275 80.0194 66.1824 77.457 72.3808Z"/>
            <path d="M18.2874 51.3965H8.26758C8.51862 59.1011 10.8602 66.282 14.7383 72.3808H22.5508C19.9885 66.1824 18.4519 59.0275 18.2874 51.3965Z"/>
            <path d="M27.4103 18.6865C29.4229 15.821 31.7126 13.3409 34.2186 11.3281C29.0334 13.4447 24.3719 16.5742 20.4721 20.4698C19.1087 21.8376 17.8362 23.2963 16.6719 24.8415H23.8005C24.8739 22.6383 26.0815 20.578 27.4103 18.6865Z"/>
            <path d="M37.6265 75.1641H26.9141C27.7624 76.7786 28.6886 78.2979 29.6884 79.7176C33.5233 85.1714 38.4012 89.0974 43.8418 90.8071C42.0326 88.4568 40.4399 85.0849 39.1414 80.9296C38.5874 79.1506 38.0766 77.2201 37.6222 75.1641H37.6265Z"/>
            <path d="M22.5508 27.625H14.7383C10.8559 33.7281 8.51862 40.9047 8.26758 48.6093H18.2874C18.4562 40.9782 19.9885 33.8233 22.5508 27.625Z"/>
            <path d="M27.4103 81.3191C26.0815 79.4276 24.8739 77.3672 23.8005 75.1641H16.6719C17.8405 76.7093 19.1087 78.168 20.4721 79.5315C24.3675 83.4271 29.0334 86.5565 34.2186 88.6731C31.7126 86.6604 29.4273 84.1802 27.4103 81.3148V81.3191Z"/>
            <path d="M97.1088 50.0022H94.2132C94.2132 62.2214 89.2702 73.2545 81.263 81.2622C73.2514 89.2654 62.2187 94.2085 50 94.2128C37.7813 94.2128 26.7486 89.2698 18.737 81.2622C10.7341 73.2502 5.79125 62.217 5.78693 50.0022C5.78693 37.783 10.7298 26.7498 18.737 18.7378C26.7486 10.7302 37.7813 5.7914 50 5.78707C62.2187 5.78707 73.2514 10.7302 81.263 18.7378C89.2659 26.7498 94.2089 37.783 94.2132 50.0022H100C100 22.3867 77.6186 0 50 0C22.3857 0 0.00432825 22.3824 0 50.0022C0 77.6176 22.3814 100 50 100C77.6143 100 99.9957 77.6176 100 50.0022H97.1044H97.1088Z"/>
            </svg>
            <div className="w-[500px]">
                <p className="text-neutral pb-[10px]">
                    <span className="font-thedusCLB text-2xl">Hoku<span className="text-accent">3d</span></span> pakub kolme standardset filamenti ning kasutame peamiselt musta ja valget värvi. Muude värvide kasutamine toimub kliendi soovil lisatasu eest.
                </p>
                {/* DECORATION */}
                <div className="w-[full] h-[20px] bg-accent"></div>
            </div>
        </div>

        <div className="flex items-center flex-col h-full w-full">
            <div className="flex justify-center items-center gap-[16px]">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="fill-accent" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.2826 19.4413L30.5607 0H19.4437L9.72185 19.4413L0 38.8826L5.55852 50H44.4415L50 38.8826L40.2781 19.4413H40.2826ZM25.0022 35.176H16.6778L20.8411 26.852L25.0022 18.5281L29.1656 26.852L33.3289 35.176H25.0044H25.0022Z"/>
                </svg>
                <h2 className="text-[36px] font-thedusCLR text-neutral">filament</h2>
            </div>
            <div>

        <div className="flex flex-col justify-center items-center">
            <div className="flex w-[480px]">
                <ul role="list" className="text-left text-secondary">
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Keskkonnasõbralik"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Suurepärane detail"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Sobib prototüüpide jaoks"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Sobib dekoratiivesemetele"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="con" text="Madal soojustaluvus (pehmeneb ~60°C juures)"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="con" text="Teiste plastmassidega võrreldes rabe"/>
                    </li>
                </ul>

            </div>
            <div className="flex w-[480px]">
                <ul role="list" className="text-left text-secondary">
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Tugev ja vastupidav"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Kõrge soojustaluvus kuni ~100°C"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Sobib funktsionaalsete osade jaoks"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Sobib autoosade jaoks"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Sobib tugevate prototüüpide jaoks"/>
                    </li>
                </ul>

            </div>
            <div className="flex w-[480px]">
                <ul role="list" className=" text-left text-secondary">
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Tugev ja paindlik"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Keemiline vastupidavus (talub vett ja happeid)"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Sobib hästi pingele avatud funktsionaalsete osade ja välistingimustes kasutamiseks"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Sobib dekoratiivesemetele"/>
                    </li>
                </ul>
            </div>
        </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Plastic;
