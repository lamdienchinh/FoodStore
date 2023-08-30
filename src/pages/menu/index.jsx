import Clients from "../restaurant/clients"
import MenuSection from "./menu1";
import { menu1, menu2, menu3, menu4 } from "../../fakeData";
function Menu() {
    return (
        <div className="">
            <div className="py-[160px] custom-bg flex flex-column justify-center items-center flex-col">
                <h1 className="font-['Helvetica'] text-[48px] font-[700] leading-[56px] text-[#FFF] pb-20px">
                    Our Menu
                </h1>
                <div className="font-['Inter'] text-[20px] font-[400] leading-[28px] text-[#FFF]">
                    Home {`>`} <span className="text-primary-orange">Menu</span>
                </div>
            </div>
            <MenuSection menu1={menu1} menu2={menu2}></MenuSection>
            <Clients></Clients>
            <MenuSection menu1={menu3} menu2={menu4}></MenuSection>
            <div className="px-[152px] flex flex-col bg-[#FFF] py-[30px] justify-center items-center">
                <div className="font-['Inter'] text-[18px]">
                    Partners & Clients
                </div>
                <div className="font-['Inter'] text-[48px] font-[700] text-[#333]">
                    We work with the best pepole
                </div>
                <div className="flex flex-row justify-between w-[100%] mt-[32px] mb-[50px]">
                    <div>
                        <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693379533/aty7382ejrwl8dsfrusm.png" alt="logo của parters"></img>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693379533/sddtibwzi0jqop3hqrio.png" alt="logo của parters"></img>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693379533/xnl4sfdxd8fcaa8qfdsh.png" alt="logo của parters"></img>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693379533/wqybttmx6sbenl66odqb.png" alt="logo của parters"></img>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693379533/lz6xcbaa2n1zloeuukaz.png" alt="logo của parters"></img>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693379533/wmc8qudzby8eysa8s4ge.png" alt="logo của parters"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;