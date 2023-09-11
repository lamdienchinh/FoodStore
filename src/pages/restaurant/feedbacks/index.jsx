import "./FeedBacks.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import FeedBack from "./feedback";

function FeedBacks() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <svg className="mt-[20px]" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 40 17" fill="none">
                <ellipse cx="30.1065" cy="8.81784" rx="7.49542" ry="7.99802" fill="#FF9F0D" fill-opacity="0.3" />
            </svg>
        ),
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        arrows: false
    };
    return (
        <div className="pb-[60px]">
            <div className="text-left special-font sm:max-lg:text-[40px] lg:max-2xl:text-[20px] min-[375px]:max-sm:text-[32px]">
                Testimonials
            </div>
            <div className="text-left font-['Helvetica'] text-[48px] font-[700] text-[#FFF] sm:max-lg:text-[68px] min-[320px]:max-[500px]:text-[36px] min-[375px]:max-sm:text-[42px] lg:max-2xl:text-[36px]">
                What our client are saying
            </div>
            <div>
                <Slider {...settings}>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                </Slider>
            </div>
        </div>
    )
}

export default FeedBacks