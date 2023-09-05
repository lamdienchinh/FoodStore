import "./Menu.css"
import { col1, col2 } from "../../../fakeData";
import Item from "./item";

function Menu() {
    console.log(col1);
    console.log(col2)
    return (
        <div>
            <div className="special-font">
                Choose & pick
            </div>
            <div className="text-[#FFF] text-[48px] font-[700] font-['Helvetica']">
                <span className="text-primary-orange">Fr</span>om Our Menu
            </div>
            <div className="flex flex-row gap-[32px] text-[#FFF] mt-[32px] font-['Inter'] text-[20px] font-[400]">
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
            <div className="flex flex-row w-[100%] justify-center items-center content-center mt-[60px]">
                <div className="mr-[60px] px-[30px] bg-cover w-[40%] bg-[url('https://res.cloudinary.com/dfoj6menm/image/upload/v1693299694/k0zo9thssz3cndze69jx.png')]">
                    <img className="w-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693299428/fsrpntmqewdwrgwqipmx.png" alt="ảnh dĩa trong menu"></img>
                </div>
                <div className="w-[30%] flex flex-col gap-[30px]">
                    {
                        col1 && col1.map((item, index) => (
                            <Item item={item} key={index}/>
                        ))
                    }
                </div>
                <div className="w-[30%] flex flex-col gap-[30px]">
                    {
                        col2 && col2.map((item, index) => (
                            <Item item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;