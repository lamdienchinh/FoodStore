import "./AboutUs.css"

function AboutUs() {
    return (
        <div className="flex flex-row relative w-[auto] pt-[120px] bg-primary-background gap-[50px] pb-[50px] max-xl:flex-col max-xl:pt-[40px]">
            <div className="text-left w-[50%] max-xl:w-[100%]">
                <div className="special-font pb-[8px] sm:max-lg:text-[40px] max-2xl:text-[20px] max-sm:text-[32px]">
                    About Us
                </div>
                <div className="font-['Helvetica'] text-[60px] max-lg:text-[68px] max-[500px]:text-[36px] max-sm:text-[42px] max-2xl:text-[36px] leading-[56px] font-[700] text-[#FFF] mb-[32px]">
                    <span className="text-primary-orange font-['Helvetica']">We </span>
                    Create the best Foody product
                </div>
                <div className="w-[100%] font-['Inter'] leading-[24px] font-[400] text-[16px] text-[#FFF] pb-[24px] max-lg:text-[16px] max-2xl:text-[14px] max-sm:text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </div>
                <div className="flex flex-col gap-[24px] font-['Inter'] text-[18px] leading-[26px] text-[#FFF] max-lg:text-[16px] max-2xl:text-[14px] max-sm:text-[14px]">
                    <div className="flex flex-row items-center">
                        <svg className="mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                            <path d="M6.51 12.0033C6.34157 12.155 6.12291 12.2389 5.89621 12.2389C5.66951 12.2389 5.45085 12.155 5.28242 12.0033L0.381001 7.45772C0.261114 7.35024 0.165222 7.21871 0.0995756 7.0717C0.0339289 6.92469 0 6.7655 0 6.60451C0 6.44351 0.0339289 6.28432 0.0995756 6.13731C0.165222 5.9903 0.261114 5.85877 0.381001 5.75129L0.994789 5.18199C1.24727 4.95412 1.57533 4.82797 1.91547 4.82797C2.25561 4.82797 2.58366 4.95412 2.83615 5.18199L5.89621 8.01963L14.1638 0.354017C14.4163 0.126142 14.7444 0 15.0845 0C15.4247 0 15.7527 0.126142 16.0052 0.354017L16.619 0.923318C16.7389 1.0308 16.8348 1.16233 16.9004 1.30934C16.9661 1.45635 17 1.61554 17 1.77653C17 1.93753 16.9661 2.09672 16.9004 2.24372C16.8348 2.39073 16.7389 2.52226 16.619 2.62975L6.51 12.0033Z" fill="white" />
                        </svg>
                        Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </div>
                    <div className="flex flex-row items-center">
                        <svg className="mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                            <path d="M6.51 12.0033C6.34157 12.155 6.12291 12.2389 5.89621 12.2389C5.66951 12.2389 5.45085 12.155 5.28242 12.0033L0.381001 7.45772C0.261114 7.35024 0.165222 7.21871 0.0995756 7.0717C0.0339289 6.92469 0 6.7655 0 6.60451C0 6.44351 0.0339289 6.28432 0.0995756 6.13731C0.165222 5.9903 0.261114 5.85877 0.381001 5.75129L0.994789 5.18199C1.24727 4.95412 1.57533 4.82797 1.91547 4.82797C2.25561 4.82797 2.58366 4.95412 2.83615 5.18199L5.89621 8.01963L14.1638 0.354017C14.4163 0.126142 14.7444 0 15.0845 0C15.4247 0 15.7527 0.126142 16.0052 0.354017L16.619 0.923318C16.7389 1.0308 16.8348 1.16233 16.9004 1.30934C16.9661 1.45635 17 1.61554 17 1.77653C17 1.93753 16.9661 2.09672 16.9004 2.24372C16.8348 2.39073 16.7389 2.52226 16.619 2.62975L6.51 12.0033Z" fill="white" />
                        </svg>
                        Quisque diam pellentesque bibendum non dui volutpat fringilla
                    </div>
                    <div className="flex flex-row items-center">
                        <svg className="mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                            <path d="M6.51 12.0033C6.34157 12.155 6.12291 12.2389 5.89621 12.2389C5.66951 12.2389 5.45085 12.155 5.28242 12.0033L0.381001 7.45772C0.261114 7.35024 0.165222 7.21871 0.0995756 7.0717C0.0339289 6.92469 0 6.7655 0 6.60451C0 6.44351 0.0339289 6.28432 0.0995756 6.13731C0.165222 5.9903 0.261114 5.85877 0.381001 5.75129L0.994789 5.18199C1.24727 4.95412 1.57533 4.82797 1.91547 4.82797C2.25561 4.82797 2.58366 4.95412 2.83615 5.18199L5.89621 8.01963L14.1638 0.354017C14.4163 0.126142 14.7444 0 15.0845 0C15.4247 0 15.7527 0.126142 16.0052 0.354017L16.619 0.923318C16.7389 1.0308 16.8348 1.16233 16.9004 1.30934C16.9661 1.45635 17 1.61554 17 1.77653C17 1.93753 16.9661 2.09672 16.9004 2.24372C16.8348 2.39073 16.7389 2.52226 16.619 2.62975L6.51 12.0033Z" fill="white" />
                        </svg>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                </div>
                <button className="flex mt-[32px] items-center justify-center w-[190px] h-[60px] rounded-[30px] bg-primary-orange text-[#FFF]">
                    Read More
                </button>
            </div>
            <div className="flex flex-col w-[50%] h-[100%] max-xl:w-[100%] justify-center items-center">
                <div className="w-[100%] h-[100%] flex justify-center">
                    <img className="object-cover w-[100%] h-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277131/pkm2dzdyofq4h4iz6ywb.png"></img>
                </div>
                <div className="w-[100%] flex flex-row h-[100%] justify-center">
                    <div className="mt-[16px] w-[50%] h-[auto] mr-[16px]">
                        <img className="object-cover w-[100%] h-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277130/y4lkfajcvab9kbmrb2ix.png"></img>
                    </div>
                    <div className="mt-[16px] w-[50%] h-[auto]">
                        <img className="object-cover w-[100%] h-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277130/mg7ciz0uv8fyqtedkvo7.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs