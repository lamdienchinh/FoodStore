import "./Item.css"

function Item (props) {
    console.log(props)
    return (
       <div className="flex flex-row cursor-pointer">
            <div className="w-[30%] flex items-start pt-[4px]"> 
                <img className="object-contain" src={props.item.img}></img>
            </div>
            <div className="pl-[10px] text-left w-[70%] text-[#FFF] flex items-start flex-col">
                <div className="text-[16px] font-[700]">
                    {props.item.name}
                </div>
                <div className="text-[12px] font-[400]">
                    {props.item.des}
                </div>
                <div className="text-primary-orange font-[700] text-[14px]">
                    {props.item.price} $
                </div>
            </div>
       </div> 
    )
}

export default Item