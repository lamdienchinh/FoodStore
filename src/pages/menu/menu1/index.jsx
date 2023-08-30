import Item from "./item";
function MenuSection(props) {
    return (
        <div className="py-[100px] bg-[#FFF] px-[152px] flex flex-col gap-[80px]">
            <Item direction="flex-row" item={props.menu1}>
            </Item>
            <Item direction="flex-row-reverse" item={props.menu2}>
            </Item>
        </div>
    )
}

export default MenuSection;