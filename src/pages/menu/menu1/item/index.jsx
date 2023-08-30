import "./item.css"

function Item(props) {
    const check = props.direction;
    return (
        <div className={`flex ${props.direction}`}>
            <div className="w-[30%]">
                <img src={props.item.img} alt="ảnh đồ ăn"></img>
            </div>
            <div className={`w-[70%] flex flex-col ${check==="flex-row"?"pl-[200px]":"pr-[200px]"}`}>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.25 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.25 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.25 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 20.25H19.5" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.80905 20.2504C6.37372 19.5915 5.15763 18.5346 4.30519 17.205C3.45274 15.8755 2.99974 14.3293 3 12.75V8.25H19.5V12.75C19.5003 14.3293 19.0473 15.8756 18.1948 17.2051C17.3423 18.5346 16.1262 19.5915 14.6909 20.2504" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.5001 8.25C20.2957 8.25 21.0588 8.56607 21.6214 9.12868C22.184 9.69129 22.5001 10.4544 22.5001 11.25V12C22.5001 12.7956 22.184 13.5587 21.6214 14.1213C21.0588 14.6839 20.2957 15 19.5001 15H19.1833" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="text-left font-['Helvetica'] text-[48px] font-[700] text-[#333]">
                    {props.item.title}
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="menu-item-wrap flex flex-row">
                        <div className="w-[70%] flex flex-col text-start">
                            <div className="menu-item-name font-['Helvetica'] text-[24px] text-[#333] font-[700]">
                                {props.item.list[0].name}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#4F4F4F] font-[400]">
                                {props.item.list[0].des}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#828282] font-[400]">
                                {props.item.list[0].calo}
                            </div>
                        </div>
                        <div className="font-['Helvetica'] text-[20px] text-primary-orange font-[700] w-[30%] flex flex-row justify-end">
                            {props.item.list[0].price}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="menu-item-wrap w-[70%] flex flex-col text-start">
                            <div className="menu-item-name font-['Helvetica'] text-[24px] text-[#333] font-[700]">
                                {props.item.list[1].name}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#4F4F4F] font-[400]">
                                {props.item.list[1].des}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#828282] font-[400]">
                                {props.item.list[1].calo}
                            </div>
                        </div>
                        <div className="font-['Helvetica'] text-[20px] text-primary-orange font-[700] w-[30%] flex flex-row justify-end">
                            {props.item.list[1].price}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="menu-item-wrap w-[70%] flex flex-col text-start">
                            <div className="menu-item-name font-['Helvetica'] text-[24px] text-[#333] font-[700]">
                                {props.item.list[2].name}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#4F4F4F] font-[400]">
                                {props.item.list[2].des}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#828282] font-[400]">
                                {props.item.list[2].calo}
                            </div>
                        </div>
                        <div className="font-['Helvetica'] text-[20px] text-primary-orange font-[700] w-[30%] flex flex-row justify-end">
                            {props.item.list[2].price}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="menu-item-wrap w-[70%] flex flex-col text-start">
                            <div className="menu-item-name font-['Helvetica'] text-[24px] text-[#333] font-[700]">
                                {props.item.list[3].name}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#4F4F4F] font-[400]">
                                {props.item.list[3].des}
                            </div>
                            <div className="font-['Helvetica'] text-[16px] text-[#828282] font-[400]">
                                {props.item.list[3].calo}
                            </div>
                        </div>
                        <div className="font-['Helvetica'] text-[20px] text-primary-orange font-[700] w-[30%] flex flex-row justify-end">
                            {props.item.list[3].price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;