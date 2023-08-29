import "./contact.css";

function Contact() {
    return (
        <>
            <div className="flex w-[1169px] ml-[381px] mr-[370px] pt-[120px] flex-wrap justify-between">
                <div className="flex flex-col w-[439px]">
                    <div className="flex flex-row content-start items-start justify-items-start w-[439px] h-[39.903px] shrink-0 font-['Heltivica'] font-[700] text-[32px] not-italic leading-[40px]" >
                        <span className="text-primary-orange leading-[40px]">St</span>
                        <span className="text-[#FFF] leading-[40px]">ill You Need Our Support ?</span>
                    </div>
                    <div className="flex flex-col content-start items-start justify-items-start leading-[24px] w-[457px] h-[23.942px] shrink-0 font-['Heltivica'] font-[400] text-[16px] not-italic text-[#FFF]">
                        Don’t wait make a smart & logical quote here. Its pretty easy.
                    </div>
                </div>
                <div className="flex flex-row h-[55.864px]">
                    <div className="text-opacity-[0.59] text-[#FFF] pl-[20px] pt-[15.96px] pb-[15.9px] flex flex-row content-start items-center w-[296px] h-[55.864px] shrink-0 bg-primary-orange font-['Inter'] text-[16x] font-[400] leading-[24[px]">
                        <input outline="none" type="text" className="placeholder-opacity-[0.59] placeholder-[#FFF] text-[#FFF] focus:outline-none focus:bg-transparent focus:border-gray-300 focus:ring-0 border-[none] pl-[20px] pt-[15.96px] pb-[15.9px] flex flex-row items-center w-[296px] h-[55.864px] shrink-0 bg-primary-orange font-['Inter'] text-[16px] font-[400] leading-[24[px]" placeholder="Enter Your Email">

                        </input>
                    </div>
                    <div className="justify-center content-center text-primary-orange pl-[24px] pt-[15.96px] pb-[15.9px] pr-[24px] flex flex-row items-center w-[163px] h-[55.864px] shrink-0 bg-[#FFF] font-['Inter'] text-[16x] font-[400] leading-[24[px]">
                        Subcribe Now
                    </div>
                </div>
            </div>
            <div className="absolute top-[231.73px] right-[370px] left-[381px] bottom-[542px] w-[1169px] h-[1px] bg-primary-orange">
            </div>
        </>
    );
}

export default Contact;