import facebook from "../../../../assets/facebook.png"
import twt from "../../../../assets/twitter.png"
import ins from "../../../../assets/insta.png"
import youtube from "../../../../assets/youtube.png"
import other from "../../../../assets/kh.png"
function Media() {
    return (
        <div className="mt-[18px] mx-[auto] w-[auto] bg-[#4F4F4F] w-[100%] py-[20px] px-[152px] flex flex-row bg-primary-orange">
            <div className="text-left font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#FFF] w-[50%]">
                Copyright © 2022 by Ayeman. All Rights Reserved.
            </div>
            <div className="justify-end flex flex-row w-[50%]">
                <div className="cursor-pointer w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[10px] h-[18px]" src={facebook} alt="link facebook"></img>
                </div>
                <div className="cursor-pointer w-[35.8px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={twt} alt="link twitter"></img>
                </div>
                <div className="cursor-pointer w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={ins} alt="link twitter"></img>
                </div>
                <div className="cursor-pointer w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={youtube} alt="link twitter"></img>
                </div>
                <div className="cursor-pointer w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={other} alt="link twitter"></img>
                </div>
            </div>
        </div>
    );
}

export default Media;