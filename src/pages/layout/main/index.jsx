import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Sidebar from "../sidebar";
function Main() {

    return (
        <div className="bg-primary-background relative w-[auto]">
            <div className="px-[152px] bg-primary-background">
                <Header/>
            </div>
            {/* <div>
                <Sidebar/>
            </div> */}
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}

export default Main;