import Header from "../../layout/header"
import CircleSelector from "../circle"
import p from "../../../assets/p.png"
import twt from "../../../assets/twt.png"
import "./banner.css"

function Banner() {
    return (
        <div className="custom-background relative w-[1920px] h-[950px] bg-primary-background">
            <Header></Header>
            <div className="absolute top-[191px] left-[248px] flex flex-row">
                <div className="">
                    <div className="w-[1px] h-[158px] bg-[#FFF]">
                    </div>
                    <div>
                        <div className="mt-[45px] text-start pl-[3px] absolute left-[-6px] text-[#FFF] font-['Themify'] text-[11px] font-[400] w-[25.28px] h-[25.205px] leading-[normal]">
                            f
                        </div>
                        <div className="mt-[85.9px] mb-[15.69px] text-start pl-[3px] absolute left-[-6px] font-['Themify'] text-[11px] font-[400] w-[25.28px] h-[25.205px] leading-[normal]">
                            <img className="" src={twt} alt="link twitter"></img>
                        </div>
                        <div className="mt-[126.79px] mb-[15.69px] text-start pl-[3px] absolute left-[-6px] font-['Themify'] text-[11px] font-[400] w-[25.28px] h-[25.205px] leading-[normal]">
                            <img className="" src={p} alt="link p"></img>
                        </div>
                    </div>
                    <div className="w-[1px] h-[158px] bg-[#FFF] relative top-[187px]">
                    </div>
                </div>
                <div className="flex flex-col w-[480px]">
                    <div className="absolute top-[102px] left-[52px] special-font">
                        Its Quick & Amusing!
                    </div>
                    <p className="absolute top-[150px] left-[52px] right-[1148px] w-[100%] text-left text-[#FFF] mt-[8px] leading-[68px] text-[60px] font-[700] font-['Helvetica']">
                        <span className="text-primary-orange">
                            Th
                        </span>
                        e Art of speed <br></br>
                        food Quality
                    </p>
                    <div className="text-left flex absolute top-[318px] left-[52px] text-[#FFF] leading-[24px] text-[16px] font-[400]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Varius sed pharetra dictum neque massa congue
                    </div>
                    <button className="flex absolute top-[398px] items-center justify-center left-[52px] w-[190px] h-[60px] rounded-[30px] bg-primary-orange text-[#FFF]">
                        See Menu
                    </button>
                </div>
            </div>
            <CircleSelector />
        </div>
    )
}

export default Banner