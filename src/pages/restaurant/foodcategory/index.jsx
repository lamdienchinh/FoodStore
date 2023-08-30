import "./FoodCategory.css"

function FoodCategory() {

    return (
        <div className="relative mt-[120px] w-[auto] bg-primary-background">
            <div className="special-font">
                Food Category
            </div>
            <div className="mt-[8px] mb-[56px] text-[#FFF] text-[48px] leading-[56px]  font-[700] font-['Helvetica']">
                <span className="text-primary-orange">Ch</span>
                <span>oose Food Item</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-[33px] font-['Inter'] font-[700] relative z-[1]">
                <div className="relative food-category">
                    <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/kifzgx7zlsuokysaueic.png" alt="food1"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
                <div className="relative food-category">
                    <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/ojmabzwgljeltx7t2j3p.png" alt="food2"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
                <div className="relative food-category">
                    <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/yw0aolx1a2mbm8kpa0qw.png" alt="food3"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
                <div className="relative food-category">
                    <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/ezaanmueez2nf9ttrt8d.png" alt="food4"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
            </div>
            <div className="absolute right-[-152px] top-[50%] z-0">
                <img className="" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693296312/ahxvfqlozngnx1mxlnmi.png" alt="ngò tây">
                </img>
            </div>
        </div>
    )
}

export default FoodCategory