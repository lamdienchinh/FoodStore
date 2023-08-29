import Banner from "./banner"
import Footer from "../layout/footer"
import "./restaurant.css"
import AboutUs from "./aboutus"
import FoodCategory from "./foodcategory"
function Restaurant() {
    return (
        <div className="custom-background relative w-[1920px] bg-primary-background"> 
            <Banner />
            <AboutUs/>
            <FoodCategory/>
            <Footer />
        </div>
    )
}

export default Restaurant