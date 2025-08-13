import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";


const Setting = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow "></div>
            <Footer/>
        </div>
    );
};

export default Setting;