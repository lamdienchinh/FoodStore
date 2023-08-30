import Header from "../../layout/header"
import CircleSelector from "../circle"
import p from "../../../assets/p.png"
import twt from "../../../assets/twt.png"
import "./Banner.css"

function Banner() {
    return (
        <div className="pb-[60px] relative w-[auto]">
            <div className="px-[152px]">
                <Header></Header>
            </div>
            <div className="overlay">
                <img
                    className="object-cover img-overlay w-[100%] h-[100%]"
                    src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693295525/a0feg1o1myzqyp2otb3o.png"
                    alt="bg-banner"
                ></img>
            </div>
            <div className="px-[152px] mt-[100px] flex flex-row w-[auto]">
                <div className="flex flex-col relative left-[-50px] w-[10%] items-center">
                    <div className="w-[1px] h-[160px] bg-[#FFF]">
                    </div>
                    <div className="flex flex-col gap-[12px] my-[30px]">
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
                    <div className="w-[1px] h-[160px] bg-[#FFF]">
                    </div>
                </div>
                <div className="flex flex-col justify-center w-[50%]">
                    <div className="text-left special-font">
                        Its Quick & Amusing!
                    </div>
                    <p className="mb-[32px] text-left text-[#FFF] mt-[8px] leading-[68px] text-[60px] font-[700] font-['Helvetica']">
                        <span className="text-primary-orange">
                            Th
                        </span>
                        e Art of speed <br></br>
                        food Quality
                    </p>
                    <div className="mb-[32px] text-left flex text-[#FFF] leading-[24px] text-[16px] font-[400]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Varius sed pharetra dictum neque massa congue
                    </div>
                    <button className="relative z-index-1 cursor-pointer flex items-center justify-center w-[190px] h-[60px] rounded-[30px] bg-primary-orange text-[#FFF]">
                        See Menu
                    </button>
                </div>
                <div className="self-center flex">
                    <CircleSelector />
                </div>
            </div>
        </div>
    )
}

export default Banner