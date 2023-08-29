import facebook from "../../../../assets/facebook.png"
import twt from "../../../../assets/twitter.png"
import ins from "../../../../assets/insta.png"
import youtube from "../../../../assets/youtube.png"
import other from "../../../../assets/kh.png"
function Media() {
    return (
        <div className="w-[1920px] h-[99px] bg-[#4F4F4F] absolute bottom-0">
            <div className="absolute left-[301px] top-[37px] bottom-[38px] font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#FFF]">
                Copyright © 2022 by Ayeman. All Rights Reserved.
            </div>
            <div className="flex flex-row absolute right-[314.87px] top-[40.25px] bottom-[40.75px]">
                <div className="w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[10px] h-[18px]" src={facebook} alt="link facebook"></img>
                </div>
                <div className="w-[35.8px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={twt} alt="link twitter"></img>
                </div>
                <div className="w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={ins} alt="link twitter"></img>
                </div>
                <div className="w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={youtube} alt="link twitter"></img>
                </div>
                <div className="w-[35.85px] h-[33px] bg-[#FFF] flex items-center justify-center mr-[13.94px]">
                    <img className="object-contain w-[16px] h-[18px]" src={other} alt="link twitter"></img>
                </div>
            </div>
        </div>
    );
}

export default Media;