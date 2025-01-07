import React from "react";

const Gallery = () => {
  return (
    <div className="w-[1440px] min-h-[960px] mt-[15rem] relative flex justify-center">
        <div className="absolute">
            <svg width="1240" height="700" viewBox="0 0 1240 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5 2.5H1139.06L1237.5 88.6344V697.5H42.5V2.5Z" stroke="white" strokeWidth="5"/>
                <path d="M0 320L20 300H40V700H0V320Z" fill="white"/>
                <path d="M25.3086 669.461C25.6836 669.461 26.0859 669.527 26.5156 669.66C26.9453 669.785 27.3438 669.996 27.7109 670.293C28.0781 670.582 28.3867 670.961 28.6367 671.43C28.8789 671.898 29 672.473 29 673.152V684.719C29 684.938 28.9609 685.141 28.8828 685.328C28.8047 685.516 28.6992 685.68 28.5664 685.82C28.4258 685.953 28.2617 686.059 28.0742 686.137C27.8867 686.215 27.6836 686.254 27.4648 686.254H13.7305C13.5195 686.254 13.3203 686.215 13.1328 686.137C12.9453 686.059 12.7812 685.953 12.6406 685.82C12.5 685.68 12.3906 685.516 12.3125 685.328C12.2344 685.141 12.1953 684.938 12.1953 684.719V674.523C12.1953 674.148 12.2617 673.746 12.3945 673.316C12.5273 672.887 12.7422 672.488 13.0391 672.121C13.3281 671.746 13.707 671.438 14.1758 671.195C14.6445 670.945 15.2188 670.82 15.8984 670.82H16.4727C17.0117 670.82 17.5938 670.91 18.2188 671.09C18.8359 671.27 19.4219 671.559 19.9766 671.957C20.1875 671.613 20.4414 671.293 20.7383 670.996C21.0352 670.691 21.3789 670.426 21.7695 670.199C22.1602 669.973 22.6016 669.793 23.0938 669.66C23.5859 669.527 24.1289 669.461 24.7227 669.461H25.3086ZM24.7227 672.508C24.3242 672.508 23.9688 672.57 23.6562 672.695C23.3359 672.82 23.0625 672.996 22.8359 673.223C22.6094 673.449 22.4375 673.723 22.3203 674.043C22.1953 674.363 22.1328 674.723 22.1328 675.121V681.988H19.0625V676.492C19.0625 676.094 19.0039 675.734 18.8867 675.414C18.7617 675.094 18.5859 674.82 18.3594 674.594C18.1328 674.367 17.8633 674.195 17.5508 674.078C17.2305 673.953 16.8711 673.891 16.4727 673.891H15.8984C15.4609 673.891 15.2422 674.102 15.2422 674.523V683.207H25.9531V673.152C25.9531 673.098 25.9492 673.031 25.9414 672.953C25.9336 672.875 25.9102 672.805 25.8711 672.742C25.832 672.68 25.7656 672.625 25.6719 672.578C25.5781 672.531 25.4492 672.508 25.2852 672.508H24.7227ZM22.1328 652.984V662.605H19.0625V652.984H22.1328ZM29 651.613V662.605C29 663.027 28.9258 663.488 28.7773 663.988C28.6289 664.488 28.3867 664.953 28.0508 665.383C27.707 665.805 27.2656 666.16 26.7266 666.449C26.1797 666.73 25.5117 666.871 24.7227 666.871H13.7305C13.5195 666.871 13.3203 666.832 13.1328 666.754C12.9453 666.676 12.7812 666.57 12.6406 666.438C12.5 666.297 12.3906 666.133 12.3125 665.945C12.2344 665.758 12.1953 665.555 12.1953 665.336V651.613H15.2422V663.824H24.7227C25.1211 663.824 25.4258 663.719 25.6367 663.508C25.8477 663.297 25.9531 662.988 25.9531 662.582V651.613H29ZM24.0547 632.582C24.6562 632.582 25.1992 632.66 25.6836 632.816C26.1602 632.965 26.582 633.164 26.9492 633.414C27.3164 633.664 27.6289 633.957 27.8867 634.293C28.1445 634.629 28.3555 634.977 28.5195 635.336C28.6836 635.695 28.8047 636.062 28.8828 636.438C28.9609 636.805 29 637.152 29 637.48V649.234H25.9531V637.48C25.9531 636.895 25.7812 636.441 25.4375 636.121C25.0938 635.793 24.6328 635.629 24.0547 635.629C23.7734 635.629 23.5156 635.672 23.2812 635.758C23.0469 635.844 22.8438 635.969 22.6719 636.133C22.5 636.289 22.3672 636.484 22.2734 636.719C22.1797 636.945 22.1328 637.199 22.1328 637.48V644.488C22.1328 644.98 22.0469 645.512 21.875 646.082C21.6953 646.652 21.4102 647.184 21.0195 647.676C20.6289 648.16 20.1172 648.566 19.4844 648.895C18.8516 649.215 18.0781 649.375 17.1641 649.375C16.25 649.375 15.4805 649.215 14.8555 648.895C14.2227 648.566 13.7109 648.16 13.3203 647.676C12.9219 647.184 12.6367 646.652 12.4648 646.082C12.2852 645.512 12.1953 644.98 12.1953 644.488V634.117H15.2422V644.488C15.2422 645.066 15.418 645.52 15.7695 645.848C16.1211 646.168 16.5859 646.328 17.1641 646.328C17.75 646.328 18.2148 646.168 18.5586 645.848C18.8945 645.52 19.0625 645.066 19.0625 644.488V637.48V637.457C19.0703 637.129 19.1172 636.781 19.2031 636.414C19.2812 636.047 19.4062 635.684 19.5781 635.324C19.75 634.957 19.9688 634.609 20.2344 634.281C20.4922 633.953 20.8047 633.664 21.1719 633.414C21.5391 633.156 21.9609 632.953 22.4375 632.805C22.9141 632.656 23.4531 632.582 24.0547 632.582ZM15.2422 615.051V621.766H29V624.812H15.2422V631.539H12.1953V615.051H15.2422ZM19.2266 588.508C19.9219 588.508 20.543 588.594 21.0898 588.766C21.6367 588.938 22.1211 589.172 22.543 589.469C22.957 589.758 23.3125 590.094 23.6094 590.477C23.9062 590.859 24.1484 591.262 24.3359 591.684C24.5234 592.098 24.6602 592.52 24.7461 592.949C24.832 593.371 24.875 593.77 24.875 594.145V601.035H21.8281V594.145C21.7969 593.754 21.7188 593.402 21.5938 593.09C21.4609 592.77 21.2852 592.496 21.0664 592.27C20.8477 592.043 20.5859 591.867 20.2812 591.742C19.9688 591.617 19.6172 591.555 19.2266 591.555H17.8438C17.4609 591.594 17.1094 591.676 16.7891 591.801C16.4688 591.926 16.1953 592.098 15.9688 592.316C15.7422 592.527 15.5664 592.785 15.4414 593.09C15.3086 593.395 15.2422 593.746 15.2422 594.145V601.012C15.2422 601.418 15.3477 601.727 15.5586 601.938C15.7695 602.148 16.0742 602.254 16.4727 602.254H29V605.301H16.4727C15.6914 605.301 15.0273 605.16 14.4805 604.879C13.9336 604.59 13.4922 604.234 13.1562 603.812C12.8203 603.383 12.5781 602.918 12.4297 602.418C12.2734 601.918 12.1953 601.457 12.1953 601.035V594.145C12.1953 593.457 12.2852 592.84 12.4648 592.293C12.6367 591.746 12.8711 591.266 13.168 590.852C13.457 590.43 13.793 590.074 14.1758 589.785C14.5586 589.488 14.9609 589.246 15.3828 589.059C15.7969 588.863 16.2188 588.723 16.6484 588.637C17.0703 588.551 17.4688 588.508 17.8438 588.508H19.2266ZM17.8438 569.102C18.5391 569.102 19.1602 569.188 19.707 569.359C20.2539 569.531 20.7383 569.766 21.1602 570.062C21.5742 570.352 21.9297 570.688 22.2266 571.07C22.5234 571.453 22.7695 571.855 22.9648 572.277C23.1523 572.691 23.2891 573.113 23.375 573.543C23.4609 573.965 23.5039 574.363 23.5039 574.738L29 568.375V573.086L23.5039 579.438V581.629H20.457V574.738C20.4258 574.355 20.3477 574.008 20.2227 573.695C20.0898 573.375 19.9141 573.102 19.6953 572.875C19.4766 572.641 19.2148 572.461 18.9102 572.336C18.5977 572.211 18.2422 572.148 17.8438 572.148H15.9219C15.75 572.148 15.6211 572.172 15.5352 572.219C15.4414 572.258 15.375 572.312 15.3359 572.383C15.2891 572.445 15.2617 572.516 15.2539 572.594C15.2461 572.664 15.2422 572.73 15.2422 572.793V582.848H29V585.895H13.7305C13.5195 585.895 13.3203 585.855 13.1328 585.777C12.9453 585.699 12.7812 585.594 12.6406 585.461C12.5 585.32 12.3906 585.156 12.3125 584.969C12.2344 584.781 12.1953 584.578 12.1953 584.359V572.793C12.1953 572.113 12.3203 571.539 12.5703 571.07C12.8125 570.602 13.1211 570.223 13.4961 569.934C13.8633 569.637 14.2617 569.426 14.6914 569.301C15.1211 569.168 15.5234 569.102 15.8984 569.102H17.8438ZM29 562.973V566.02H12.1953V562.973H29ZM27.6992 542.617C27.918 542.617 28.1211 542.66 28.3086 542.746C28.4961 542.824 28.6602 542.934 28.8008 543.074C28.9336 543.207 29.0391 543.367 29.1172 543.555C29.1953 543.742 29.2344 543.941 29.2344 544.152C29.2344 544.34 29.1992 544.531 29.1289 544.727C29.0586 544.914 28.9453 545.082 28.7891 545.23L17.1641 556.363H29V559.41H13.4961C13.1836 559.41 12.9023 559.324 12.6523 559.152C12.3945 558.973 12.2031 558.746 12.0781 558.473C11.9609 558.184 11.9336 557.887 11.9961 557.582C12.0508 557.277 12.1914 557.016 12.418 556.797L24.0312 545.664H12.1953V542.617H27.6992ZM15.2422 523.879V530.594H29V533.641H15.2422V540.367H12.1953V523.879H15.2422ZM24.0547 505.48C24.6562 505.48 25.1992 505.559 25.6836 505.715C26.1602 505.863 26.582 506.062 26.9492 506.312C27.3164 506.562 27.6289 506.855 27.8867 507.191C28.1445 507.527 28.3555 507.875 28.5195 508.234C28.6836 508.594 28.8047 508.961 28.8828 509.336C28.9609 509.703 29 510.051 29 510.379V522.133H25.9531V510.379C25.9531 509.793 25.7812 509.34 25.4375 509.02C25.0938 508.691 24.6328 508.527 24.0547 508.527C23.7734 508.527 23.5156 508.57 23.2812 508.656C23.0469 508.742 22.8438 508.867 22.6719 509.031C22.5 509.188 22.3672 509.383 22.2734 509.617C22.1797 509.844 22.1328 510.098 22.1328 510.379V517.387C22.1328 517.879 22.0469 518.41 21.875 518.98C21.6953 519.551 21.4102 520.082 21.0195 520.574C20.6289 521.059 20.1172 521.465 19.4844 521.793C18.8516 522.113 18.0781 522.273 17.1641 522.273C16.25 522.273 15.4805 522.113 14.8555 521.793C14.2227 521.465 13.7109 521.059 13.3203 520.574C12.9219 520.082 12.6367 519.551 12.4648 518.98C12.2852 518.41 12.1953 517.879 12.1953 517.387V507.016H15.2422V517.387C15.2422 517.965 15.418 518.418 15.7695 518.746C16.1211 519.066 16.5859 519.227 17.1641 519.227C17.75 519.227 18.2148 519.066 18.5586 518.746C18.8945 518.418 19.0625 517.965 19.0625 517.387V510.379V510.355C19.0703 510.027 19.1172 509.68 19.2031 509.312C19.2812 508.945 19.4062 508.582 19.5781 508.223C19.75 507.855 19.9688 507.508 20.2344 507.18C20.4922 506.852 20.8047 506.562 21.1719 506.312C21.5391 506.055 21.9609 505.852 22.4375 505.703C22.9141 505.555 23.4531 505.48 24.0547 505.48Z" fill="#02020A"/>
                <path d="M12.728 472.44C13.616 471.816 15.392 470.712 16.544 470.16L17.168 471.576C15.92 472.152 14.408 473.016 13.328 473.808L12.728 472.44ZM11.504 469.344C12.344 468.72 14.144 467.568 15.248 466.992L15.92 468.384C14.672 469.032 13.208 469.896 12.152 470.688L11.504 469.344ZM22.688 487.728C22.16 487.128 21.728 486.672 21.104 486.048C19.952 484.896 17.288 482.808 15.488 481.296C13.976 480.024 13.712 478.896 15.272 477.264C16.64 475.8 18.8 473.736 20.288 472.344C22.016 470.712 24.608 468.312 26.6 466.464L28.352 468.12C26.288 469.824 23.816 471.936 22.064 473.496C20.504 474.888 18.128 477.096 17.12 478.104C16.232 479.04 16.304 479.496 17.312 480.312C18.704 481.464 21.344 483.48 22.664 484.56C23.288 485.064 24.032 485.568 24.512 485.952L22.688 487.728ZM12.968 445.355C13.16 445.499 13.688 445.811 14 445.931C16.376 446.891 19.736 448.715 21.944 450.707C24.944 453.395 27.8 456.827 29.528 460.619L27.92 462.155C26.432 458.267 23.552 454.739 20.816 452.267C18.968 450.635 16.112 448.883 14.12 448.259C14.12 449.123 14.12 456.803 14.12 457.619C14.12 458.483 14.216 459.779 14.24 460.043H12.08C12.128 459.731 12.224 458.363 12.224 457.619C12.224 456.683 12.224 449.267 12.224 448.355C12.224 447.587 12.152 446.939 12.032 446.555L12.968 445.355ZM20.696 450.395C22.856 447.803 26.216 444.611 28.208 442.979L29.672 444.635C27.392 446.363 24.32 449.171 22.04 451.763L20.696 450.395ZM26.888 432.467C25.544 432.467 14.936 432.467 12.944 432.467C12.248 432.467 11.192 432.515 10.424 432.635V430.283C11.168 430.379 12.2 430.451 12.944 430.451C16.664 430.451 25.76 430.427 26.888 430.427C27.656 430.427 28.952 430.379 29.744 430.283V432.611C28.976 432.491 27.776 432.467 26.888 432.467ZM16.736 430.883C17.648 427.715 19.496 422.867 20.792 420.203L22.832 421.043C21.368 423.779 19.664 428.267 18.848 430.883H16.736ZM11.768 397.211C12.656 397.211 13.352 396.515 13.352 395.627C13.352 394.763 12.656 394.043 11.768 394.043C10.904 394.043 10.184 394.763 10.184 395.627C10.184 396.515 10.904 397.211 11.768 397.211ZM11.768 398.315C10.28 398.315 9.08 397.115 9.08 395.627C9.08 394.139 10.28 392.939 11.768 392.939C13.256 392.939 14.456 394.139 14.456 395.627C14.456 397.115 13.256 398.315 11.768 398.315ZM13.376 396.227C13.712 396.395 14.12 396.491 14.576 396.587C17.096 397.115 20.984 398.267 23.432 400.187C26.264 402.371 28.472 405.227 29.864 409.619L28.064 411.251C26.888 406.595 24.848 403.907 22.28 401.891C20.12 400.187 16.76 399.083 14.456 398.747C14.456 400.139 14.456 409.643 14.456 411.035C14.456 411.995 14.504 412.811 14.552 413.411H12.416C12.488 412.763 12.584 411.803 12.584 411.011C12.584 409.643 12.584 400.067 12.584 398.987C12.584 398.603 12.56 398.147 12.44 397.691L13.376 396.227ZM10.808 373.931C11.384 373.979 12.08 374.003 12.896 374.003C13.832 374.003 15.872 374.003 16.76 374.003C22.544 374.003 24.44 374.771 26.48 376.523C28.352 378.059 29.408 380.459 30.008 382.211L28.352 383.795C27.776 381.587 26.84 379.547 25.136 378.059C23.168 376.355 21.2 376.043 16.688 376.043C15.752 376.043 13.736 376.043 12.896 376.043C12.08 376.043 11.384 376.115 10.808 376.187V373.931ZM11 385.067C11.456 385.115 12.152 385.139 12.704 385.139C13.424 385.139 19.712 385.139 20.72 385.139C21.344 385.139 22.136 385.115 22.568 385.067V387.251C22.184 387.203 21.416 387.155 20.72 387.155C19.688 387.155 13.424 387.155 12.704 387.155C12.296 387.155 11.456 387.179 11 387.251V385.067ZM11.432 363.083C12.56 361.403 15.056 358.307 16.376 356.987L17.912 358.475C16.664 359.699 14.072 362.675 12.896 364.475L11.432 363.083ZM27.512 365.147C26.888 360.971 25.424 357.851 24.008 355.571C21.68 351.851 18.128 348.947 15.152 347.555L17.216 346.403C20.192 348.035 23.456 350.819 25.736 354.443C27.248 356.867 28.736 359.891 29.48 363.899L27.512 365.147ZM26.888 336.467C25.544 336.467 14.936 336.467 12.944 336.467C12.248 336.467 11.192 336.515 10.424 336.635V334.283C11.168 334.379 12.2 334.451 12.944 334.451C16.664 334.451 25.76 334.427 26.888 334.427C27.656 334.427 28.952 334.379 29.744 334.283V336.611C28.976 336.491 27.776 336.467 26.888 336.467ZM16.736 334.883C17.648 331.715 19.496 326.867 20.792 324.203L22.832 325.043C21.368 327.779 19.664 332.267 18.848 334.883H16.736Z" fill="black"/>
            </svg>
        </div>
    </div>
  );
};

export default Gallery;
