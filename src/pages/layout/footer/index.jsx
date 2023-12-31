import Contact from "./contact";
import "./Footer.css";
import { recentPosts } from "../../../fakeData";
import Recent_Post from "./post";
import Media from "./media";
function Footer() {

    return (
        <div className="relative mx-[auto] h-[auto] w-[auto] bg-primary-background pt-[120px]">
            <div className="px-[10%]">
                <Contact />
                <div className="md:grid md:grid-cols-2 2xl:flex 2xl:flex-row 2xl:gap-[0px] min-[320px]:flex min-[320px]:flex-col min-[320px]:gap-[40px]">
                    <div className="flex flex-col 2xl:w-[35%] md:w-[100%]">
                        <div className="text-left shrink-0 font-['Helvetica'] text-[20px] leading-[28px] text-[#FFF] font-[700]">
                            About Us
                        </div>
                        <div className="mt-[31.9px] pr-[50px] shrink-0 text-[#FFF] font-['Helvetica'] text-[18px] font-[400] leading-[26px] text-left">
                            Corporate clients and leisure travelers has been relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.
                        </div>
                        <div className="flex flex-row mt-[24.92px]">
                            <div className="flex w-[77.234px] h-[70.786px] shrink-0 bg-primary-orange text-justify items-center content-center justify-center mr-[17.3px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39.607" height="39.326" viewBox="0 0 39.607 39.326" fill="none">
                                    <path d="M20.6167 12.4502V19.8238" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.0481 23.5105L20.6167 19.8237" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M29.3066 15.4789H35.4953V9.33423" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30.2442 29.3826C28.3401 31.2731 25.9141 32.5606 23.2731 33.0822C20.632 33.6038 17.8945 33.3361 15.4067 32.3129C12.9189 31.2898 10.7925 29.5571 9.29649 27.3341C7.80046 25.111 7.00195 22.4974 7.00195 19.8237C7.00195 17.1501 7.80046 14.5365 9.29649 12.3134C10.7925 10.0904 12.9189 8.35772 15.4067 7.33456C17.8945 6.3114 20.632 6.04369 23.2731 6.5653C25.9141 7.0869 28.3401 8.37438 30.2442 10.2649L35.4954 15.4788" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="text-left text-[#FFF] font-['Inter'] font-[400px]">
                                <div className="leading-[26px] text-[18px]">
                                    Opening Hours
                                </div>
                                <div className="leading-[22px] text-[14px]">
                                    Mon - Sat(8.00 - 6.00)
                                </div>
                                <div className="leading-[22px] text-[14px]">
                                    Sunday - Closed
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="font-['Helvetica'] text-[#FFF] 2xl:w-[20%]  md:w-[100%]">
                        <h1 className="text-left font-[700] leading-[28px] text-[20px] mb-[23.93px] font-['Helvetica']">
                            Useful Links
                        </h1>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            About
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            News
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Partners
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Team
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Menu
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Contact
                        </h3>
                    </div>
                    <div className="font-['Helvetica'] text-[#FFF] 2xl:w-[20%]  md:w-[100%]">
                        <h1 className="text-left font-[700] leading-[28px] text-[20px] mb-[23.93px] font-['Helvetica']">
                            Help?
                        </h1>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            FAQ
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Team & Condition
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Reporting
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Documentation
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Support Policy
                        </h3>
                        <h3 className="footer-link text-left mb-[15.95px] text-[16px] leading-[24px]">
                            Privacy
                        </h3>
                    </div>
                    <div className="h-[100%] font-['Helvetica'] text-[#FFF] 2xl:w-[25%]  md:w-[100%]">
                        <h1 className="text-left text-[20px] font-[700] mb-[31.9px] font-['Helvetica']">Recent Posts</h1>
                        {recentPosts && recentPosts.map((post, index) => (
                            <Recent_Post post={post} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-[200px]">
                <img className="w-[180px] absolute bottom-[0px] right-[0px]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693367057/oyhgi1rsk6djozjmwywj.png" alt="ảnh nền"></img>
            </div>
            <Media />
        </div>
    );
}

export default Footer;