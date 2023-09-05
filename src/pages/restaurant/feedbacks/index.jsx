import "./FeedBacks.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedBack from "./feedback";

function FeedBacks() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <svg className="mt-[20px]" xmlns="http://www.w3.org/2000/svg" width="87" height="17" viewBox="0 0 87 17" fill="none">
                <ellipse cx="30.1065" cy="8.81784" rx="7.49542" ry="7.99802" fill="#FF9F0D" fill-opacity="0.3" />
            </svg>
        ),
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        arrows: false
    };
    return (
        <div className="mb-[140px]">
            <div className="text-left special-font">
                Testimonials
            </div>
            <div className="text-left font-['Helvetica'] text-[48px] font-[700] text-[#FFF]">
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