import Banner from "./banner"
import Footer from "../layout/footer"
import "./restaurant.css"
import AboutUs from "./aboutus"
function Restaurant() {
    return (
        <div className="custom-background relative w-[1920px] bg-primary-background"> 
            <Banner />
            <AboutUs/>
            <Footer />
        </div>
    )
}

export default Restaurant