import Header from "../../layout/header"
import CircleSelector from "../circle"
import p from "../../../assets/p.png"
import twt from "../../../assets/twt.png"
import "./Banner.css"
import Sidebar from "../../layout/sidebar"

function Banner() {
    return (
        <div className="h-[100%] pb-[60px] relative w-[auto] min-[320px]:pb-[22px]">
            <div className="px-[10%] max-xl:hidden block">
                <Header />
            </div>
            <div className="px-[10%] max-xl:block hidden">
                <Sidebar />
            </div>
            <div className="overlay z-[0]">
                <img
                    className="object-cover img-overlay w-[100%] h-[100%]"
                    src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693295525/a0feg1o1myzqyp2otb3o.png"
                    alt="bg-banner"
                ></img>
            </div>
            <div className="h-[100%] max-xl:mt-[22px] max-lg:mt-[20px] px-[10%] mt-[100px] flex flex-row w-[auto] max-lg:flex-col max-lg:justify-center max-lg:items-center">
                <div className="flex flex-col relative left-[-50px] w-[10%] items-center max-lg:static max-lg:flex-row max-lg:w-[100%] max-lg:justify-center">
                    <div className="w-[1px] h-[160px] bg-[#FFF] max-lg:w-[30%] max-lg:h-[1px]">
                    </div>
                    <div className="flex flex-col gap-[12px] my-[30px] max-lg:flex-row max-lg:w=[40%] max-lg:px-[12px]max-lg:my-[8px]">
                        <div className="flex justify-center items-center text-[#FFF] font-['Themify'] text-[14px] font-[400] w-[25.28px] h-[25.205px]">
                            f
                        </div>
                        <div className="flex justify-center items-center font-['Themify'] text-[11px] font-[400] w-[25.28px] h-[25.205px]">
                            <img className="" src={twt} alt="link twitter"></img>
                        </div>
                        <div className="flex justify-center items-center font-['Themify'] text-[11px] font-[400] w-[25.28px] h-[25.205px]">
                            <img className="" src={p} alt="link p"></img>
                        </div>
                    </div>
                    <div className="w-[1px] h-[160px] bg-[#FFF] max-lg:w-[30%] max-lg:h-[1px]">
                    </div>
                </div>
                <div className="w-[50%] max-2xl:w-[40%] flex flex-col justify-center max-lg:w-[100%] max-lg:items-center max-lg:mt-[12px]">
                    <div className="text-left special-font max-lg:text-[40px] max-2xl:text-[20px] max-sm:text-[32px]">
                        Its Quick & Amusing!
                    </div>
                    <div className="mb-[32px] text-left text-[#FFF] mt-[8px] text-[60px] max-lg:text-[68px] max-[500px]:text-[36px] max-sm:text-[42px] max-2xl:text-[36px] font-[700] font-['Helvetica'] max-lg:w-[100%] max-lg:text-center">
                        <span className="text-primary-orange font-[700] font-['Helvetica']">
                            Th
                        </span>
                        e Art of speed <br></br>
                        food Quality
                    </div>
                    <div className="mb-[32px] text-left flex text-[#FFF] leading-[24px] text-[16px] font-[400] max-[500px]:text-[12px] max-lg:w-[100%] max-lg:text-center max-lg:items-center max-lg:justify-center max-lg:text-[16px] max-2xl:text-[14px] max-sm:text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Varius sed pharetra dictum neque massa congue
                    </div>
                    <button className="max-lg:text-[16px] max-xl:w-[60%] relative z-index-1 cursor-pointer flex items-center justify-center w-[190px] h-[60px] rounded-[30px] bg-primary-orange text-[#FFF]">
                        See Menu
                    </button>
                </div>
                <div className="w-[40%] max-[500px]:hidden max-sm:scale-[0.64] max-2xl:w-[50%] max-lg:w-[100%] max-2xl:scale-[0.6] aspect-square flex max-lg:mt-[0px] max-lg:scale-[0.7] max-lg:justify-center max-lg:items-center">
                    <CircleSelector />
                </div>
            </div>
        </div>
    )
}

export default Banner