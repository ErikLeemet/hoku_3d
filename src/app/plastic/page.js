import ProsConsItem from "../components/ProsConsItem.js";
import React from "react";
import { motion } from "framer-motion";

const Plastic = () => {
  return (
    <div id="plastic" className="w-full min-h-screen mid flex-col">
      <div className="w-full h-[90px] mid bg-accent ">
        <h1 className="text-4xl font-thedusCLB text-neutral">Plastics</h1>
      </div>
      <div className="grid grid-cols-2 h-[700px] my-auto px-[24px] pt-[24px] w-[1200px] gap-16">
        {/* INFO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="mid flex-col h-full bg-secondary w-full gap-[24px] p-[16px]"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            className="fill-accent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40.4735 24.8421H59.5352C59.1326 23.0891 58.6911 21.4357 58.2107 19.8991C55.96 12.6966 53.0471 8.23828 50 8.23828C46.9529 8.23828 44.0443 12.6966 41.7893 19.8991C41.3089 21.4313 40.8674 23.0891 40.4648 24.8421H40.4735Z" />
            <path d="M39.8893 72.3808H60.1239C61.3055 66.256 62.0154 59.0881 62.0933 51.3965H37.9199C37.9978 59.0881 38.7077 66.256 39.8893 72.3808Z" />
            <path d="M29.6884 20.2823C28.6886 21.7021 27.7624 23.2257 26.9141 24.8402H37.6265C38.081 22.7799 38.5874 20.8495 39.1457 19.0748C40.4442 14.9195 42.0369 11.5476 43.8461 9.19727C38.4055 10.9113 33.5233 14.8328 29.6928 20.2867L29.6884 20.2823Z" />
            <path d="M21.0703 51.3965C21.2478 59.1011 22.8708 66.2777 25.5717 72.3808H37.0589C35.9032 66.1997 35.2107 59.0405 35.1371 51.3965H21.0746H21.0703Z" />
            <path d="M25.5717 27.625C22.8708 33.7281 21.2478 40.9047 21.0703 48.6093H35.1328C35.2064 40.9653 35.8989 33.806 37.0545 27.625H25.5673H25.5717Z" />
            <path d="M60.1239 27.625H39.8893C38.7077 33.7497 37.9978 40.9176 37.9199 48.6093H62.0933C62.0154 40.9176 61.3055 33.7497 60.1239 27.625Z" />
            <path d="M62.3877 24.8426H73.1002C72.2518 23.2281 71.3256 21.7088 70.3258 20.2847C66.4909 14.8352 61.6086 10.9094 56.168 9.19531C57.9772 11.5457 59.57 14.9175 60.8685 19.0728C61.4225 20.8518 61.9333 22.7822 62.3877 24.8383V24.8426Z" />
            <path d="M81.7203 48.6093H91.7403C91.4892 40.9047 89.1476 33.7238 85.2694 27.625H77.457C80.0194 33.8277 81.5558 40.9782 81.7203 48.6093Z" />
            <path d="M62.9512 72.3808H74.4384C77.1392 66.2777 78.7623 59.1011 78.9397 51.3965H64.8772C64.8036 59.0405 64.1111 66.1997 62.9555 72.3808H62.9512Z" />
            <path d="M72.5975 18.6865C73.9263 20.578 75.1338 22.6383 76.2072 24.8415H83.3358C82.1672 23.2963 80.899 21.8376 79.5356 20.4698C75.6402 16.5742 70.9743 13.4491 65.7891 11.3281C68.2951 13.3452 70.5805 15.8254 72.5975 18.6865Z" />
            <path d="M74.4384 27.625H62.9512C64.1068 33.8103 64.7993 40.9653 64.8729 48.6093H78.9354C78.7579 40.9003 77.1349 33.7281 74.434 27.625H74.4384Z" />
            <path d="M70.3258 79.7176C71.3213 78.2979 72.2518 76.7742 73.1002 75.1641H62.3877C61.9333 77.2244 61.4268 79.1549 60.8685 80.9296C59.57 85.0849 57.9772 88.4568 56.168 90.8071C61.6086 89.093 66.4909 85.1714 70.3258 79.7176Z" />
            <path d="M72.5975 81.3187C70.5849 84.1841 68.2951 86.6643 65.7891 88.677C70.9743 86.5604 75.6358 83.431 79.5356 79.5354C80.899 78.1676 82.1715 76.7089 83.3358 75.168H76.2072C75.1338 77.3711 73.9263 79.4315 72.5975 81.323V81.3187Z" />
            <path d="M59.5363 75.1641H40.4746C40.8771 76.9171 41.3186 78.5706 41.7991 80.1029C44.0498 87.3097 46.9627 91.7637 50.0098 91.7637C53.0569 91.7637 55.9654 87.3054 58.2204 80.1029C58.7009 78.5706 59.1424 76.9171 59.5449 75.1641H59.5363Z" />
            <path d="M77.457 72.3808H85.2694C89.1476 66.2777 91.4892 59.1011 91.7403 51.3965H81.7203C81.5515 59.0275 80.0194 66.1824 77.457 72.3808Z" />
            <path d="M18.2874 51.3965H8.26758C8.51862 59.1011 10.8602 66.282 14.7383 72.3808H22.5508C19.9885 66.1824 18.4519 59.0275 18.2874 51.3965Z" />
            <path d="M27.4103 18.6865C29.4229 15.821 31.7126 13.3409 34.2186 11.3281C29.0334 13.4447 24.3719 16.5742 20.4721 20.4698C19.1087 21.8376 17.8362 23.2963 16.6719 24.8415H23.8005C24.8739 22.6383 26.0815 20.578 27.4103 18.6865Z" />
            <path d="M37.6265 75.1641H26.9141C27.7624 76.7786 28.6886 78.2979 29.6884 79.7176C33.5233 85.1714 38.4012 89.0974 43.8418 90.8071C42.0326 88.4568 40.4399 85.0849 39.1414 80.9296C38.5874 79.1506 38.0766 77.2201 37.6222 75.1641H37.6265Z" />
            <path d="M22.5508 27.625H14.7383C10.8559 33.7281 8.51862 40.9047 8.26758 48.6093H18.2874C18.4562 40.9782 19.9885 33.8233 22.5508 27.625Z" />
            <path d="M27.4103 81.3191C26.0815 79.4276 24.8739 77.3672 23.8005 75.1641H16.6719C17.8405 76.7093 19.1087 78.168 20.4721 79.5315C24.3675 83.4271 29.0334 86.5565 34.2186 88.6731C31.7126 86.6604 29.4273 84.1802 27.4103 81.3148V81.3191Z" />
            <path d="M97.1088 50.0022H94.2132C94.2132 62.2214 89.2702 73.2545 81.263 81.2622C73.2514 89.2654 62.2187 94.2085 50 94.2128C37.7813 94.2128 26.7486 89.2698 18.737 81.2622C10.7341 73.2502 5.79125 62.217 5.78693 50.0022C5.78693 37.783 10.7298 26.7498 18.737 18.7378C26.7486 10.7302 37.7813 5.7914 50 5.78707C62.2187 5.78707 73.2514 10.7302 81.263 18.7378C89.2659 26.7498 94.2089 37.783 94.2132 50.0022H100C100 22.3867 77.6186 0 50 0C22.3857 0 0.00432825 22.3824 0 50.0022C0 77.6176 22.3814 100 50 100C77.6143 100 99.9957 77.6176 100 50.0022H97.1044H97.1088Z" />
          </svg>
          <div className="w-[500px]">
            <p className="text-neutral pb-[10px]">
              <span className="font-thedusCLB text-2xl">
                Hoku<span className="text-accent">3d</span>
              </span>{" "}
              pakub kolme standardset filamenti ning kasutame peamiselt musta ja
              valget värvi. Muude värvide kasutamine toimub kliendi soovil
              lisatasu eest.
            </p>
            {/* DECORATION */}
            <div className="w-[full] h-[20px] bg-accent"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-center flex-col h-full w-full"
        >
          {/* SUBHEADER */}
          <div className="w-[500px] flex items-center gap-[16px] px-[20px] py-[10px]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="fill-accent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40.2826 19.4413L30.5607 0H19.4437L9.72185 19.4413L0 38.8826L5.55852 50H44.4415L50 38.8826L40.2781 19.4413H40.2826ZM25.0022 35.176H16.6778L20.8411 26.852L25.0022 18.5281L29.1656 26.852L33.3289 35.176H25.0044H25.0022Z" />
            </svg>
            <h2 className="text-[36px] font-thedusCLR text-neutral">
              filament
            </h2>
          </div>
          <div className="mid flex-col">
            {/* PLA */}
            <div className="flex w-[500px] border-b-2 border-secondary px-[10px] py-[24px] gap-[50px]">
              <div className="flex flex-col justify-center items-center w-[80px]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-neutral"
                >
                  <path d="M30.0001 20.2883C35.5248 20.2883 40.0001 15.7484 40.0001 10.1441C40.0001 4.53982 35.5217 0 30.0001 0C24.4784 0 20 4.53982 20 10.1441C20 15.7484 24.4784 20.2883 30.0001 20.2883Z" />
                  <path d="M10.0001 19.8555C4.47841 19.8555 0 24.3984 0 29.9996C0 35.6008 4.47841 40.1437 10.0001 40.1437C15.5217 40.1437 20.0001 35.6008 20.0001 29.9996C20.0001 24.3984 15.5248 19.8555 10.0001 19.8555Z" />
                  <path d="M50.0001 19.8555C44.4754 19.8555 40 24.3984 40 29.9996C40 35.6008 44.4754 40.1437 50.0001 40.1437C55.5247 40.1437 60.0001 35.6008 60.0001 29.9996C60.0001 24.3984 55.5217 19.8555 50.0001 19.8555Z" />
                  <path d="M30.0001 39.7109C24.4784 39.7109 20 44.2508 20 49.855C20 55.4593 24.4784 59.9992 30.0001 59.9992C35.5217 59.9992 40.0001 55.4593 40.0001 49.855C40.0001 44.2508 35.5217 39.7109 30.0001 39.7109Z" />
                </svg>
                <h3 className="font-thedusWLB text-[24px] text-neutral">PLA</h3>
              </div>
              <div>
                <ul role="list" className="w-[420px] text-left text-secondary">
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Keskkonnasõbralik" />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Suurepärane detail" />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Sobib prototüüpide jaoks" />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Sobib dekoratiivesemetele" />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem
                      type="con"
                      text="Madal soojustaluvus (pehmeneb ~60°C juures)"
                    />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem
                      type="con"
                      text="Teiste plastmassidega võrreldes rabe"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* PETG */}
            <div className="flex w-[500px] border-b-2 border-secondary px-[10px] py-[24px] gap-[50px]">
              <div className="flex flex-col justify-center items-center w-[80px]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-neutral"
                >
                  <path d="M13.8514 20.8568C19.0482 19.6409 22.2668 14.4788 21.0402 9.3271C19.8137 4.17536 14.6065 0.984805 9.40965 2.20073C4.21284 3.41665 0.994312 8.57861 2.22087 13.7303C3.44743 18.8821 8.6546 22.0727 13.8514 20.8568Z" />
                  <path d="M50.3323 21.0886C55.6707 21.0886 60.0005 16.7992 60.0005 11.5042C60.0005 6.20921 55.6707 1.91992 50.3323 1.91992C44.9939 1.91992 40.6641 6.20921 40.6641 11.5042C40.6641 16.7992 44.9939 21.0886 50.3323 21.0886Z" />
                  <path d="M30.9944 20.6816C25.6559 20.6816 21.3262 24.9738 21.3262 30.2659C21.3262 35.558 25.6559 39.8503 30.9944 39.8503C36.3328 39.8503 40.6626 35.558 40.6626 30.2659C40.6626 24.9738 36.3357 20.6816 30.9944 20.6816Z" />
                  <path d="M13.2391 58.4635C18.5097 57.6154 22.0889 52.6922 21.2333 47.4673C20.3778 42.2424 15.4116 38.6943 10.1409 39.5425C4.87032 40.3906 1.2912 45.3137 2.14674 50.5386C3.00229 55.7635 7.96851 59.3116 13.2391 58.4635Z" />
                  <path d="M50.3323 39.4414C44.9939 39.4414 40.6641 43.7307 40.6641 49.0257C40.6641 54.3207 44.9939 58.6101 50.3323 58.6101C55.6707 58.6101 60.0005 54.3207 60.0005 49.0257C60.0005 43.7307 55.6707 39.4414 50.3323 39.4414Z" />
                </svg>
                <h3 className="font-thedusWLB text-[24px] text-neutral">
                  PETG
                </h3>
              </div>
              <div>
                <ul role="list" className="w-[420px] text-left text-secondary">
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Tugev ja vastupidav" />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem
                      type="pro"
                      text="Kõrge soojustaluvus kuni ~100°C"
                    />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem
                      type="pro"
                      text="Sobib funktsionaalsete osade jaoks"
                    />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Sobib autoosade jaoks" />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem
                      type="pro"
                      text="Sobib tugevate prototüüpide jaoks"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* ABS */}
            <div className="flex w-[500px] px-[10px] py-[24px] gap-[50px]">
              <div className="flex flex-col justify-center items-center w-[80px]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-neutral"
                >
                  <path d="M33.8278 21.0229C38.9302 19.0307 41.3532 13.5167 39.2397 8.70702C37.1262 3.89738 31.2766 1.61347 26.1742 3.60568C21.0718 5.5979 18.6488 11.1118 20.7623 15.9215C22.8758 20.7311 28.7254 23.0151 33.8278 21.0229Z" />
                  <path d="M52.0622 21.5386C56.595 20.6435 59.9999 16.8525 59.9999 12.3148C59.9999 7.10715 55.5215 2.88867 49.9999 2.88867C44.4784 2.88867 40 7.10715 40 12.3148C40 16.8554 43.4049 20.6435 47.9376 21.5386C43.4049 22.4336 40 26.2245 40 30.7623C40 35.9699 44.4784 40.1884 49.9999 40.1884C55.5215 40.1884 59.9999 35.967 59.9999 30.7623C59.9999 26.2245 56.595 22.4336 52.0622 21.5386Z" />
                  <path d="M12.0622 39.9887C16.595 39.0937 19.9999 35.3026 19.9999 30.762C19.9999 25.5573 15.5245 21.3359 9.99993 21.3359C4.47534 21.3359 0 25.5573 0 30.762C0 35.3026 3.40487 39.0908 7.93764 39.9887C3.40487 40.8837 0 44.6747 0 49.2125C0 54.4201 4.47836 58.6386 9.99993 58.6386C15.5215 58.6386 19.9999 54.4201 19.9999 49.2125C19.9999 44.6718 16.595 40.8837 12.0622 39.9887Z" />
                  <path d="M31.6318 58.489C37.0832 57.6549 40.7852 52.813 39.9003 47.6743C39.0154 42.5357 33.8788 39.0462 28.4273 39.8803C22.9759 40.7144 19.274 45.5563 20.1589 50.6949C21.0438 55.8336 26.1803 59.3231 31.6318 58.489Z" />
                </svg>
                <h3 className="font-thedusWLB text-[24px] text-neutral">ABS</h3>
              </div>
              <div>
                <ul role="list" className="w-[420px] text-left text-secondary">
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Tugev ja paindlik" />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem
                      type="pro"
                      text="Keemiline vastupidavus (talub vett ja happeid)"
                    />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem
                      type="pro"
                      text="Sobib hästi pingele avatud funktsionaalsete osade ja välistingimustes kasutamiseks"
                    />
                  </li>
                  <li className="flex items-center space-x-3">
                    <ProsConsItem type="pro" text="Sobib dekoratiivesemetele" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Plastic;
