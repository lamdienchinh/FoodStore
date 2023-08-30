import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

function Main() {

    return (
        <div className="bg-primary-background relative w-[auto]">
            <div className="px-[152px] bg-primary-background">
                <Header/>
            </div>
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}

export default Main;