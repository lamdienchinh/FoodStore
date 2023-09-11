import Banner from "./banner"
import Footer from "../layout/footer"
import AboutUs from "./aboutus"
import FoodCategory from "./foodcategory"
import Reason from "./reason"
import "./Restaurant.css"
import Clients from "./clients"
import Menu from "./menu"
import Chefs from "./chefs"
import FeedBacks from "./feedbacks"
import Video from "./video"
import Blogs from "./blogs"

function Restaurant() {
    return (
        <div className="custom-background relative w-[auto] bg-primary-background">
            <Banner />
            <div className="mb-[60px] px-[10%]">
                <AboutUs />
                <FoodCategory />
                <Reason />
            </div>
            <Clients />
            <div className="mt-[60px] px-[10%]">
                <Menu />
                <Chefs />
                <FeedBacks/>
            </div>
            <Video/>
            <Blogs/>
            <Footer />
        </div>
    )
}

export default Restaurant