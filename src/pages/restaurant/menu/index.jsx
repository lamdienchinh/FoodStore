import "./Menu.css"
import { col1, col2 } from "../../../fakeData";
import Item from "./item";

function Menu() {
    return (
        <div className="pb-[50px]">
            <div className="special-font sm:max-lg:text-[40px] lg:max-2xl:text-[20px] min-[375px]:max-sm:text-[32px]">
                Choose & pick
            </div>
            <div className="text-[#FFF] text-[48px] font-[700] font-['Helvetica'] sm:max-lg:text-[68px] min-[320px]:max-[500px]:text-[36px] min-[375px]:max-sm:text-[42px] lg:max-2xl:text-[36px]">
                <span className="text-primary-orange font-['Helvetica'] ">Fr</span>om Our Menu
            </div>
            <div className="lg:flex lg:flex-row lg:gap-[32px] min-[600px]:grid-cols-4 text-left min-[320px]:gap-[10px] min-[320px]:grid min-[320px]:grid-cols-3 text-[#FFF] mt-[32px] font-['Inter'] text-[20px] font-[400]">
                <div className="text-primary-orange cursor-pointer font-[700]">
                    Breakfast
                </div>
                <div className="cursor-pointer hover:text-primary-orange font-[700]">
                    Lunch
                </div>
                <div className="cursor-pointer hover:text-primary-orange font-[700]">
                    Dinner
                </div>
                <div className="cursor-pointer hover:text-primary-orange font-[700]">
                    Dessert
                </div>
                <div className="cursor-pointer hover:text-primary-orange font-[700]">
                    Drink
                </div>
                <div className="cursor-pointer hover:text-primary-orange font-[700]">
                    Snack
                </div>
                <div className="cursor-pointer hover:text-primary-orange font-[700]">
                    Soups
                </div>
            </div>
            <div className="lg:flex-row min-[320px]:gap-[30px] min-[320px]:flex-col flex w-[100%] justify-center items-center content-center mt-[60px]">
                <div className="min-[320px]:w-[100%]  2xl:mr-[60px] px-[30px] bg-cover lg:w-[40%] bg-[url('https://res.cloudinary.com/dfoj6menm/image/upload/v1693299694/k0zo9thssz3cndze69jx.png')]">
                    <img className="w-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693299428/fsrpntmqewdwrgwqipmx.png" alt="ảnh dĩa trong menu"></img>
                </div>
                <div className="min-[600px]:flex-row min-[320px]:gap-[30px] flex min-[320px]:flex-col lg:width-[60%]">
                    <div className="min-[320px]:w-[100%] w-[30%] flex flex-col gap-[30px] justify-center items-center">
                        {
                            col1 && col1.map((item, index) => (
                                <Item item={item} key={index} />
                            ))
                        }
                    </div>
                    <div className="min-[320px]:w-[100%] w-[30%] flex flex-col gap-[30px] justify-center items-center">
                        {
                            col2 && col2.map((item, index) => (
                                <Item item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;