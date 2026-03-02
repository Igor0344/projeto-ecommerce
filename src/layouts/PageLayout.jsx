import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";


const PageLayout = () => {
    return ( 
        <div>
            <Header/>
            <Menu />
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
     );
}
 
export default PageLayout;