import "./foodcategory.css"

function FoodCategory() {

    return (
        <div className="mt-[120px] w-[1920px] bg-primary-background">
            <div className="special-font">
                Food Category
            </div>
            <div className="mt-[8px] mb-[56px] text-[#FFF] text-[48px] leading-[56px]  font-[700] font-['Helvetica']">
                <span className="text-primary-orange">Ch</span>
                <span>oose Food Item</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-[33px]">
                <img className="" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/kifzgx7zlsuokysaueic.png">

                </img>
                <img className="" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/ojmabzwgljeltx7t2j3p.png">

                </img>
                <img className="" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/yw0aolx1a2mbm8kpa0qw.png">

                </img>
                <img className="" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693277987/ezaanmueez2nf9ttrt8d.png">

                </img>
            </div>
        </div>
    )
}

export default FoodCategory