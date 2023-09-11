import "./FoodCategory.css"

function FoodCategory() {

    return (
        <div className="relative 2xl:mt-[120px] w-[auto] bg-primary-background max-2xl:mt-[10px] pb-[60px]">
            <div className="special-font max-lg:text-[40px] max-2xl:text-[20px] max-sm:text-[32px]">
                Food Category
            </div>
            <div className="mt-[8px] mb-[56px] text-[#FFF] text-[48px] leading-[56px] font-[700] font-['Helvetica'] max-lg:text-[68px] max-[500px]:text-[36px] max-sm:text-[42px] max-2xl:text-[36px]">
                <span className="text-primary-orange font-['Helvetica']">Ch</span>
                oose Food Item
            </div>
            <div className="grid lg:grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 justify-center items-center gap-[33px] font-['Inter'] font-[700] relative z-[1]">
                <div className="relative food-category flex justify-center items-center">
                    <img className="object-cover h-[100%] w-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/kifzgx7zlsuokysaueic.png" alt="food1"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
                <div className="relative food-category flex justify-center items-center">
                    <img className="object-cover h-[100%] w-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/ojmabzwgljeltx7t2j3p.png" alt="food2"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
                <div className="relative food-category flex justify-center items-center">
                    <img className="object-cover h-[100%] w-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/yw0aolx1a2mbm8kpa0qw.png" alt="food3"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
                <div className="relative food-category flex justify-center items-center">
                    <img className="object-cover h-[100%] w-[100%]" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/ezaanmueez2nf9ttrt8d.png" alt="food4"></img>
                    <div className="text-primary-orange bg-[#FFF] py-[6px] px-[16px] rounded-[6px] text-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Sale 30%
                    </div>
                    <div className="text-[16px] text-[#FFF] w-[60%] py-[6px] px-[16px] rounded-[6px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-orange">
                        Fast Food Dish
                    </div>
                </div>
            </div>
            <div className="absolute right-[-10%] top-[50%] z-0">
                <img className="" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693296312/ahxvfqlozngnx1mxlnmi.png" alt="ngò tây">
                </img>
            </div>
        </div>
    )
}

export default FoodCategory