import {Outlet, useLocation} from "react-router-dom";
import Navbar from "../components/admin/navbar";
import Sidebar from "../components/admin/sidebar";

export default function AdminLayout() {
    const location = useLocation()
    return (
        <div className="admin-page">
            <Navbar />
            <div className="flex pt-16 overflow-hidden">
                <Sidebar />
                <div className="fixed inset-0 z-10 hidden " id="sidebarBackdrop"></div>
                <Outlet />
            </div>
        </div>
    );
}