import "./Contact.css";

function Contact() {
    return (
        <>
            <div className="mx-[auto] flex min-[320px]:flex-col min-[320px]:gap-[10px] md:flex-row items-center justify-center w-[100%]">
                <div className="flex flex-col xl:w-[50%] min-[320px]:w-[100%] justify-start items-start">
                    <div className="w-[100%] text-start font-['Heltivica'] font-[700] text-[32px] not-italic" >
                        <span className="text-primary-orange font-['Helvetica']">St</span>
                        <span className="text-[#FFF] font-['Helvetica']">ill You Need Our Support ?</span>
                    </div>
                    <div className="text-start mb-[12px] flex flex-col content-start items-start justify-items-start shrink-0 font-['Heltivica'] font-[400] text-[16px] not-italic text-[#FFF]">
                        Don’t wait make a smart & logical quote here. Its pretty easy.
                    </div>
                </div>
                <div className="min-[320px]:flex-col flex md:flex-row xl:w-[50%] self-end justify-end min-[320px]:w-[100%]">
                    <div className="min-[320px]:w-[100%] md:w-[60%] lg:w-[70%] text-opacity-[0.59] text-[#FFF] pl-[20px] pt-[15.96px] pb-[15.9px] flex flex-row content-start items-center shrink-0 bg-primary-orange font-['Inter'] text-[16x] font-[400] leading-[24px]">
                        <input outline="none" type="text" className="min-[320px]:text-center md:text-left min-[320px]:w-[100%] placeholder-opacity-[0.59] placeholder-[#FFF] text-[#FFF] pr-[20px] focus:outline-none focus:bg-transparent focus:border-gray-300 focus:ring-0 border-[none] flex flex-row items-center bg-primary-orange font-['Inter'] text-[16px] font-[400] leading-[24[px]" placeholder="Enter Your Email">
                        </input>
                    </div>
                    <div className="min-[320px]:w-[100%] md:w-[40%] lg:w-[30%] cursor-pointer justify-center content-center text-primary-orange pl-[24px] pt-[15.96px] pb-[15.9px] pr-[24px] flex flex-row items-center h-[55.864px] shrink-0 bg-[#FFF] font-['Inter'] text-[16x] font-[400] leading-[24[px]">
                        Subcribe Now
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-[1px] bg-primary-orange mt-[60px] mb-[60px]">
            </div>
        </>
    );
}

export default Contact;