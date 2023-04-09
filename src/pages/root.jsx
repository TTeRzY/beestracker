import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer";

export default function RootLayout() {
    const location = useLocation();
    const currentPath = location.pathname
    const renderHeader = currentPath !== '/login' && currentPath !== '/register' && currentPath !== '/forgot-password';
    const renderFooter = currentPath !== '/login' && currentPath !== '/register' && currentPath !== '/forgot-password';
    return (
        <div className="bg-gray-100">
            {renderHeader && <Header />}
            <Outlet />
            {renderFooter && <Footer />}
        </div>
    );
}