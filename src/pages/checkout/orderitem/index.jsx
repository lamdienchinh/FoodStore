function OrderItem(props) {
    return (
        <div>
            <div className="flex flex-row">
                <div className="w-[20%]">
                    <img src={props.item.img} alt="thức ăn order"></img>
                </div>
                <div className="text-left ml-[18px] w-[80%]flex flex-col gap-[12px] font-['Helvetica']">
                    <div className="text-[16px] font-[700]">
                        {props.item.name}
                    </div>
                    <div className="text-[14px]">
                        {props.item.des}
                    </div>
                    <div className="text-[14px]">
                        {props.item.price}$
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem