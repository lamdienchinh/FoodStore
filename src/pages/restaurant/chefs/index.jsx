import "./Chefs.css"

function Chefs() {
    return (
        <div className="relative mt-[60px] pb-[50px]">
            <div className="special-font sm:max-lg:text-[40px] lg:max-2xl:text-[20px] min-[375px]:max-sm:text-[32px]">
                Chefs
            </div>
            <div className="text-[#FFF] font-[700] font-['Helvetica'] text-[48px] sm:max-lg:text-[68px] min-[320px]:max-[500px]:text-[36px] min-[375px]:max-sm:text-[42px] lg:max-2xl:text-[36px]">
                <span className="text-primary-orange font-['Helvetica']">Me</span>et Our Chef
            </div>
            <div className="min-[320px]:grid-cols-1 min-[600px]:grid-cols-2 relative z-[1] grid xl:grid-cols-4 w-[100%] gap-[20px]">
                <div className="chefcard relative cursor-pointer">
                    <img className="hover:opacity-[0.8]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693301318/fplnkrhng3hu4qsaarfn.png" alt="đầu bếp"></img>
                    <div className="bg-[#FFF] w-[50%] py-[5px] text-[#333] font-[700] absolute bottom-[0%] rounded-bl-[6px] text-left pl-[20px] font-['Inter'] flex flex-col gap-[10px]">
                        <div>D.Estwood</div>
                        <div className="font-[400] text-[14px]">Chief Chef</div>
                    </div>
                </div>
                <div className="chefcard relative cursor-pointer">
                    <img className="hover:opacity-[0.8]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693301318/zkudaggyi9yfai51othi.png" alt="đầu bếp"></img>
                    <div className="bg-[#FFF] w-[50%] py-[5px] text-[#333] font-[700] absolute bottom-[0%] rounded-bl-[6px] text-left pl-[20px] font-['Inter'] flex flex-col gap-[10px]">
                        <div>D.Scoriesh</div>
                        <div className="font-[400] text-[14px]">Assistant Chef</div>
                    </div>
                </div>
                <div className="chefcard relative cursor-pointer">
                    <img className="hover:opacity-[0.8]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693301318/xea9rpvuvlcuzgjliygz.png" alt="đầu bếp"></img>
                    <div className="bg-[#FFF] w-[50%] py-[5px] text-[#333] font-[700] absolute bottom-[0%] rounded-bl-[6px] text-left pl-[20px] font-['Inter'] flex flex-col gap-[10px]">
                        <div>M. William</div>
                        <div className="font-[400] text-[14px]">Advertising Chef</div>
                    </div>
                </div>
                <div className="chefcard relative cursor-pointer">
                    <img className="hover:opacity-[0.8]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693301318/iakv7a7zqxfw2gpw0ass.png" alt="đầu bếp"></img>
                    <div className="bg-[#FFF] w-[50%] py-[5px] text-[#333] font-[700] absolute bottom-[0%] rounded-bl-[6px] text-left pl-[20px] font-['Inter'] flex flex-col gap-[10px]">
                        <div>W.Readfroad</div>
                        <div className="font-[400] text-[14px]">Chef</div>
                    </div>
                </div>
            </div>
            <div className="absolute z-[0] left-[-152px] top-0">
                <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693302989/jrk1y7gheab86mzpbd6d.png" alt="background ngò tây"></img>
            </div>
            <button className="font-[Inter] bg-transparent text-[#FFF] border border-primary-orange mt-[50px] rounded-[25px] px-[30px] py-[10px]">See More</button>
        </div>
    )
}
export default Chefs