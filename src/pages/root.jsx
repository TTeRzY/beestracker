import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer";

export default function RootLayout() {
    const location = useLocation();
    const currentPath = location.pathname
    return (
        <div className="bg-gray-100">
            {currentPath !== '/login' && <Header />}
            <Outlet />
            {currentPath !== '/login' && <Footer />}
        </div>
    );
}