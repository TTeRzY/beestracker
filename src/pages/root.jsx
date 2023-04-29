import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer";

export default function RootLayout() {
    const location = useLocation()
    const currentPath = location.pathname
    const noHeaderAndFooterPaths = ['/login', '/register', '/forgot-password' ,'/admin']
    return (
        <div>
            {!noHeaderAndFooterPaths.includes(currentPath) && <Header />}
            <Outlet />
            {!noHeaderAndFooterPaths.includes(currentPath) && <Footer />}
        </div>
    );
}