import Header from "../layout/header"
import { useState } from "react";
import gg from "../../assets/Google.png"
// import img from "../../assets/signin_img.png"
import "./signin.css"
import Footer from "../layout/footer";

function SignIn() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="relative w-[1920px] h-[2028px]">
            <div className="custom-background w-[1920px] h-[1414px] pb-[160px]">
                <div className="w-[1920px] h-[140px] bg-primary-background">
                    <Header></Header>
                </div>
                <div className="custom-bg w-[1920px] h-[410px] flex flex-column justify-center items-center flex-col">
                    <div className="font-['Helvetica'] text-[48px] font-[700] leading-[56px] text-[#FFF] pb-20px">
                        Sign in page
                    </div>
                    <div className="font-['Inter'] text-[20px] font-[400] leading-[28px] text-[#FFF]">
                        Home {`>`} <span className="text-primary-orange">sign in</span>
                    </div>
                </div>
                <div className="h-[864px] bg-[#FFF] flex justify-center items-center">
                    <div className="relative custom-box flex flex-col">
                        <h1 className="text-start pt-[32px] pl-[32px] pb-[32px] text-[#333] font-['Helvetica'] text-[20px] font-[700] leading-[28px]">
                            Sign In
                        </h1>
                        <form className="flex w-[360px] h-[44px] border border-solid border-[#E0E0E0] self-center pl-[16px] pt-[10px] pb-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input className="focus:text-[#4F4F4F] pl-[8px] focus:outline-none focus:border-gray-300 focus:ring-0 border-[none]" placeholder="Email"></input>
                        </form>
                        <form className="mt-[16px] flex w-[360px] h-[44px] border border-solid border-[#E0E0E0] self-center pl-[16px] pt-[10px] pb-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15.375C12.6213 15.375 13.125 14.8713 13.125 14.25C13.125 13.6287 12.6213 13.125 12 13.125C11.3787 13.125 10.875 13.6287 10.875 14.25C10.875 14.8713 11.3787 15.375 12 15.375Z" fill="#4F4F4F" />
                            </svg>
                            <input className="focus:text-[#4F4F4F] pl-[8px] focus:outline-none focus:border-gray-300 focus:ring-0 border-[none]" placeholder="Password"></input>
                        </form>
                        <div className="text-left pl-[34px] pt-[19px] pb-[32px]">
                            <input
                                className="custom-checkbox bg-primary-orange text-primary-orange focus:text-primary-orange mr-[10px]"
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                id="myCheckbox"
                            />
                            <label for="myCheckbox"></label>
                            Remember me?
                        </div>
                        <button className="w-[360px] h-[44px] self-center rounded-[0] bg-primary-orange text-[#FFF] text-[16px] font-[400]">Sign Up</button>
                        <div className="text-end pr-[32px] pt-[16px] text-[#828282] text-[14px] leading-[22px]">Forget password?</div>
                        <div className="flex flex-row items-center content-center justify-center pb-[32px]">
                            <div className="w-[168px] h-[1px] bg-[#E0E0E0]"></div>
                            <div className="p-[5px] border border-[#E0E0E0] cursor-pointer">OR</div>
                            <div className="w-[168px] h-[1px] bg-[#E0E0E0]"></div>
                        </div>
                        <div className="border border-[#E0E0E0] relative w-[360px] flex flex-row px-[16px] py-[10px] mb-[32px] cursor-pointer font-['Helvetica'] text-[16px] leading-[24px] text-center justify-center items-center self-center">
                            <img className="absolute left-[16px] justify-self-start self-start" src={gg} alt="google logo"></img>
                            <div className="justify-self-center self-center">
                                Sign Up with Google
                            </div>
                        </div>
                        <div className="border border-[#E0E0E0] relative w-[360px] flex flex-row px-[16px] py-[10px] mb-[32px] cursor-pointer font-['Helvetica'] text-[16px] leading-[24px] text-center justify-center items-center self-center">
                            <svg className="absolute left-[16px] justify-self-start self-start" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.6313 10.534C15.6224 8.90075 16.3614 7.668 17.8572 6.76012C17.0203 5.56297 15.7559 4.90432 14.0865 4.77525C12.506 4.65064 10.7787 5.69648 10.1465 5.69648C9.47873 5.69648 7.94727 4.81976 6.74525 4.81976C4.26108 4.85981 1.62109 6.80018 1.62109 10.7477C1.62109 11.9137 1.83479 13.1182 2.26217 14.3614C2.83202 15.9947 4.8888 20 7.03463 19.9332C8.15651 19.9065 8.94895 19.1366 10.4092 19.1366C11.8249 19.1366 12.5595 19.9332 13.8104 19.9332C15.9741 19.9021 17.835 16.2617 18.3781 14.6239C15.4755 13.2577 15.6313 10.6186 15.6313 10.534ZM13.1115 3.22652C14.3269 1.7846 14.2156 0.47174 14.18 0C13.107 0.0623053 11.865 0.729862 11.1571 1.55318C10.378 2.43436 9.91947 3.5247 10.0174 4.753C11.1794 4.84201 12.2389 4.24566 13.1115 3.22652Z" fill="black" />
                            </svg>
                            <div className="justify-self-center self-center">
                                Sign Up with Apple
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    )
}

export default SignIn