import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Template = () => {
    return (<>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>);
}

export default Template;