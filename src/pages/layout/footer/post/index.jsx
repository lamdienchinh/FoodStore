
function Recent_Post(props) {
    return (
        <div className="flex flex-row mb-[15.95px]">
            <div className="w-[80.243px] h-[79.759px] mr-[16.05px]">
                <img className="object-cover w-[80.243px] h-[79.759px]" src={props.post.img} alt="post hiện tại"></img>
            </div>
            <div className="flex flex-col">
                <div className="text-left w-[177.538px] h-[47.855px] text-[#FFF] font-['Helvetica'] text-[16px] font-[400] leading-[24px]">
                    {props.post.title}
                </div>
                <div className="text-left mt-[4.98px] w-[177.538px] h-[21.934px] text-[#FFF] font-['Helvetica'] text-[14px] font-[400] leading-[22px] opacity-[0.49]">
                    {props.post.time}
                </div>
            </div>
        </div>
    );
}

export default Recent_Post;